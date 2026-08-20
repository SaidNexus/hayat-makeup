import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

export const PRODUCT_SHADES = [
  '#A82F49',
  '#D51F73',
  '#CF5274',
  '#B85C4D',
];

@Component({
  selector: 'app-product-options',
  standalone: true,
  templateUrl: './product-options.component.html',
  styleUrl: './product-options.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductOptionsComponent {
  @Input() product: any;
  @Input() quantity = 1;
  @Output() quantityChange = new EventEmitter<number>();

  readonly shades = PRODUCT_SHADES;
  activeShade = 0;
  readonly shadeLabel = 'وردي فوشيا';

  setActiveShade(index: number): void {
    this.activeShade = index;
  }

  increaseQuantity(): void {
    this.quantityChange.emit(this.quantity + 1);
  }

  decreaseQuantity(): void {
    this.quantityChange.emit(Math.max(1, this.quantity - 1));
  }
}
