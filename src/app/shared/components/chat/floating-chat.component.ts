import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  OnInit,
  OnDestroy,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ChatService } from '../../../core/services/chat.service';
import { getOrCreateUserTag } from '../../../core/utils/user-tag.util';

@Component({
  selector: 'app-floating-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './floating-chat.component.html',
  styleUrl: './floating-chat.component.css',
})
export class FloatingChatComponent implements OnInit, OnDestroy {
  chatService = inject(ChatService);

  isOpen = false;
  isSearchOpen = false;
  messageSearch = '';
  messageValue = '';
  menuMessageId = '';
  reactionMessageId = '';
  replyMessage: any = null;
  editMessage: any = null;
  deleteMessage: any = null;
  errorMessage = '';
  isRecording = false;
  recordingSeconds = 0;
  unreadCount = 0;
  userTag = getOrCreateUserTag();
  mediaRecorder: any = null;
  audioChunks: Blob[] = [];
  recordingTimer: any = null;
  mediaStream: MediaStream | null = null;
  selectedImageModal: string | null = null;

  REACTION_OPTIONS = ['👍', '❤️', '😂', '😮', '😢', '🙏'];
  messages: any[] = [];
  conversationId?: string;
  private messageSub?: Subscription;
  private refreshSub?: Subscription;

  @ViewChild('messagesRef') messagesRef!: ElementRef<HTMLDivElement>;
  @ViewChild('inputRef') inputRef!: ElementRef<HTMLTextAreaElement>;

  ngOnInit() {
    this.loadConversation();

    this.refreshSub = this.chatService.refreshConversation$.subscribe(() => {
      this.loadConversation();
      if (!this.isOpen) {
        this.unreadCount = Math.max(1, this.unreadCount);
      }
    });
  }

  ngOnDestroy() {
    this.messageSub?.unsubscribe();
    this.refreshSub?.unsubscribe();
    this.chatService.stopConnection();
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach((t) => t.stop());
    }
    if (this.recordingTimer) {
      clearInterval(this.recordingTimer);
    }
  }

  loadConversation() {
    this.chatService.getMyConversation().subscribe({
      next: (res) => {
        if (res && res.id) {
          this.conversationId = res.id;

          this.messages = (res.messages || []).map((m: any) => {
            const isStaff =
              (m.senderType || m.senderRole) === 'Staff' ||
              m.guestName === 'Support' ||
              (m.message &&
                (m.message.includes('حياة ميك أب') ||
                  m.message.includes('خدمة العملاء') ||
                  m.message.includes('الدعم الفني')));
            const att = m.attachmentUrl;
            const isAudio =
              att &&
              (/\.(webm|mp3|wav|ogg|m4a)$/i.test(att) ||
                att.includes('/audio') ||
                att.startsWith('blob:') ||
                att.startsWith('data:audio'));
            const isImage =
              att &&
              (/\.(png|jpg|jpeg|webp|gif)$/i.test(att) ||
                att.includes('/images') ||
                att.startsWith('data:image'));

            return {
              id: m.id || 'msg-' + Math.random().toString(36).substring(2, 9),
              sender: isStaff ? 'staff' : 'customer',
              senderName: isStaff
                ? 'فريق دعم حياة ميك أب'
                : m.senderName || this.userTag,
              senderType: isStaff ? 'Staff' : 'Customer',
              isRead: m.isRead,
              text:
                (isAudio || isImage) &&
                (!m.message ||
                  m.message === 'تسجيل صوتي' ||
                  m.message === 'صورة مرفقة' ||
                  m.message === 'Attachment')
                  ? ''
                  : m.message,
              kind: isAudio ? 'audio' : isImage ? 'image' : 'text',
              mediaUrl: att,
              sentAt: m.createdAt
                ? new Date(m.createdAt).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                : new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  }),
            };
          });

          if (this.isOpen) {
            this.unreadCount = 0;
            this.chatService.markRead(this.conversationId).subscribe();
          } else {
            const unread = this.messages.filter(
              (m) => m.sender === 'staff' && !m.isRead
            );
            this.unreadCount = Math.max(unread.length, this.unreadCount);
          }

          this.chatService.startConnection(this.conversationId);

          if (!this.messageSub) {
            this.messageSub = this.chatService.messageReceived$.subscribe(
              (msg) => {
                const isStaff =
                  (msg.senderType || msg.senderRole) === 'Staff' ||
                  msg.guestName === 'Support' ||
                  (msg.message &&
                    (msg.message.includes('حياة ميك أب') ||
                      msg.message.includes('خدمة العملاء')));
                const targetSender = isStaff ? 'staff' : 'customer';
                const isDuplicate =
                  msg.id && this.messages.some((m) => m.id === msg.id);
                if (isDuplicate) return;

                const att = msg.attachmentUrl;
                const isAudio =
                  att &&
                  (/\.(webm|mp3|wav|ogg|m4a)$/i.test(att) ||
                    att.includes('/audio') ||
                    att.startsWith('blob:') ||
                    att.startsWith('data:audio'));
                const isImage =
                  att &&
                  (/\.(png|jpg|jpeg|webp|gif)$/i.test(att) ||
                    att.includes('/images') ||
                    att.startsWith('data:image'));

                this.messages.push({
                  id:
                    msg.id ||
                    'msg-' + Math.random().toString(36).substring(2, 9),
                  sender: targetSender,
                  senderName: isStaff
                    ? 'فريق دعم حياة ميك أب'
                    : msg.senderName || this.userTag,
                  senderType: isStaff ? 'Staff' : 'Customer',
                  isRead: this.isOpen,
                  text:
                    (isAudio || isImage) &&
                    (!msg.message ||
                      msg.message === 'تسجيل صوتي' ||
                      msg.message === 'صورة مرفقة' ||
                      msg.message === 'Attachment')
                      ? ''
                      : msg.message,
                  kind: isAudio ? 'audio' : isImage ? 'image' : 'text',
                  mediaUrl: att,
                  sentAt: msg.createdAt
                    ? new Date(msg.createdAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })
                    : new Date().toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      }),
                });

                if (!this.isOpen) {
                  if (isStaff) {
                    this.unreadCount++;
                  }
                } else {
                  if (isStaff && this.conversationId) {
                    this.chatService.markRead(this.conversationId).subscribe();
                  }
                }
                setTimeout(() => this.scrollToBottom(), 100);
              }
            );
          }

          setTimeout(() => this.scrollToBottom(), 100);
        }
      },
    });
  }

  scrollToBottom() {
    if (this.messagesRef && this.messagesRef.nativeElement) {
      this.messagesRef.nativeElement.scrollTop =
        this.messagesRef.nativeElement.scrollHeight;
    }
  }

  get normalizedMessageSearch() {
    return this.messageSearch.trim().toLowerCase();
  }

  get searchResultCount() {
    return this.messages.filter((m) => this.isSearchMatch(m)).length;
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
    if (!this.isSearchOpen) this.messageSearch = '';
  }

  setIsOpen(value: boolean) {
    this.isOpen = value;
    if (value) {
      this.unreadCount = 0;
      if (this.conversationId) {
        this.chatService.markRead(this.conversationId).subscribe();
      }
      setTimeout(() => this.scrollToBottom(), 100);
      if (!this.conversationId) {
        this.loadConversation();
      }
    }
  }

  toggleChat() {
    this.setIsOpen(!this.isOpen);
  }

  messageKind(message: any): string {
    return message.kind || 'text';
  }

  isSearchMatch(message: any): boolean {
    if (!this.normalizedMessageSearch) return true;
    return (message.text || '')
      .toLowerCase()
      .includes(this.normalizedMessageSearch);
  }

  scrollToMessage(id: string) {
    const el = document.querySelector(`[data-message-id="${id}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  openImage(url: string) {
    this.selectedImageModal = url;
  }

  closeImageModal() {
    this.selectedImageModal = null;
  }

  reactToMessage(message: any, emoji: string) {
    if (!message.reactions) {
      message.reactions = [];
    }
    const existing = message.reactions.find((r: any) => r.emoji === emoji);
    if (existing) {
      existing.count++;
    } else {
      message.reactions.push({ emoji, count: 1 });
    }
    this.reactionMessageId = '';
    this.menuMessageId = '';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.customer-floating-chat__actions')) {
      this.menuMessageId = '';
      this.reactionMessageId = '';
    }
  }

  toggleMenu(id: string) {
    this.menuMessageId = this.menuMessageId === id ? '' : id;
    this.reactionMessageId = '';
  }

  toggleReaction(id: string) {
    this.reactionMessageId = id;
    this.menuMessageId = '';
  }

  chooseReply(message: any) {
    this.replyMessage = message;
    this.menuMessageId = '';
    this.inputRef?.nativeElement.focus();
  }

  chooseEdit(message: any) {
    this.editMessage = message;
    this.messageValue = message.text || '';
    this.menuMessageId = '';
    this.inputRef?.nativeElement.focus();
  }

  async copyMessage(message: any) {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(message.text || '');
      }
      this.menuMessageId = '';
    } catch {
      this.menuMessageId = '';
    }
  }

  prepareDelete(message: any) {
    this.deleteMessage = message;
    this.menuMessageId = '';
  }

  clearComposerMode() {
    this.replyMessage = null;
    this.editMessage = null;
  }

  getPreview(message: any): string {
    return message?.text || '';
  }

  formatRecordingTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remaining = seconds % 60;
    return `${minutes}:${remaining.toString().padStart(2, '0')}`;
  }

  async startRecording() {
    if (
      typeof navigator === 'undefined' ||
      !navigator.mediaDevices?.getUserMedia
    ) {
      this.errorMessage = 'التسجيل الصوتي غير مدعوم في هذا المتصفح';
      setTimeout(() => (this.errorMessage = ''), 4000);
      return;
    }
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      this.audioChunks = [];
      const options =
        typeof MediaRecorder !== 'undefined' &&
        MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
          ? { mimeType: 'audio/webm;codecs=opus' }
          : undefined;

      this.mediaRecorder = options
        ? new MediaRecorder(this.mediaStream, options)
        : new MediaRecorder(this.mediaStream);

      this.mediaRecorder.ondataavailable = (event: any) => {
        if (event.data && event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };

      this.mediaRecorder.onstop = () => {
        const mime = this.mediaRecorder?.mimeType || 'audio/webm';
        const audioBlob = new Blob(this.audioChunks, { type: mime });
        if (this.mediaStream) {
          this.mediaStream.getTracks().forEach((track) => track.stop());
          this.mediaStream = null;
        }
        if (this.recordingSeconds >= 1) {
          this.sendAudioMessage(audioBlob);
        }
        this.recordingSeconds = 0;
        clearInterval(this.recordingTimer);
      };

      this.mediaRecorder.start();
      this.isRecording = true;
      this.recordingSeconds = 0;
      this.recordingTimer = setInterval(() => {
        this.recordingSeconds++;
      }, 1000);
    } catch (err) {
      console.error('Mic access error:', err);
      this.errorMessage =
        'يرجى السماح بالوصول إلى الميكروفون لتسجيل الصوت.';
      setTimeout(() => (this.errorMessage = ''), 4000);
    }
  }

  stopRecording() {
    if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
      this.mediaRecorder.stop();
    }
    this.isRecording = false;
    clearInterval(this.recordingTimer);
  }

  sendAudioMessage(blob: Blob) {
    const fileName = `voice_${Date.now()}.webm`;
    this.chatService.uploadMedia(blob, fileName).subscribe({
      next: (url) => {
        const effectiveUrl = url || URL.createObjectURL(blob);
        this.chatService
          .sendMessage(
            this.conversationId || '',
            'تسجيل صوتي',
            effectiveUrl,
            this.userTag
          )
          .subscribe({
            next: (res: any) => {
              const data = res?.data ?? res;
              if (data?.conversationId) this.conversationId = data.conversationId;
              this.loadConversation();
            },
          });
      },
      error: () => {
        const localUrl = URL.createObjectURL(blob);
        this.messages.push({
          id: 'temp-audio-' + Date.now(),
          sender: 'customer',
          senderName: this.userTag,
          kind: 'audio',
          mediaUrl: localUrl,
          sentAt: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
        });
        setTimeout(() => this.scrollToBottom(), 100);
      },
    });
  }

  sendTextMessage(event: Event) {
    event.preventDefault();
    if (!this.messageValue.trim()) return;

    if (this.editMessage) {
      this.editMessage.text = this.messageValue.trim();
      this.editMessage.editedAt = new Date();
      this.messageValue = '';
      this.editMessage = null;
      return;
    }

    const text = this.messageValue.trim();
    this.messageValue = '';
    const tempReply = this.replyMessage;
    this.replyMessage = null;

    // Push immediately to UI for instantaneous, delightful UX
    const localMsg = {
      id: 'local-' + Date.now(),
      sender: 'customer',
      senderName: this.userTag,
      kind: 'text',
      text,
      replyTo: tempReply
        ? {
            sender: tempReply.sender,
            preview: tempReply.text,
            messageId: tempReply.id,
          }
        : undefined,
      sentAt: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    this.messages.push(localMsg);
    setTimeout(() => this.scrollToBottom(), 50);

    this.chatService
      .sendMessage(this.conversationId || '', text, undefined, this.userTag)
      .subscribe({
        next: (res: any) => {
          const data = res?.data ?? res;
          if (data?.conversationId) {
            this.conversationId = data.conversationId;
          }
        },
      });
  }

  handleImageSelected(event: any) {
    const file: File = event.target?.files?.[0];
    if (!file) return;
    event.target.value = '';

    const reader = new FileReader();
    reader.onload = () => {
      const localDataUrl = reader.result as string;
      this.chatService.uploadMedia(file, file.name).subscribe({
        next: (url) => {
          const finalUrl = url || localDataUrl;
          this.chatService
            .sendMessage(
              this.conversationId || '',
              'صورة مرفقة',
              finalUrl,
              this.userTag
            )
            .subscribe({
              next: () => {
                this.loadConversation();
              },
            });
        },
        error: () => {
          this.messages.push({
            id: 'temp-img-' + Date.now(),
            sender: 'customer',
            senderName: this.userTag,
            kind: 'image',
            mediaUrl: localDataUrl,
            sentAt: new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            }),
          });
          setTimeout(() => this.scrollToBottom(), 100);
        },
      });
    };
    reader.readAsDataURL(file);
  }

  onTextareaKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendTextMessage(event);
    }
  }

  confirmDelete(mode: string) {
    if (this.deleteMessage) {
      if (mode === 'everyone') {
        this.deleteMessage.deletedForEveryone = true;
      } else {
        this.messages = this.messages.filter((m) => m !== this.deleteMessage);
      }
    }
    this.deleteMessage = null;
  }
}
