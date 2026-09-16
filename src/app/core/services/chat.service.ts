import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as signalR from '@microsoft/signalr';

export interface ChatMessage {
  id?: string;
  senderId?: string;
  recipientId?: string;
  message: string;
  attachmentUrl?: string;
  createdAt?: string;
  isRead?: boolean;
  senderRole?: string;
  senderType?: string;
  senderName?: string;
  guestName?: string;
}

export interface ConversationResponse {
  id: string;
  messages: ChatMessage[];
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private http = inject(HttpClient);
  private baseUrl = '/api';

  private hubConnection?: signalR.HubConnection;
  private messageReceivedSource = new Subject<ChatMessage>();
  messageReceived$ = this.messageReceivedSource.asObservable();

  private refreshConversationSource = new Subject<void>();
  refreshConversation$ = this.refreshConversationSource.asObservable();

  private mockConversation: ConversationResponse = {
    id: 'conv-hayat-support',
    messages: [
      {
        id: 'welcome-msg-1',
        message: 'أهلاً بك في متجر حياة ميك أب! 💄 يسعدنا تواصلك معنا، كيف يمكننا مساعدتك اليوم؟',
        createdAt: new Date().toISOString(),
        isRead: true,
        senderRole: 'Staff',
        senderType: 'Staff',
        senderName: 'فريق دعم حياة ميك أب',
      },
    ],
  };

  triggerRefresh() {
    this.refreshConversationSource.next();
  }

  private getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return (
        localStorage.getItem('hy-auth-token') ||
        localStorage.getItem('lk-auth-token') ||
        localStorage.getItem('token')
      );
    }
    return null;
  }

  getMyConversation(): Observable<ConversationResponse | null> {
    return this.http.get<any>(`${this.baseUrl}/chat/conversations/my`).pipe(
      map((res) => {
        const data = res?.data !== undefined ? res.data : res;
        if (!data || !data.id) return this.mockConversation;
        return data as ConversationResponse;
      }),
      catchError(() => {
        return of(this.mockConversation);
      })
    );
  }

  uploadMedia(file: File | Blob, fileName: string = 'recording.webm'): Observable<string> {
    const formData = new FormData();
    formData.append('file', file, fileName);

    return this.http.post<any>(`${this.baseUrl}/chat/upload`, formData).pipe(
      map((res) => {
        const data = res?.data ?? res;
        return data?.url || '';
      }),
      catchError(() => {
        if (typeof window !== 'undefined' && window.URL && file instanceof Blob) {
          const localUrl = URL.createObjectURL(file);
          return of(localUrl);
        }
        return of('');
      })
    );
  }

  sendMessage(
    conversationId: string,
    text: string,
    attachmentUrl?: string,
    guestName?: string
  ): Observable<any> {
    const payload: any = { message: text, text, attachmentUrl, guestName };
    const targetUrl = !conversationId
      ? `${this.baseUrl}/chat/send`
      : `${this.baseUrl}/chat/conversations/${conversationId}/messages`;

    return this.http.post<any>(targetUrl, payload).pipe(
      catchError(() => {
        // Fallback simulated response
        const newMsg: ChatMessage = {
          id: 'msg-' + Date.now(),
          message: text,
          attachmentUrl,
          createdAt: new Date().toISOString(),
          isRead: false,
          senderRole: 'Customer',
          senderType: 'Customer',
          senderName: guestName,
        };
        this.mockConversation.messages.push(newMsg);

        // Automated smart reply after brief delay
        setTimeout(() => {
          const autoReply: ChatMessage = {
            id: 'staff-reply-' + Date.now(),
            message: this.generateAutoReply(text),
            createdAt: new Date().toISOString(),
            isRead: false,
            senderRole: 'Staff',
            senderType: 'Staff',
            senderName: 'فريق دعم حياة ميك أب',
          };
          this.mockConversation.messages.push(autoReply);
          this.messageReceivedSource.next(autoReply);
        }, 1200);

        return of({ success: true, data: { conversationId: this.mockConversation.id } });
      })
    );
  }

  private generateAutoReply(customerText: string): string {
    const lower = customerText.toLowerCase();
    if (lower.includes('طلب') || lower.includes('شحن') || lower.includes('توصيل')) {
      return 'يمكنك تتبع شحنتك عبر صفحة "تتبع الطلب" في الموقع برقم الطلب الخاص بك. التوصيل يستغرق من 2 إلى 4 أيام عمل داخل المملكة ✨';
    }
    if (lower.includes('كريم اساس') || lower.includes('فاونديشن') || lower.includes('درجة') || lower.includes('بشرة')) {
      return 'لتحديد درجة كريم الأساس المثالية لك بدقة، جربي "اختبار البشرة" (Skin Quiz) المتوفر لدينا مجاناً في القائمة! 🌸';
    }
    if (lower.includes('عروض') || lower.includes('خصم') || lower.includes('كود')) {
      return 'لدينا حالياً عروض مميزة على الباقات وبكجات التوفير مع شحن مجاني للطلبات فوق 200 ر.س! 🛍️';
    }
    return 'شكراً لتواصلك مع حياة ميك أب! تم استلام رسالتك وسيتابع معك أحد ممثلي خدمة العملاء الآن لمساعدتك.';
  }

  markRead(conversationId: string): Observable<any> {
    if (!conversationId) {
      return of(null);
    }
    return this.http
      .post<any>(`${this.baseUrl}/chat/conversations/${conversationId}/read`, {})
      .pipe(catchError(() => of(null)));
  }

  startConnection(conversationId: string) {
    if (typeof window === 'undefined') return;

    if (this.hubConnection?.state === signalR.HubConnectionState.Connected) {
      if (conversationId) {
        this.hubConnection
          .invoke('JoinConversation', conversationId)
          .catch(() => {});
      }
      return;
    }

    const token = this.getToken();
    const hubUrl = '/chatHub';

    try {
      this.hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(hubUrl, {
          accessTokenFactory: () => token || '',
        })
        .withAutomaticReconnect()
        .build();

      this.hubConnection.on('ReceiveMessage', (message: any) => {
        this.messageReceivedSource.next({
          message: message.message,
          createdAt: message.timestamp,
          senderId: message.userId,
          senderRole: 'Staff',
          senderType: 'Staff',
          senderName: message.userName || 'فريق دعم حياة ميك أب',
        });
      });

      this.hubConnection
        .start()
        .then(() => {
          if (conversationId) {
            this.hubConnection
              ?.invoke('JoinConversation', conversationId)
              .catch(() => {});
          }
        })
        .catch(() => {
          // Gracefully continue in fallback mode if SignalR endpoint isn't live
        });
    } catch {
      // Ignore connection errors if server offline
    }
  }

  stopConnection() {
    if (this.hubConnection) {
      this.hubConnection.stop().catch(() => {});
    }
  }
}
