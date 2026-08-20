import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { OrderSuccessHeaderComponent } from '../../shared/components/order/order-success-header/order-success-header.component';
import { OrderNumberComponent } from '../../shared/components/order/order-number/order-number.component';
import {
  OrderSummaryComponent,
  OrderProduct,
  ORDER_SUMMARY_DEFAULT_PRODUCTS,
} from './components/order-summary/order-summary.component';
import {
  DeliveryDetailsComponent,
  CustomerDetails,
} from '../../shared/components/order/delivery-details/delivery-details.component';
import { ExpectedDeliveryComponent } from './components/expected-delivery/expected-delivery.component';
import { OrderActionsComponent } from './components/order-actions/order-actions.component';

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    OrderSuccessHeaderComponent,
    OrderNumberComponent,
    OrderSummaryComponent,
    DeliveryDetailsComponent,
    ExpectedDeliveryComponent,
    OrderActionsComponent,
  ],
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSuccessComponent {
  private readonly router = inject(Router);

  readonly orderData: any = history.state?.order;

  readonly orderNumber: string = this.orderData?.number || 'HY-849204';

  readonly orderProducts: OrderProduct[] = this.orderData?.items
    ? this.orderData.items.map((item: any) => ({
        id: item.id,
        name: item.name,
        variant: item.color || item.description || '',
        price: Number(item.price),
        quantity: item.quantity || 1,
        image: item.image,
      }))
    : ORDER_SUMMARY_DEFAULT_PRODUCTS;

  readonly customer: CustomerDetails | undefined = this.orderData?.customer;

  onTrackOrder(): void {
    this.router.navigate(['/track-order'], {
      queryParams: { order: this.orderNumber },
    });
  }

  onContinueShopping(): void {
    this.router.navigateByUrl('/products');
  }
}
