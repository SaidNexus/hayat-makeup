import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideCheckCircle2,
  LucidePackageCheck,
  LucideXCircle,
} from '@lucide/angular';

const STATUS_LABELS: Record<string, string> = {
  pending: 'قيد المعالجة',
  confirmed: 'تم تأكيد الطلب',
  preparing: 'جاري تجهيز الطلب',
  shipped: 'تم شحن الطلب',
  out_for_delivery: 'جاري التوصيل',
  delivered: 'تم التوصيل',
  cancelled: 'تم إلغاء الطلب',
};

@Component({
  selector: 'app-order-tracking-status',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './order-tracking-status.component.html',
  styleUrl: './order-tracking-status.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderTrackingStatusComponent {
  @Input({ required: true }) status!: string;

  readonly xCircleIcon = LucideXCircle;
  readonly checkCircleIcon = LucideCheckCircle2;
  readonly packageCheckIcon = LucidePackageCheck;

  get label(): string {
    return STATUS_LABELS[this.status] || this.status;
  }

  get isCancelled(): boolean {
    return this.status === 'cancelled';
  }

  get isDelivered(): boolean {
    return this.status === 'delivered';
  }
}
