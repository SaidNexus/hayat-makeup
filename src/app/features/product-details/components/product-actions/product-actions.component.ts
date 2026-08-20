import { Component, Input, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LucideDynamicIcon, LucideShoppingBag } from '@lucide/angular';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-product-actions',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './product-actions.component.html',
  styleUrl: './product-actions.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductActionsComponent {
  @Input({ required: true }) product: any;
  @Input() quantity = 1;

  private readonly router = inject(Router);
  private readonly cartService = inject(CartService);

  readonly shoppingBagIcon = LucideShoppingBag;

  handleAddToCart(): void {
    this.cartService.addToCart({ ...this.product, quantity: this.quantity });
  }

  handleBuyNow(): void {
    this.cartService.addToCart({ ...this.product, quantity: this.quantity });
    this.router.navigateByUrl('/checkout');
  }
}
