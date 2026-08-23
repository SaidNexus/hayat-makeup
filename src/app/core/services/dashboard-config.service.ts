import { Injectable, effect, signal, WritableSignal } from '@angular/core';
import * as defaultConfigs from './default-configs';

@Injectable({
  providedIn: 'root'
})
export class DashboardConfigService {
  public homePageConfig = this.createPersistedSignal<any>('loxxking-homepage-config', defaultConfigs.homePageInitialConfig);
  public cartPageConfig = this.createPersistedSignal<any>('loxxking-cart-config', defaultConfigs.cartPageInitialConfig);
  public productPageConfig = this.createPersistedSignal<any>('loxxking-product-config', defaultConfigs.productPageInitialConfig);
  
  public facesPageConfig = this.createPersistedSignal<any>('lotus-faces-config', defaultConfigs.facesPageInitialConfig);
  public skinTypesPageConfig = this.createPersistedSignal<any>('lotus-skintypes-config', defaultConfigs.skinTypesPageInitialConfig);
  public bundlesPageConfig = this.createPersistedSignal<any>('lotus-bundles-config', defaultConfigs.bundlesPageInitialConfig);
  public skinQuizPageConfig = this.createPersistedSignal<any>('lotus-skinquiz-config', defaultConfigs.skinQuizPageInitialConfig);
  public trackOrderPageConfig = this.createPersistedSignal<any>('lotus-trackorder-config', defaultConfigs.trackOrderPageInitialConfig);

  public wishlistPageConfig = this.createPersistedSignal<any>('lotus-wishlist-config', defaultConfigs.wishlistPageInitialConfig);
  public faqPageConfig = this.createPersistedSignal<any>('lotus-faq-config', defaultConfigs.faqPageInitialConfig);
  public accountPageConfig = this.createPersistedSignal<any>('lotus-account-config', defaultConfigs.accountPageInitialConfig);
  public offersPageConfig = this.createPersistedSignal<any>('lotus-offers-config', defaultConfigs.offersPageInitialConfig);
  public categoriesPageConfig = this.createPersistedSignal<any>('lotus-categories-config', defaultConfigs.categoriesPageInitialConfig);
  public newArrivalsPageConfig = this.createPersistedSignal<any>('lotus-new-arrivals-config', defaultConfigs.newArrivalsPageInitialConfig);
  public bestSellersPageConfig = this.createPersistedSignal<any>('lotus-best-sellers-config', defaultConfigs.bestSellersPageInitialConfig);
  public searchPageConfig = this.createPersistedSignal<any>('lotus-search-config', defaultConfigs.searchPageInitialConfig);
  public menuPageConfig = this.createPersistedSignal<any>('lotus-menu-config', defaultConfigs.menuPageInitialConfig);

  // Remaining pages (will default to empty objects if missing defaults)
  public categoryPageConfig = this.createPersistedSignal<any>('lotus-category-config', defaultConfigs.categoryPageInitialConfig || {});
  public checkoutPageConfig = this.createPersistedSignal<any>('lotus-checkout-config', defaultConfigs.checkoutPageInitialConfig || {});
  public orderConfirmationPageConfig = this.createPersistedSignal<any>('lotus-orderconfirmation-config', {});
  public updateHomePageConfig(updates: any) { this.homePageConfig.update(c => ({...c, ...updates})); }
  public updateBestSellersPageConfig(updates: any) { this.bestSellersPageConfig.update(c => ({...c, ...updates})); }
  public updateCategoriesPageConfig(updates: any) { this.categoriesPageConfig.update(c => ({...c, ...updates})); }
  public updateLoginPageConfig(updates: any) { this.loginPageConfig.update(c => ({...c, ...updates})); }
  public updateMyOrdersPageConfig(updates: any) { this.myOrdersPageConfig.update(c => ({...c, ...updates})); }
  public updateNewArrivalsPageConfig(updates: any) { this.newArrivalsPageConfig.update(c => ({...c, ...updates})); }
  public updateNotificationsPageConfig(updates: any) { this.notificationsPageConfig.update(c => ({...c, ...updates})); }
  public updateOrderConfirmationPageConfig(updates: any) { this.orderConfirmationPageConfig.update(c => ({...c, ...updates})); }
  public myOrdersPageConfig = this.createPersistedSignal<any>('lotus-myorders-config', {});
  public loginPageConfig = this.createPersistedSignal<any>('lotus-login-config', {});
  public profilePageConfig = this.createPersistedSignal<any>('lotus-profile-config', {});
  public notificationsPageConfig = this.createPersistedSignal<any>('lotus-notifications-config', {});
  public sizeGuidePageConfig = this.createPersistedSignal<any>('lotus-sizeguide-config', {});

  public aboutPageConfig = this.createPersistedSignal<any>('lotus-about-config', {});
  public allShapersPageConfig = this.createPersistedSignal<any>('lotus-all-shapers-config', {});
  public contactPageConfig = this.createPersistedSignal<any>('lotus-contact-config', {});
  public favoritesPageConfig = this.createPersistedSignal<any>('lotus-favorites-config', {});
  public policiesPageConfig = this.createPersistedSignal<any>('lotus-policies-config', {});

  constructor() {
    window.addEventListener('storage', (e) => {
      // Re-read storage and update signals if changed from another tab/iframe
      if (e.key === 'loxxking-homepage-config') this.updateSignalFromStorage(this.homePageConfig, e.newValue);
      else if (e.key === 'loxxking-cart-config') this.updateSignalFromStorage(this.cartPageConfig, e.newValue);
      else if (e.key === 'loxxking-product-config') this.updateSignalFromStorage(this.productPageConfig, e.newValue);
      else if (e.key === 'lotus-faces-config') this.updateSignalFromStorage(this.facesPageConfig, e.newValue);
      else if (e.key === 'lotus-skintypes-config') this.updateSignalFromStorage(this.skinTypesPageConfig, e.newValue);
      else if (e.key === 'lotus-bundles-config') this.updateSignalFromStorage(this.bundlesPageConfig, e.newValue);
      else if (e.key === 'lotus-skinquiz-config') this.updateSignalFromStorage(this.skinQuizPageConfig, e.newValue);
      else if (e.key === 'lotus-trackorder-config') this.updateSignalFromStorage(this.trackOrderPageConfig, e.newValue);
      else if (e.key === 'lotus-wishlist-config') this.updateSignalFromStorage(this.wishlistPageConfig, e.newValue);
      else if (e.key === 'lotus-faq-config') this.updateSignalFromStorage(this.faqPageConfig, e.newValue);
      else if (e.key === 'lotus-account-config') this.updateSignalFromStorage(this.accountPageConfig, e.newValue);
      else if (e.key === 'lotus-offers-config') this.updateSignalFromStorage(this.offersPageConfig, e.newValue);
      else if (e.key === 'lotus-categories-config') this.updateSignalFromStorage(this.categoriesPageConfig, e.newValue);
      else if (e.key === 'lotus-new-arrivals-config') this.updateSignalFromStorage(this.newArrivalsPageConfig, e.newValue);
      else if (e.key === 'lotus-best-sellers-config') this.updateSignalFromStorage(this.bestSellersPageConfig, e.newValue);
      else if (e.key === 'lotus-search-config') this.updateSignalFromStorage(this.searchPageConfig, e.newValue);
      else if (e.key === 'lotus-menu-config') this.updateSignalFromStorage(this.menuPageConfig, e.newValue);
      else if (e.key === 'lotus-category-config') this.updateSignalFromStorage(this.categoryPageConfig, e.newValue);
      else if (e.key === 'lotus-checkout-config') this.updateSignalFromStorage(this.checkoutPageConfig, e.newValue);
      else if (e.key === 'lotus-orderconfirmation-config') this.updateSignalFromStorage(this.orderConfirmationPageConfig, e.newValue);
      else if (e.key === 'lotus-myorders-config') this.updateSignalFromStorage(this.myOrdersPageConfig, e.newValue);
      else if (e.key === 'lotus-login-config') this.updateSignalFromStorage(this.loginPageConfig, e.newValue);
      else if (e.key === 'lotus-profile-config') this.updateSignalFromStorage(this.profilePageConfig, e.newValue);
      else if (e.key === 'lotus-notifications-config') this.updateSignalFromStorage(this.notificationsPageConfig, e.newValue);
      else if (e.key === 'lotus-sizeguide-config') this.updateSignalFromStorage(this.sizeGuidePageConfig, e.newValue);
    });
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
    const saved = localStorage.getItem(key);
    let startValue = initialValue;
    if (saved) {
      try { startValue = JSON.parse(saved); } catch (e) {}
    }
    
    const sig = signal<T>(startValue);
    
    effect(() => {
      const val = sig();
      const newValue = JSON.stringify(val);
      if (localStorage.getItem(key) !== newValue) {
        localStorage.setItem(key, newValue);
      }
    });

    return sig;
  }
}
