import { Injectable, inject, signal, computed, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LangService, Lang } from '../services/lang.service';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private http = inject(HttpClient);
  private langService = inject(LangService);
  private platformId = inject(PLATFORM_ID);

  private translations = signal<Record<Lang, Record<string, any>>>({
    ar: {},
    en: {}
  });

  readonly currentLang = computed<Lang>(() => this.langService.effectiveLang());

  constructor() {
    this.loadTranslations('ar');
    this.loadTranslations('en');
  }

  private loadTranslations(lang: Lang) {
    if (isPlatformBrowser(this.platformId)) {
      this.http.get<Record<string, any>>(`/assets/i18n/${lang}.json`).subscribe({
        next: (data) => {
          this.translations.update(current => ({
            ...current,
            [lang]: { ...current[lang], ...data }
          }));
        },
        error: () => {
          // Silent catch if file loading encounters an issue
        }
      });
    }
  }

  /**
   * Translates a key such as 'COMMON.CURRENCY' or 'HOME.TITLE'.
   */
  instant(key: string, params?: Record<string, any>): string {
    if (!key) return '';
    const lang = this.currentLang();
    const store = this.translations()[lang];
    
    // Resolve dotted key like 'COMMON.CURRENCY'
    const value = this.resolveKey(store, key);
    if (value !== undefined && value !== null) {
      return this.interpolate(String(value), params);
    }

    // Fallback to English if current was Arabic or vice versa
    const fallbackLang: Lang = lang === 'ar' ? 'en' : 'ar';
    const fallbackStore = this.translations()[fallbackLang];
    const fallbackValue = this.resolveKey(fallbackStore, key);
    if (fallbackValue !== undefined && fallbackValue !== null) {
      return this.interpolate(String(fallbackValue), params);
    }

    // Fallback to the last segment of the key if key is e.g. 'COMMON.SEARCH' -> 'SEARCH'
    const parts = key.split('.');
    return parts[parts.length - 1];
  }

  private resolveKey(obj: any, path: string): any {
    if (!obj || typeof obj !== 'object') return undefined;
    const parts = path.split('.');
    let curr = obj;
    for (const part of parts) {
      if (curr && typeof curr === 'object' && part in curr) {
        curr = curr[part];
      } else {
        return undefined;
      }
    }
    return curr;
  }

  private interpolate(text: string, params?: Record<string, any>): string {
    if (!params) return text;
    return text.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, k) => {
      return params[k] !== undefined ? String(params[k]) : '';
    });
  }

  use(lang: Lang) {
    this.langService.setLang(lang);
  }
}
