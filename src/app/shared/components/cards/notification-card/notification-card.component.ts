import { Component, Input, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  LucideDynamicIcon,
  LucideBell,
  LucideHeart,
  LucideShoppingBag,
  LucideSparkles,
  LucideTag,
  LucideTicket,
  LucideTruck,
  LucideIcon,
} from '@lucide/angular';

export interface NotificationItem {
  id: number;
  category: string;
  icon: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  target?: string;
}

const ICON_MAP: Record<string, LucideIcon> = {
  orderConfirmed: LucideShoppingBag,
  orderShipped: LucideTruck,
  product: LucideHeart,
  offer: LucideTag,
  collection: LucideSparkles,
  coupon: LucideTicket,
};

@Component({
  selector: 'app-notification-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './notification-card.component.html',
  styleUrl: './notification-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationCardComponent {
  @Input({ required: true }) notification!: NotificationItem;

  private readonly router = inject(Router);

  get icon(): LucideIcon {
    return ICON_MAP[this.notification.icon] || LucideBell;
  }

  onClick(): void {
    if (this.notification.target) {
      this.router.navigateByUrl(this.notification.target);
    }
  }
}
