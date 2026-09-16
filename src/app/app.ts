import { Component, signal, ChangeDetectionStrategy, inject, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter, Subscription } from 'rxjs';
import { FloatingChatComponent } from './shared/components/chat/floating-chat.component';

@Component({
  imports: [CommonModule, RouterOutlet, FloatingChatComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('Hayat-makeup-main-angular');
  readonly isAdminRoute = signal(false);
  private router = inject(Router);
  private routerSub?: Subscription;
  private messageHandler?: (event: MessageEvent) => void;

  ngOnInit() {
    const updateAdminStatus = (url: string) => {
      const path = url.split('?')[0];
      this.isAdminRoute.set(path.startsWith('/admin') || path.startsWith('/dashboard'));
    };

    updateAdminStatus(this.router.url);

    this.routerSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const currentPath = event.urlAfterRedirects || event.url;
        updateAdminStatus(currentPath);

        if (typeof window !== 'undefined' && window.parent && window.parent !== window) {
          window.parent.postMessage(
            {
              type: 'STOREFRONT_ROUTE_CHANGE',
              pathname: currentPath.split('?')[0],
            },
            '*'
          );
        }
      });

    if (typeof window !== 'undefined' && window.parent && window.parent !== window) {

      // 2. Receive navigate commands from dashboard parent window
      this.messageHandler = (event: MessageEvent) => {
        if (event.data?.type === 'DASHBOARD_NAVIGATE' && event.data.pathname) {
          const target = event.data.pathname.split('?')[0];
          const current = this.router.url.split('?')[0];
          if (target !== current) {
            this.router.navigateByUrl(event.data.pathname);
          }
        }
      };
      window.addEventListener('message', this.messageHandler);
    }
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    if (this.messageHandler && typeof window !== 'undefined') {
      window.removeEventListener('message', this.messageHandler);
    }
  }
}
