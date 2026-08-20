import { Component, computed, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LucideDynamicIcon, LucideChevronLeft } from '@lucide/angular';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CouponBoxComponent } from './components/coupon-box/coupon-box.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartService } from '../../core/services/cart.service';

export const SHIPPING_FEE = 25;
export const FREE_SHIPPING_THRESHOLD = 200;
export const CART_DISCOUNT = 15;

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    LucideDynamicIcon,
    HeaderComponent,
    MobileBottomNavComponent,
    CartItemComponent,
    CouponBoxComponent,
    CartSummaryComponent,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  private readonly router = inject(Router);
  readonly cartService = inject(CartService);

  readonly chevronLeftIcon = LucideChevronLeft;
  readonly couponApplied = signal<boolean>(false);

  readonly subtotal = computed(() => this.cartService.subtotal());

  readonly shipping = computed(() =>
    this.subtotal() >= FREE_SHIPPING_THRESHOLD || this.subtotal() === 0 ? 0 : SHIPPING_FEE
  );

  readonly discount = computed(() => (this.couponApplied() ? CART_DISCOUNT : 0));

  readonly total = computed(
    () => this.subtotal() + this.shipping() - this.discount()
  );

  readonly itemsCount = computed(() => this.cartService.totalItems());

  navigateTo(path: string): void {
    this.router.navigateByUrl(path);
  }

  onApplyCoupon(): void {
    this.couponApplied.set(true);
  }
}
