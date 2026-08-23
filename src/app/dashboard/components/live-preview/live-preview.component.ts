import { Component, Input, ViewChild, ElementRef, OnChanges, SimpleChanges, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const MOBILE_DEVICE = { viewportW: 390, viewportH: 740, frameW: 390, frameH: 740 };
const DESKTOP_DEVICE = { viewportW: 1280, viewportH: 720, frameW: 1280, frameH: 720 };
const PREVIEW_CSS = `
/* ── preview-scroll-fix ── injected by LivePreview ── */
.lk-home-page { overflow: visible !important; }
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
export class LivePreviewComponent implements OnChanges, OnInit {
  @Input() mode: 'mobile' | 'desktop' = 'mobile';
  @Input() selectedPage: any;
  @Input() iframeRoute: string = '/';

  @ViewChild('iframeRef') iframeRef!: ElementRef<HTMLIFrameElement>;

  iframeKey = 0;
  mountRoute = '/';
  safeIframeSrc!: SafeResourceUrl;

  private cdr = inject(ChangeDetectorRef);
  
  get device() {
    return this.mode === 'mobile' ? MOBILE_DEVICE : DESKTOP_DEVICE;
  }

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.mountRoute = this.iframeRoute;
    this.updateIframeSrc();
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

  handleIframeLoad() {
    const iframe = this.iframeRef?.nativeElement;
    if (!iframe) return;
    try {
      const doc = iframe.contentDocument;
      if (doc && !doc.getElementById('preview-scroll-fix')) {
        const style = doc.createElement('style');
        style.id = 'preview-scroll-fix';
        style.textContent = PREVIEW_CSS;
        doc.head.appendChild(style);
      }
    } catch (_) {}
  }
}
