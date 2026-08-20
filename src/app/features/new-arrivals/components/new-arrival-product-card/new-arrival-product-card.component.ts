import { Component, EventEmitter, Input, Output, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideHeart,
  LucideShoppingBag,
  LucideStar,
} from '@lucide/angular';
import { CartService } from '../../../../core/services/cart.service';
import { FavoritesService } from '../../../../core/services/favorites.service';

export interface NewArrivalProduct {
  id: number | string;
  name: string;
  brand?: string;
  price: number;
  rating: number | string;
  reviews: number | string;
  image: string;
  category?: string;
}

@Component({
  selector: 'app-new-arrival-product-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './new-arrival-product-card.component.html',
  styleUrl: './new-arrival-product-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewArrivalProductCardComponent {
  @Input({ required: true }) product!: NewArrivalProduct;
  @Output() selectProduct = new EventEmitter<void>();

  private readonly cartService = inject(CartService);
  readonly favoritesService = inject(FavoritesService);

  readonly heartIcon = LucideHeart;
  readonly shoppingBagIcon = LucideShoppingBag;
  readonly starIcon = LucideStar;

  get isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.product.id);
  }

  handleFavorite(event: Event): void {
    event.stopPropagation();
    this.favoritesService.toggleFavorite(this.product);
  }

  handleAddToCart(): void {
    this.cartService.addItem(this.product);
  }

  handleSelect(): void {
    this.selectProduct.emit();
  }
}
