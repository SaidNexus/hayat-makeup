import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucidePackageOpen } from '@lucide/angular';
import { OrderProductRowComponent } from '../../../order-success/components/order-product-row/order-product-row.component';
import { OrderTrackingInfo } from '../order-tracking-timeline/order-tracking-timeline.component';

@Component({
  selector: 'app-order-tracking-summary',
  standalone: true,
  imports: [OrderProductRowComponent, LucideDynamicIcon],
  templateUrl: './order-tracking-summary.component.html',
  styleUrl: './order-tracking-summary.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderTrackingSummaryComponent {
  get formattedTotal(): string {
    return Number(this.total || 0).toFixed(2);
  }
  @Input({ required: true }) tracking!: OrderTrackingInfo;

  readonly packageOpenIcon = LucidePackageOpen;

  get total(): number {
    const items = this.tracking.items || [];
    return items.reduce(
      (sum, item) => sum + Number(item.price) * Number(item.quantity || 1),
      0
    );
  }
}
