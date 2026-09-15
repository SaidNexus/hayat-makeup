import { Component, EventEmitter, Input, Output, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LucideDynamicIcon, LucideShoppingBag } from '@lucide/angular';
import { CartService } from '../../../../core/services/cart.service';
import { LocalizeFieldPipe } from '../../../../shared/pipes/localize-field.pipe';

@Component({
  selector: 'app-product-actions',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon, LocalizeFieldPipe],
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
