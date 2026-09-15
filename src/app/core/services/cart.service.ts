import { Injectable, computed, signal } from '@angular/core';

export interface CartItem {
  id: string | number;
  name: string;
  nameAr?: string;
  nameEn?: string;
  description?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  color?: string;
  colorCode?: string;
  price: number;
  quantity: number;
  image?: string;
  category?: string;
  size?: string;
  rating?: number;
  reviews?: string | number;
}

const CART_STORAGE_KEY = 'hayat_cart_items';

function loadInitialCart(): CartItem[] {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
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
export class CartService {
  private readonly _items = signal<CartItem[]>(loadInitialCart());

  readonly items = this._items.asReadonly();

  readonly totalItems = computed(() =>
    this._items().reduce((total, item) => total + (item.quantity || 1), 0)
  );

  readonly itemsCount = computed(() => this.totalItems());

  readonly subtotal = computed(() =>
    this._items().reduce((total, item) => total + (Number(item.price) || 0) * (item.quantity || 1), 0)
  );

  private saveToStorage(items: CartItem[]): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      } catch {
        // ignore storage errors
      }
    }
  }

  addItem(product: any, quantity: number = 1): void {
    const qtyToAdd = Math.max(1, Number(quantity) || Number(product.quantity) || 1);
    const current = this._items();
    const index = current.findIndex((item) => String(item.id) === String(product.id));

    let updated: CartItem[];
    if (index > -1) {
      updated = [...current];
      updated[index] = {
        ...updated[index],
        quantity: updated[index].quantity + qtyToAdd,
      };
    } else {
      const newItem: CartItem = {
        id: product.id,
        name: product.name || 'منتج',
        description: product.description || product.variant || '',
        color: product.color || '',
        colorCode: product.colorCode || '#D4146A',
        price: Number(product.price) || 0,
        quantity: qtyToAdd,
        image: product.image || (product.images && product.images[0]) || '',
      };
      updated = [...current, newItem];
    }
    this._items.set(updated);
    this.saveToStorage(updated);
  }

  addToCart(product: any, quantity: number = 1): void {
    this.addItem(product, quantity);
  }

  increaseQuantity(id: string | number): void {
    this._items.update((items) => {
      const updated = items.map((item) =>
        String(item.id) === String(id) ? { ...item, quantity: item.quantity + 1 } : item
      );
      this.saveToStorage(updated);
      return updated;
    });
  }

  decreaseQuantity(id: string | number): void {
    this._items.update((items) => {
      const updated = items.map((item) =>
        String(item.id) === String(id)
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      );
      this.saveToStorage(updated);
      return updated;
    });
  }

  removeItem(id: string | number): void {
    this._items.update((items) => {
      const updated = items.filter((item) => String(item.id) !== String(id));
      this.saveToStorage(updated);
      return updated;
    });
  }

  clearCart(): void {
    this._items.set([]);
    this.saveToStorage([]);
  }
}
