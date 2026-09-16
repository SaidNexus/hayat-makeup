import { Injectable, effect, signal, WritableSignal } from '@angular/core';
import * as defaultConfigs from './default-configs';

@Injectable({
  providedIn: 'root'
})
export class DashboardConfigService {
  public homePageConfig = this.createPersistedSignal<any>('hayat-homepage-config', defaultConfigs.homePageInitialConfig);
  public cartPageConfig = this.createPersistedSignal<any>('hayat-cart-config', defaultConfigs.cartPageInitialConfig);
  public productPageConfig = this.createPersistedSignal<any>('hayat-product-config', defaultConfigs.productPageInitialConfig);
  
  public facesPageConfig = this.createPersistedSignal<any>('hayat-faces-config', defaultConfigs.facesPageInitialConfig);
  public skinTypesPageConfig = this.createPersistedSignal<any>('hayat-skintypes-config', defaultConfigs.skinTypesPageInitialConfig);
  public bundlesPageConfig = this.createPersistedSignal<any>('hayat-bundles-config', defaultConfigs.bundlesPageInitialConfig);
  public skinQuizPageConfig = this.createPersistedSignal<any>('hayat-skinquiz-config', defaultConfigs.skinQuizPageInitialConfig);
  public trackOrderPageConfig = this.createPersistedSignal<any>('hayat-trackorder-config', defaultConfigs.trackOrderPageInitialConfig);

  public wishlistPageConfig = this.createPersistedSignal<any>('hayat-wishlist-config', defaultConfigs.wishlistPageInitialConfig);
  public faqPageConfig = this.createPersistedSignal<any>('hayat-faq-config', defaultConfigs.faqPageInitialConfig);
  public accountPageConfig = this.createPersistedSignal<any>('hayat-account-config', defaultConfigs.accountPageInitialConfig);
  public offersPageConfig = this.createPersistedSignal<any>('hayat-offers-config', defaultConfigs.offersPageInitialConfig);
  public categoriesPageConfig = this.createPersistedSignal<any>('hayat-categories-config', defaultConfigs.categoriesPageInitialConfig);
  public newArrivalsPageConfig = this.createPersistedSignal<any>('hayat-new-arrivals-config', defaultConfigs.newArrivalsPageInitialConfig);
  public bestSellersPageConfig = this.createPersistedSignal<any>('hayat-best-sellers-config', defaultConfigs.bestSellersPageInitialConfig);
  public searchPageConfig = this.createPersistedSignal<any>('hayat-search-config', defaultConfigs.searchPageInitialConfig);

  // Remaining pages (will default to empty objects if missing defaults)
  public categoryPageConfig = this.createPersistedSignal<any>('hayat-category-config', defaultConfigs.categoryPageInitialConfig || {});
  public checkoutPageConfig = this.createPersistedSignal<any>('hayat-checkout-config', defaultConfigs.checkoutPageInitialConfig || {});
  public orderConfirmationPageConfig = this.createPersistedSignal<any>('hayat-orderconfirmation-config', {});
  public updateHomePageConfig(updates: any) { this.homePageConfig.update(c => ({...c, ...updates})); }
  public updateBestSellersPageConfig(updates: any) { this.bestSellersPageConfig.update(c => ({...c, ...updates})); }
  public updateCategoriesPageConfig(updates: any) { this.categoriesPageConfig.update(c => ({...c, ...updates})); }
  public updateLoginPageConfig(updates: any) { this.loginPageConfig.update(c => ({...c, ...updates})); }
  public updateMyOrdersPageConfig(updates: any) { this.myOrdersPageConfig.update(c => ({...c, ...updates})); }
  public updateNewArrivalsPageConfig(updates: any) { this.newArrivalsPageConfig.update(c => ({...c, ...updates})); }
  public updateNotificationsPageConfig(updates: any) { this.notificationsPageConfig.update(c => ({...c, ...updates})); }
  public updateOrderConfirmationPageConfig(updates: any) { this.orderConfirmationPageConfig.update(c => ({...c, ...updates})); }
  public myOrdersPageConfig = this.createPersistedSignal<any>('hayat-myorders-config', {});
  public loginPageConfig = this.createPersistedSignal<any>('hayat-login-config', {});
  public profilePageConfig = this.createPersistedSignal<any>('hayat-profile-config', {});
  public notificationsPageConfig = this.createPersistedSignal<any>('hayat-notifications-config', {});
  public sizeGuidePageConfig = this.createPersistedSignal<any>('hayat-sizeguide-config', {});

  public aboutPageConfig = this.createPersistedSignal<any>('hayat-about-config', {});
  public allShapersPageConfig = this.createPersistedSignal<any>('hayat-all-shapers-config', {});
  public contactPageConfig = this.createPersistedSignal<any>('hayat-contact-config', {});
  public favoritesPageConfig = this.createPersistedSignal<any>('hayat-favorites-config', {});
  public policiesPageConfig = this.createPersistedSignal<any>('hayat-policies-config', {});

  constructor() {
    this.purgeLegacyStorageKeys();

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (e) => {
        if (!e.key) return;
        // Re-read storage and update signals if changed from another tab/iframe
        if (e.key === 'hayat-homepage-config') this.updateSignalFromStorage(this.homePageConfig, e.newValue);
        else if (e.key === 'hayat-cart-config') this.updateSignalFromStorage(this.cartPageConfig, e.newValue);
        else if (e.key === 'hayat-product-config') this.updateSignalFromStorage(this.productPageConfig, e.newValue);
        else if (e.key === 'hayat-faces-config') this.updateSignalFromStorage(this.facesPageConfig, e.newValue);
        else if (e.key === 'hayat-skintypes-config') this.updateSignalFromStorage(this.skinTypesPageConfig, e.newValue);
        else if (e.key === 'hayat-bundles-config') this.updateSignalFromStorage(this.bundlesPageConfig, e.newValue);
        else if (e.key === 'hayat-skinquiz-config') this.updateSignalFromStorage(this.skinQuizPageConfig, e.newValue);
        else if (e.key === 'hayat-trackorder-config') this.updateSignalFromStorage(this.trackOrderPageConfig, e.newValue);
        else if (e.key === 'hayat-wishlist-config') this.updateSignalFromStorage(this.wishlistPageConfig, e.newValue);
        else if (e.key === 'hayat-faq-config') this.updateSignalFromStorage(this.faqPageConfig, e.newValue);
        else if (e.key === 'hayat-account-config') this.updateSignalFromStorage(this.accountPageConfig, e.newValue);
        else if (e.key === 'hayat-offers-config') this.updateSignalFromStorage(this.offersPageConfig, e.newValue);
        else if (e.key === 'hayat-categories-config') this.updateSignalFromStorage(this.categoriesPageConfig, e.newValue);
        else if (e.key === 'hayat-new-arrivals-config') this.updateSignalFromStorage(this.newArrivalsPageConfig, e.newValue);
        else if (e.key === 'hayat-best-sellers-config') this.updateSignalFromStorage(this.bestSellersPageConfig, e.newValue);
        else if (e.key === 'hayat-search-config') this.updateSignalFromStorage(this.searchPageConfig, e.newValue);
        else if (e.key === 'hayat-category-config') this.updateSignalFromStorage(this.categoryPageConfig, e.newValue);
        else if (e.key === 'hayat-checkout-config') this.updateSignalFromStorage(this.checkoutPageConfig, e.newValue);
        else if (e.key === 'hayat-orderconfirmation-config') this.updateSignalFromStorage(this.orderConfirmationPageConfig, e.newValue);
        else if (e.key === 'hayat-myorders-config') this.updateSignalFromStorage(this.myOrdersPageConfig, e.newValue);
        else if (e.key === 'hayat-login-config') this.updateSignalFromStorage(this.loginPageConfig, e.newValue);
        else if (e.key === 'hayat-profile-config') this.updateSignalFromStorage(this.profilePageConfig, e.newValue);
        else if (e.key === 'hayat-notifications-config') this.updateSignalFromStorage(this.notificationsPageConfig, e.newValue);
        else if (e.key === 'hayat-sizeguide-config') this.updateSignalFromStorage(this.sizeGuidePageConfig, e.newValue);
      });
    }
  }

  private purgeLegacyStorageKeys() {
    if (typeof window === 'undefined' || !window.localStorage) return;
    try {
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && (k.startsWith('loxxking-') || k.startsWith('lotus-'))) {
          keysToRemove.push(k);
        }
      }
      keysToRemove.forEach(k => localStorage.removeItem(k));
    } catch (_) {}
  }

  private updateSignalFromStorage(sig: WritableSignal<any>, newValue: string | null) {
    if (!newValue) return;
    try {
      const updated = JSON.parse(newValue);
      if (JSON.stringify(sig()) !== newValue) {
        sig.set(updated);
      }
    } catch (_) {}
  }

  private createPersistedSignal<T>(key: string, initialValue: T): WritableSignal<T> {
    let startValue = initialValue;
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem(key);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          const str = JSON.stringify(parsed);
          // Discard legacy data from old stores (shapewear / loxxking / lotus)
          if (str.includes('loxxking') || str.includes('مشد') || str.includes('shaper')) {
            localStorage.removeItem(key);
            startValue = initialValue;
          } else {
            startValue = parsed;
          }

          // Clean up old verbose benefits text if present in cached storage
          if (key === 'hayat-homepage-config' && (startValue as any)?.sections) {
            (startValue as any).sections = (startValue as any).sections.map((sec: any) => {
              if (sec.type === 'benefits' && Array.isArray(sec.benefits)) {
                sec.benefits = sec.benefits.map((b: any) => {
                  let textEn = (b.textEn || '')
                    .replace(/Fast & Secure Payment[\s\S]*?Multiple payment options/i, 'Secure Payment\nMultiple Options')
                    .replace(/Fast Express Delivery[\s\S]*?To all cities and regions/i, 'Fast Delivery\nAll Regions')
                    .replace(/100% Original Products[\s\S]*?Certified and guaranteed/i, '100% Original\nGuaranteed')
                    .replace(/Fast DeliveryAll Regions/i, 'Fast Delivery\nAll Regions')
                    .replace(/Fast Delivery All Regions/i, 'Fast Delivery\nAll Regions')
                    .replace(/Secure PaymentMultiple Options/i, 'Secure Payment\nMultiple Options')
                    .replace(/100% OriginalGuaranteed/i, '100% Original\nGuaranteed');

                  let titleEn = b.titleEn;
                  let subtitleEn = b.subtitleEn;
                  if (titleEn && /Fast DeliveryAll Regions/i.test(titleEn)) {
                    titleEn = 'Fast Delivery';
                    subtitleEn = subtitleEn || 'All Regions';
                  }

                  return {
                    ...b,
                    textEn,
                    titleEn,
                    subtitleEn
                  };
                });
              }
              return sec;
            });
          }
        } catch (e) {
          startValue = initialValue;
        }
      }
    }
    
    const sig = signal<T>(startValue);
    
    effect(() => {
      const val = sig();
      if (typeof window !== 'undefined' && window.localStorage) {
        try {
          const newValue = JSON.stringify(val);
          if (localStorage.getItem(key) !== newValue) {
            localStorage.setItem(key, newValue);
          }
        } catch (e) {}
      }
    });

    return sig;
  }
}
