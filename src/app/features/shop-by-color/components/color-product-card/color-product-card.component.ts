import { Component, Input, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideHeart,
  LucideShoppingBag,
} from '@lucide/angular';
import { CartService } from '../../../../core/services/cart.service';
import { FavoritesService } from '../../../../core/services/favorites.service';

export interface ColorProduct {
  id: number | string;
  name: string;
  price: number | string;
  image: string;
}

@Component({
  selector: 'app-color-product-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './color-product-card.component.html',
  styleUrl: './color-product-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorProductCardComponent {
  @Input({ required: true }) product!: ColorProduct;

  private readonly cartService = inject(CartService);
  readonly favoritesService = inject(FavoritesService);

  readonly heartIcon = LucideHeart;
  readonly shoppingBagIcon = LucideShoppingBag;

  get isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.product.id);
  }

  handleFavorite(): void {
    this.favoritesService.toggleFavorite(this.product);
  }

  handleAddToCart(): void {
    this.cartService.addItem({ ...this.product, quantity: 1 });
  }
}
