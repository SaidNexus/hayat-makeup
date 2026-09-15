import { Component, computed, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  LucideDynamicIcon,
  LucideArrowRight,
  LucideLockKeyhole,
  LucideUserRound,
  LucideMail,
  LucideMapPin,
  LucideHouse,
  LucideMessageSquare,
  LucideChevronDown,
  LucideCreditCard,
  LucideHandCoins,
  LucideBuilding2,
  LucideWalletCards,
  LucideShoppingBag,
  LucideShieldCheck,
  LucideBadgeCheck,
  LucideHeadphones,
} from '@lucide/angular';
import { CartService } from '../../core/services/cart.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { LocalizeFieldPipe } from '../../shared/pipes/localize-field.pipe';

export interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  city: string;
  area: string;
  address: string;
  notes: string;
}

export const CHECKOUT_DISCOUNT = 15;
export const SHIPPING_FEE = 25;
export const COUPON_CODE = 'HAYAT10';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    LucideDynamicIcon,
    TranslatePipe,
    LocalizeFieldPipe,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent {
  private readonly router = inject(Router);
  readonly cartService = inject(CartService);

  readonly logo = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248206/hayat-makeup/hero.png';
  readonly couponCode = COUPON_CODE;

  // Icons
  readonly arrowRightIcon = LucideArrowRight;
  readonly lockKeyholeIcon = LucideLockKeyhole;
  readonly userRoundIcon = LucideUserRound;
  readonly mailIcon = LucideMail;
  readonly mapPinIcon = LucideMapPin;
  readonly houseIcon = LucideHouse;
  readonly messageSquareIcon = LucideMessageSquare;
  readonly chevronDownIcon = LucideChevronDown;
  readonly creditCardIcon = LucideCreditCard;
  readonly handCoinsIcon = LucideHandCoins;
  readonly building2Icon = LucideBuilding2;
  readonly walletCardsIcon = LucideWalletCards;
  readonly shoppingBagIcon = LucideShoppingBag;
  readonly shieldCheckIcon = LucideShieldCheck;
  readonly badgeCheckIcon = LucideBadgeCheck;
  readonly headphonesIcon = LucideHeadphones;

  paymentMethod: 'cash' | 'bank' | 'wallet' = 'cash';

  // Direct form model object for reliable 2-way [(ngModel)] binding
  form: CheckoutForm = {
    name: '',
    email: '',
    phone: '',
    city: '',
    area: '',
    address: '',
    notes: '',
  };

  readonly cities = ['الرياض', 'جدة', 'الدمام', 'مكة المكرمة', 'المدينة المنورة', 'الخبر'];
  readonly areas = ['الوسطى', 'الشمالية', 'الجنوبية', 'الشرقية', 'الغربية'];

  readonly subtotal = computed(() => this.cartService.subtotal());
  readonly shipping = computed(() =>
    this.cartService.items().length > 0 ? SHIPPING_FEE : 0
  );
  readonly discount = CHECKOUT_DISCOUNT;
  readonly total = computed(
    () => Math.max(0, this.subtotal() + this.shipping() - this.discount)
  );

  navigateTo(path: string): void {
    this.router.navigateByUrl(path);
  }

  setPayment(method: 'cash' | 'bank' | 'wallet'): void {
    this.paymentMethod = method;
  }

  handleSubmit(): void {
    const orderData = {
      number: `HY-${Math.floor(100000 + Math.random() * 900000)}`,
      customer: { ...this.form },
      paymentMethod: this.paymentMethod,
      items: this.cartService.items(),
      subtotal: this.subtotal(),
      shipping: this.shipping(),
      discount: this.discount,
      total: this.total(),
      date: new Date().toISOString(),
    };

    this.cartService.clearCart();
    this.router.navigate(['/order-success'], { state: { order: orderData } });
  }
}
