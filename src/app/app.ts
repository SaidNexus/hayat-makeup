import { Component, signal, ChangeDetectionStrategy, inject, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('Hayat-makeup-main-angular');
  private router = inject(Router);
  private routerSub?: Subscription;
  private messageHandler?: (event: MessageEvent) => void;

  ngOnInit() {
    if (typeof window !== 'undefined' && window.parent && window.parent !== window) {
      // 1. Send route change notifications to dashboard parent window
      this.routerSub = this.router.events
        .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
        .subscribe((event) => {
          const currentPath = event.urlAfterRedirects || event.url;
          window.parent.postMessage(
            {
              type: 'STOREFRONT_ROUTE_CHANGE',
              pathname: currentPath.split('?')[0],
            },
            '*'
          );
        });

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
