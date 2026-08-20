import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideCheck,
  LucideX,
} from '@lucide/angular';

const STEP_ORDER = [
  'placed',
  'confirmed',
  'preparing',
  'shipped',
  'out_for_delivery',
  'delivered',
];

const STATUS_LABELS: Record<string, string> = {
  placed: 'تم الطلب',
  confirmed: 'تم تأكيد الطلب',
  preparing: 'جاري تجهيز الطلب',
  shipped: 'تم شحن الطلب',
  out_for_delivery: 'جاري التوصيل',
  delivered: 'تم التوصيل',
  cancelled: 'تم إلغاء الطلب',
};

export interface TimelineRow {
  id: string;
  label: string;
  completed: boolean;
  current: boolean;
}

export interface OrderTrackingInfo {
  orderNumber: string;
  status: string;
  customerName: string;
  createdAt: string;
  estimatedDelivery: string;
  items: {
    id: number;
    name: string;
    variant?: string;
    price: string | number;
    image: string;
    quantity?: number;
  }[];
}

@Component({
  selector: 'app-order-tracking-timeline',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './order-tracking-timeline.component.html',
  styleUrl: './order-tracking-timeline.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderTrackingTimelineComponent {
  @Input({ required: true }) tracking!: OrderTrackingInfo;

  readonly checkIcon = LucideCheck;
  readonly xIcon = LucideX;

  get isCancelled(): boolean {
    return this.tracking.status === 'cancelled';
  }

  get rows(): TimelineRow[] {
    if (this.isCancelled) {
      return STEP_ORDER.map((id) => ({
        id,
        label: STATUS_LABELS[id],
        completed: false,
        current: false,
      }));
    }

    const currentIndex = STEP_ORDER.indexOf(this.tracking.status);
    const resolvedIndex = currentIndex === -1 ? 0 : currentIndex;

    return STEP_ORDER.map((id, index) => ({
      id,
      label: STATUS_LABELS[id],
      completed: index < resolvedIndex,
      current: index === resolvedIndex,
    }));
  }
}
