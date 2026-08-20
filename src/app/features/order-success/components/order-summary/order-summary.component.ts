import { Component, Input, computed, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideShoppingBag } from '@lucide/angular';
import { OrderProductRowComponent } from '../order-product-row/order-product-row.component';

export interface OrderProduct {
  id: number | string;
  name: string;
  variant?: string;
  price: number | string;
  quantity?: number | string;
  image: string;
}

export const ORDER_SUMMARY_DEFAULT_PRODUCTS: OrderProduct[] = [
  {
    id: 1,
    name: 'أحمر شفاه مات رويال',
    variant: 'روز غامق',
    price: 75,
    quantity: 1,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248089/hayat-makeup/best-seller/lipstick.png',
  },
  {
    id: 2,
    name: 'كريم أساس بيرفكت كفر',
    variant: 'بيج طبيعي',
    price: 105,
    quantity: 2,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248087/hayat-makeup/best-seller/foundation.png',
  },
];

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [LucideDynamicIcon, OrderProductRowComponent],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSummaryComponent {
  @Input() products: OrderProduct[] = ORDER_SUMMARY_DEFAULT_PRODUCTS;

  readonly shoppingBagIcon = LucideShoppingBag;

  readonly total = computed(() =>
    this.products.reduce(
      (sum, p) => sum + Number(p.price) * Number(p.quantity || 1),
      0
    )
  );
}
