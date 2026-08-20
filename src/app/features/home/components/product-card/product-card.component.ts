import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideShoppingCart, LucideStar } from '@lucide/angular';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [LucideDynamicIcon],
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

  onSelect(): void {
    this.selectProduct.emit();
  }

  onAdd(event: Event): void {
    event.stopPropagation();
    this.addToCart.emit();
  }
}
