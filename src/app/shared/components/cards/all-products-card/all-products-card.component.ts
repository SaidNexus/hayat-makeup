import { Component, EventEmitter, Input, Output, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideDynamicIcon,
  LucideHeart,
  LucideShoppingCart,
  LucideStar,
} from '@lucide/angular';
import { CartService } from '../../../../core/services/cart.service';
import { FavoritesService } from '../../../../core/services/favorites.service';
import { ALL_PRODUCTS_DATA, ProductItem } from '../../../../features/all-products/all-products.component';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { LocalizeFieldPipe } from '../../../pipes/localize-field.pipe';

export type AllProduct = ProductItem;
export { ALL_PRODUCTS_DATA };
export type { ProductItem };

@Component({
  selector: 'app-all-products-card',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon, TranslatePipe, LocalizeFieldPipe],
  templateUrl: './all-products-card.component.html',
  styleUrl: './all-products-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllProductsCardComponent {
  @Input() id: string | number = '';
  @Input() image = '';
  @Input() name = '';
  @Input() nameAr = '';
  @Input() nameEn = '';
  @Input() description = '';
  @Input() descriptionAr = '';
  @Input() descriptionEn = '';
  @Input() price: number | string = 0;
  @Input() rating: number | string = '4.9';
  @Input() reviews: number | string = '98';

  @Output() selectProduct = new EventEmitter<void>();

  private readonly cartService = inject(CartService);
  readonly favoritesService = inject(FavoritesService);

  readonly heartIcon = LucideHeart;
  readonly starIcon = LucideStar;
  readonly cartIcon = LucideShoppingCart;

  get isFavorite(): boolean {
    return this.favoritesService.isFavorite(this.id);
  }

  handleFavorite(event: Event): void {
    event.stopPropagation();
    this.favoritesService.toggleFavorite({
      id: this.id,
      image: this.image,
      name: this.name,
      description: this.description,
      price: this.price,
      rating: this.rating,
      reviews: this.reviews,
    });
  }

  handleAddToCart(event: Event): void {
    event.stopPropagation();
    this.cartService.addItem({
      id: this.id,
      image: this.image,
      name: this.name,
      description: this.description,
      price: this.price,
      rating: this.rating,
      reviews: this.reviews,
    });
  }

  handleSelect(): void {
    this.selectProduct.emit();
  }
}
