import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LucideDynamicIcon, LucidePackageSearch } from '@lucide/angular';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { TrackOrderFormComponent } from './components/track-order-form/track-order-form.component';
import { OrderTrackingStatusComponent } from './components/order-tracking-status/order-tracking-status.component';
import {
  OrderTrackingTimelineComponent,
  OrderTrackingInfo,
} from './components/order-tracking-timeline/order-tracking-timeline.component';
import { OrderTrackingSummaryComponent } from './components/order-tracking-summary/order-tracking-summary.component';

export const TRACKING_ORDER_PRODUCTS = [
  {
    id: 1,
    name: 'ماسكارا حجم وطول',
    variant: 'أسود',
    price: '95.00',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248362/hayat-makeup/products/maskara.png',
  },
  {
    id: 2,
    name: 'أحمر شفاه مطفي',
    variant: 'وردي ناعم',
    price: '85.00',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248360/hayat-makeup/products/lipstick.png',
  },
];

export const TRACKING_RECORDS: OrderTrackingInfo[] = [
  {
    orderNumber: '10245',
    status: 'shipped',
    customerName: 'سارة العتيبي',
    createdAt: '2026-01-05',
    estimatedDelivery: '2026-01-10',
    items: TRACKING_ORDER_PRODUCTS,
  },
  {
    orderNumber: 'HM-2025-05873',
    status: 'out_for_delivery',
    customerName: 'نورة العتيبي',
    createdAt: '2026-01-02',
    estimatedDelivery: '2026-01-06',
    items: TRACKING_ORDER_PRODUCTS,
  },
  {
    orderNumber: '20451',
    status: 'delivered',
    customerName: 'لمى السالم',
    createdAt: '2025-12-20',
    estimatedDelivery: '2025-12-24',
    items: TRACKING_ORDER_PRODUCTS,
  },
  {
    orderNumber: '09832',
    status: 'confirmed',
    customerName: 'ريم القحطاني',
    createdAt: '2026-01-06',
    estimatedDelivery: '2026-01-09',
    items: TRACKING_ORDER_PRODUCTS,
  },
  {
    orderNumber: '03012',
    status: 'cancelled',
    customerName: 'هند الدوسري',
    createdAt: '2025-12-28',
    estimatedDelivery: '2025-12-30',
    items: TRACKING_ORDER_PRODUCTS,
  },
];

@Component({
  selector: 'app-track-order',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    TrackOrderFormComponent,
    OrderTrackingStatusComponent,
    OrderTrackingTimelineComponent,
    OrderTrackingSummaryComponent,
    LucideDynamicIcon,
  ],
  templateUrl: './track-order.component.html',
  styleUrl: './track-order.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrackOrderComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly packageSearchIcon = LucidePackageSearch;

  inputValue = signal<string>('');
  loading = signal<boolean>(false);
  tracking = signal<OrderTrackingInfo | null>(null);
  error = signal<boolean>(false);

  ngOnInit(): void {
    const urlOrder = this.route.snapshot.queryParamMap.get('order') || '';
    if (urlOrder) {
      this.inputValue.set(urlOrder);
      this.runTracking(urlOrder);
    }
  }

  normalizeOrderNumber(num: string): string {
    return String(num).trim().replace(/^#/, '');
  }

  runTracking(rawOrderNumber: string): void {
    const normalized = this.normalizeOrderNumber(rawOrderNumber);
    if (!normalized) {
      this.tracking.set(null);
      this.error.set(false);
      return;
    }

    this.loading.set(true);
    this.error.set(false);

    setTimeout(() => {
      const record = TRACKING_RECORDS.find(
        (item) => this.normalizeOrderNumber(item.orderNumber) === normalized
      );

      if (record) {
        this.tracking.set(record);
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { order: normalized },
          queryParamsHandling: 'merge',
          replaceUrl: true,
        });
      } else {
        this.tracking.set(null);
        this.error.set(true);
      }
      this.loading.set(false);
    }, 250);
  }

  handleSubmit(): void {
    this.runTracking(this.inputValue());
  }

  handleRetry(): void {
    this.inputValue.set('');
    this.tracking.set(null);
    this.error.set(false);
  }

  navigateHome(): void {
    this.router.navigateByUrl('/');
  }
}
