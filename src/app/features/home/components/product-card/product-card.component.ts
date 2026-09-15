import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideShoppingCart, LucideStar } from '@lucide/angular';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [LucideDynamicIcon, TranslatePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  @Input() image = '';
  @Input() name = '';
  @Input() price: number | string = 0;
  @Input() rating: number | string = 5;
  @Input() reviews: number | string = 0;

  @Output() selectProduct = new EventEmitter<void>();
  @Output() addToCart = new EventEmitter<void>();

  readonly cartIcon = LucideShoppingCart;
  readonly starIcon = LucideStar;
  readonly fallbackImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248360/hayat-makeup/products/lipstick.png';

  onImgError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target && target.src !== this.fallbackImage) {
      target.src = this.fallbackImage;
    }
  }

  onSelect(): void {
    this.selectProduct.emit();
  }

  onAdd(event: Event): void {
    event.stopPropagation();
    this.addToCart.emit();
  }
}
