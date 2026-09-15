import { Component, Input, ViewChild, ElementRef, OnChanges, SimpleChanges, OnInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { PreviewScrollService, PreviewScrollTarget } from '../../../core/services/preview-scroll.service';

const MOBILE_DEVICE = { viewportW: 390, viewportH: 740, frameW: 390, frameH: 740 };
const DESKTOP_DEVICE = { viewportW: 1280, viewportH: 720, frameW: 1280, frameH: 720 };
const PREVIEW_CSS = `
/* ── preview-scroll-fix ── injected by LivePreview ── */
.lk-home-page, body { overflow-y: auto !important; }
::-webkit-scrollbar, html::-webkit-scrollbar, body::-webkit-scrollbar, *::-webkit-scrollbar { display: none !important; width: 0 !important; height: 0 !important; background: transparent !important; }
html, body { scrollbar-width: none !important; -ms-overflow-style: none !important; }
`;

@Component({
  selector: 'app-live-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './live-preview.component.html',
  styleUrls: ['./live-preview.component.css']
})
export class LivePreviewComponent implements OnChanges, OnInit, OnDestroy {
  @Input() mode: 'mobile' | 'desktop' = 'mobile';
  @Input() selectedPage: any;
  @Input() iframeRoute: string = '/';

  @ViewChild('iframeRef') iframeRef!: ElementRef<HTMLIFrameElement>;

  iframeKey = 0;
  mountRoute = '/';
  safeIframeSrc!: SafeResourceUrl;
  private scrollSub?: Subscription;

  private cdr = inject(ChangeDetectorRef);
  private scrollService = inject(PreviewScrollService);
  private sanitizer = inject(DomSanitizer);
  
  get device() {
    return this.mode === 'mobile' ? MOBILE_DEVICE : DESKTOP_DEVICE;
  }

  ngOnInit() {
    this.mountRoute = this.iframeRoute;
    this.updateIframeSrc();

    this.scrollSub = this.scrollService.scrollToPreview$.subscribe(target => {
      this.scrollTo(target);
    });
  }

  ngOnDestroy() {
    this.scrollSub?.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['iframeRoute'] && !changes['iframeRoute'].isFirstChange()) {
      this.mountRoute = this.iframeRoute;
      this.updateIframeSrc();
      this.navigateIframe(this.iframeRoute);
      this.cdr.markForCheck();
    }

    if (changes['mode'] && !changes['mode'].isFirstChange()) {
      this.mountRoute = this.iframeRoute;
      this.iframeKey++;
      this.updateIframeSrc();
      this.cdr.markForCheck();
    }

    if (changes['selectedPage'] && this.selectedPage) {
      this.navigateIframe(this.selectedPage.previewRoute);
      this.cdr.markForCheck();
    }
  }

  private updateIframeSrc() {
    const separator = this.mountRoute.includes('?') ? '&' : '?';
    const url = `${this.mountRoute}${separator}preview=true`;
    this.safeIframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    this.cdr.markForCheck();
  }

  navigateIframe(route: string) {
    const iframe = this.iframeRef?.nativeElement;
    if (iframe && iframe.contentWindow) {
      iframe.contentWindow.postMessage({ type: 'DASHBOARD_NAVIGATE', pathname: route }, '*');
    }
  }

  scrollTo(target: PreviewScrollTarget) {
    const iframe = this.iframeRef?.nativeElement;
    if (!iframe) return;

    try {
      const doc = iframe.contentDocument;
      if (doc) {
        let targetEl: HTMLElement | null = null;

        // 1. Try by exact section ID
        if (target.sectionId) {
          targetEl = doc.getElementById('section-' + target.sectionId)
            || doc.getElementById(target.sectionId)
            || doc.getElementById('sec-' + target.sectionId)
            || doc.querySelector(`[data-section-id="${target.sectionId}"]`);
        }

        // 2. Try by section type mapping
        if (!targetEl && target.sectionType) {
          const typeSelectors: Record<string, string[]> = {
            hero: ['app-hero-banner', '#section-sec-hero', '[data-section-type="hero"]'],
            benefits: ['app-service-features', '#section-sec-benefits', '[data-section-type="benefits"]'],
            categories: ['app-categories-section', '#section-sec-categories', '[data-section-type="categories"]'],
            bestsellers: ['app-best-sellers', '#section-sec-bestsellers', '[data-section-type="bestsellers"]'],
            promo: ['app-promo-banner', '#section-sec-promo', '[data-section-type="promo"]'],
            looks: ['app-look-carousel', '#section-sec-looks', '[data-section-type="looks"]'],
            reviews: ['app-reviews', '#section-reviews', '[data-section-type="reviews"]'],
            shopByNeed: ['app-shop-by-color', '#section-shop-by-need', '[data-section-type="shopByNeed"]'],
            cart: ['app-cart', '.cart-container', '[data-section-type="cart"]'],
            product: ['app-product-details', '.product-details-container']
          };
          const candidates = typeSelectors[target.sectionType] || [`app-${target.sectionType}`, `[data-section-type="${target.sectionType}"]`];
          for (const sel of candidates) {
            targetEl = doc.querySelector(sel);
            if (targetEl) break;
          }
        }

        // 3. Try custom selector
        if (!targetEl && target.selector) {
          targetEl = doc.querySelector(target.selector);
        }

        // 4. Try by index
        if (!targetEl && typeof target.index === 'number') {
          const allSecs = doc.querySelectorAll('.lk-home-section-wrapper, [data-section-id], main > section, main > *');
          if (allSecs && allSecs[target.index]) {
            targetEl = allSecs[target.index] as HTMLElement;
          }
        }

        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          this.pulseHighlight(targetEl, doc);
        }
      }
    } catch (_) {}

    try {
      iframe.contentWindow?.postMessage({
        type: 'SCROLL_TO_SECTION',
        target
      }, '*');
    } catch (_) {}
  }

  private pulseHighlight(el: HTMLElement, doc: Document) {
    if (!doc.getElementById('preview-pulse-style')) {
      const style = doc.createElement('style');
      style.id = 'preview-pulse-style';
      style.textContent = `
        @keyframes lkPreviewPulse {
          0% { outline: 3px solid rgba(212, 20, 106, 0.9); box-shadow: 0 0 25px rgba(212, 20, 106, 0.45); }
          50% { outline: 3px solid rgba(212, 20, 106, 0.6); box-shadow: 0 0 15px rgba(212, 20, 106, 0.25); }
          100% { outline: 3px solid transparent; box-shadow: none; }
        }
        .lk-preview-highlight-pulse {
          animation: lkPreviewPulse 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards !important;
          border-radius: 12px !important;
        }
      `;
      doc.head.appendChild(style);
    }
    el.classList.remove('lk-preview-highlight-pulse');
    void el.offsetWidth; // trigger reflow
    el.classList.add('lk-preview-highlight-pulse');
  }

  handleIframeLoad() {
    const iframe = this.iframeRef?.nativeElement;
    if (!iframe) return;
    try {
      const doc = iframe.contentDocument;
      if (doc) {
        if (!doc.getElementById('preview-scroll-fix')) {
          const style = doc.createElement('style');
          style.id = 'preview-scroll-fix';
          style.textContent = PREVIEW_CSS;
          doc.head.appendChild(style);
        }

        // Enable clicking in preview to smoothly scroll editor to that card
        doc.addEventListener('click', (e: MouseEvent) => {
          const target = e.target as HTMLElement;
          const sectionEl = target.closest('[data-section-id], [data-section-type], app-hero-banner, app-service-features, app-categories-section, app-best-sellers, app-promo-banner, app-look-carousel, .lk-home-section-wrapper');
          if (sectionEl) {
            const secId = sectionEl.getAttribute('data-section-id') || sectionEl.id?.replace(/^section-/, '');
            const secType = sectionEl.getAttribute('data-section-type');
            if (secId || secType) {
              this.scrollService.scrollToEditor(secId || secType!);
            }
          }
        }, true);
      }

      const href = iframe.contentWindow?.location?.pathname ?? '/';
      if (window.parent && window.parent !== window) {
        window.parent.postMessage(
          { type: 'STOREFRONT_ROUTE_CHANGE', pathname: href },
          '*'
        );
      }
    } catch (_) {}
  }
}
