import { Component, OnInit, OnDestroy, HostListener, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Smartphone, Monitor, Eye, Undo2, Redo2, Lock } from 'lucide-angular';

import { LivePreviewComponent } from '../components/live-preview/live-preview.component';
import { DashboardLayoutComponent } from '../layout/dashboard-layout/dashboard-layout.component';
import { EditorRouterComponent } from '../editors/editor-router/editor-router.component';
import { pageRegistry, findPageByRoute } from '../pageRegistry';

@Component({
  selector: 'app-customize-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, LivePreviewComponent, DashboardLayoutComponent, EditorRouterComponent],
  templateUrl: './customize-home-page.component.html',
  styleUrls: ['./customize-home-page.component.css']
})
export class CustomizeHomePageComponent implements OnInit, OnDestroy {
  previewMode: 'mobile' | 'desktop' = 'mobile';
  selectedPageId: string = 'home';
  iframeRoute: string = '/';

  private cdr = inject(ChangeDetectorRef);

  pageRegistry = pageRegistry;

  Smartphone = Smartphone;
  Monitor = Monitor;
  Eye = Eye;
  Undo2 = Undo2;
  Redo2 = Redo2;
  Lock = Lock;

  get selectedPage() {
    return this.pageRegistry.find((p: any) => p.id === this.selectedPageId);
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent) {
    if (event.data?.type === 'STOREFRONT_ROUTE_CHANGE' && event.data.pathname) {
      this.iframeRoute = event.data.pathname;
      const matchingPage = findPageByRoute(event.data.pathname);
      
      if (matchingPage) {
        if (matchingPage.id !== this.selectedPageId) {
          this.selectedPageId = matchingPage.id;
          this.cdr.markForCheck();
        }
      } else {
        if (this.selectedPageId !== 'unknown') {
          this.selectedPageId = 'unknown';
          this.cdr.markForCheck();
        }
      }
    }
  }

  ngOnInit() {}
  ngOnDestroy() {}

  setPreviewMode(mode: 'mobile' | 'desktop') {
    this.previewMode = mode;
    this.cdr.markForCheck();
  }

  onPageSelect(pageId: string) {
    const page = this.pageRegistry.find(p => p.id === pageId);
    if (page && page.previewRoute) {
      this.iframeRoute = page.previewRoute;
    }
    this.cdr.markForCheck();
  }
}
