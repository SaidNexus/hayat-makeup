import { Injectable, computed, signal } from '@angular/core';

const FAVORITES_STORAGE_KEY = 'hayat_favorites_items';

function loadInitialFavorites(): any[] {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore JSON parse errors
    }
  }
  return [];
}

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private readonly _favorites = signal<any[]>(loadInitialFavorites());

  readonly favorites = this._favorites.asReadonly();

  readonly totalFavorites = computed(() => this._favorites().length);

  private saveToStorage(items: any[]): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(items));
      } catch {
        // ignore
      }
    }
  }

  isFavorite(productId: string | number): boolean {
    return this._favorites().some((item) => String(item.id) === String(productId));
  }

  toggleFavorite(product: any): void {
    const current = this._favorites();
    const exists = current.some((item) => String(item.id) === String(product.id));

    let updated: any[];
    if (exists) {
      updated = current.filter((item) => String(item.id) !== String(product.id));
    } else {
      updated = [
        ...current,
        {
          id: product.id,
          name: product.name,
          variant: product.variant || product.description || '',
          price: product.price,
          rating: product.rating || 5,
          reviews: product.reviews || 0,
          image: product.image || (product.images && product.images[0]) || '',
        },
      ];
    }
    this._favorites.set(updated);
    this.saveToStorage(updated);
  }

  removeFavorite(productId: string | number): void {
    this._favorites.update((items) => {
      const updated = items.filter((item) => String(item.id) !== String(productId));
      this.saveToStorage(updated);
      return updated;
    });
  }

  clearFavorites(): void {
    this._favorites.set([]);
    this.saveToStorage([]);
  }
}
