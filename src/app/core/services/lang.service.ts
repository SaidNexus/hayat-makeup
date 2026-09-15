import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

export type Lang = 'en' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  private readonly LANG_KEY = 'hayat-lang';
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  /**
   * User-selected Storefront language preference ('ar' or 'en').
   * Persisted in localStorage.
   */
  readonly storefrontLang = signal<Lang>(this.getInitialLang());

  /**
   * Whether the active route is in the Dashboard/Admin area (/admin).
   */
  readonly isAdmin = signal<boolean>(this.checkIfAdmin());

  /**
   * Effective active language:
   * - In Dashboard (/admin): ALWAYS 'ar'
   * - In Storefront: storefrontLang()
   */
  readonly effectiveLang = computed<Lang>(() => (this.isAdmin() ? 'ar' : this.storefrontLang()));
  readonly currentLang = computed<Lang>(() => this.effectiveLang());

  /**
   * Effective text direction:
   * - In Dashboard (/admin): ALWAYS 'rtl'
   * - In Storefront: 'rtl' if ar, 'ltr' if en
   */
  readonly dir = computed<'rtl' | 'ltr'>(() => (this.effectiveLang() === 'ar' ? 'rtl' : 'ltr'));
  readonly isRtl = computed<boolean>(() => this.dir() === 'rtl');

  constructor() {
    this.syncDom();

    // Listen to router navigation to switch context between Storefront and Admin
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        const url = e.urlAfterRedirects || e.url;
        const inAdmin = url.startsWith('/admin') || url.startsWith('/dashboard');
        if (this.isAdmin() !== inAdmin) {
          this.isAdmin.set(inAdmin);
          this.syncDom();
        }
      });
  }

  private checkIfAdmin(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    return typeof window !== 'undefined' && (window.location.pathname.startsWith('/admin') || window.location.pathname.startsWith('/dashboard'));
  }

  private getInitialLang(): Lang {
    if (!isPlatformBrowser(this.platformId)) return 'ar';
    
    // 1. Saved User Language Preference
    const stored = window.localStorage.getItem(this.LANG_KEY);
    if (stored === 'ar' || stored === 'en') {
      return stored;
    }

    // 2. Application Default Language
    return 'ar';
  }

  /**
   * Changes the Storefront language preference.
   * Strictly controls the Storefront and NEVER affects the Dashboard, which is permanently Arabic.
   */
  setLang(nextLang: Lang) {
    this.storefrontLang.set(nextLang);
    if (isPlatformBrowser(this.platformId)) {
      window.localStorage.setItem(this.LANG_KEY, nextLang);
    }
    this.syncDom();
  }

  toggleLang() {
    this.setLang(this.storefrontLang() === 'ar' ? 'en' : 'ar');
  }

  private syncDom() {
    if (isPlatformBrowser(this.platformId) && typeof document !== 'undefined' && document.documentElement) {
      const currentDir = this.dir();
      const currentLang = this.effectiveLang();
      document.documentElement.dir = currentDir;
      document.documentElement.lang = currentLang;
      if (currentDir === 'rtl') {
        document.documentElement.classList.add('is-rtl');
        document.documentElement.classList.remove('is-ltr');
      } else {
        document.documentElement.classList.add('is-ltr');
        document.documentElement.classList.remove('is-rtl');
      }
    }
  }
}
