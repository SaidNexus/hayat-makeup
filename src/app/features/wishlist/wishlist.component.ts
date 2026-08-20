import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LucideDynamicIcon, LucideHeart } from '@lucide/angular';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { WishlistTitleComponent } from './components/wishlist-title/wishlist-title.component';
import { WishlistProductGridComponent } from './components/wishlist-product-grid/wishlist-product-grid.component';
import { WishlistPromoComponent } from './components/wishlist-promo/wishlist-promo.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { FavoritesService } from '../../core/services/favorites.service';
import { CartService } from '../../core/services/cart.service';
import { WishlistProduct } from '../../shared/components/cards/wishlist-product-card/wishlist-product-card.component';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [
    HeaderComponent,
    WishlistTitleComponent,
    WishlistProductGridComponent,
    WishlistPromoComponent,
    MobileBottomNavComponent,
    LucideDynamicIcon,
  ],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistComponent {
  private readonly router = inject(Router);
  private readonly favoritesService = inject(FavoritesService);
  private readonly cartService = inject(CartService);

  readonly heartIcon = LucideHeart;

  readonly products = computed<WishlistProduct[]>(() => {
    return this.favoritesService.favorites().map((f) => ({
      id: f.id,
      name: f.name,
      variant: f.variant || f.description || '',
      price: f.price,
      image: f.image,
    }));
  });

  handleAddToCart(product: WishlistProduct): void {
    this.cartService.addItem(product);
  }

  handleRemove(productId: number | string): void {
    this.favoritesService.removeFavorite(productId);
  }

  navigateToProducts(): void {
    this.router.navigateByUrl('/products');
  }
}
