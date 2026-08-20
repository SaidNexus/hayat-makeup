import { Component, Input, inject, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideMinus,
  LucidePlus,
  LucideTrash2,
} from '@lucide/angular';
import { CartService, CartItem } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input({ required: true }) item!: CartItem;

  private readonly cartService = inject(CartService);

  readonly trashIcon = LucideTrash2;
  readonly plusIcon = LucidePlus;
  readonly minusIcon = LucideMinus;

  onIncrease(): void {
    this.cartService.increaseQuantity(this.item.id);
  }

  onDecrease(): void {
    this.cartService.decreaseQuantity(this.item.id);
  }

  onRemove(): void {
    this.cartService.removeItem(this.item.id);
  }
}
