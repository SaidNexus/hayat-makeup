import { Component, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { NotificationTabsComponent } from './components/notification-tabs/notification-tabs.component';
import {
  NotificationCardComponent,
  NotificationItem,
} from '../../shared/components/cards/notification-card/notification-card.component';

export const NOTIFICATIONS_DATA: NotificationItem[] = [
  {
    id: 1,
    category: 'orders',
    icon: 'orderConfirmed',
    title: 'تم تأكيد طلبك',
    description: 'تم تأكيد طلبك بنجاح رقم #10245',
    time: 'منذ ساعة',
    read: false,
    target: '/order-success',
  },
  {
    id: 2,
    category: 'orders',
    icon: 'orderShipped',
    title: 'تم شحن طلبك',
    description: 'تم شحن طلبك رقم #10245 وجاري التوصيل',
    time: 'منذ 3 ساعات',
    read: false,
    target: '/order-success',
  },
  {
    id: 3,
    category: 'products',
    icon: 'product',
    title: 'المنتج متوفر مجددًا',
    description: 'أحمر الشفاه المحملي متوفر الآن في المخزون',
    time: 'منذ 5 ساعات',
    read: false,
    target: '/products',
  },
  {
    id: 4,
    category: 'offers',
    icon: 'offer',
    title: 'عرض جديد',
    description: 'خصم 20% على جميع منتجات العناية بالبشرة',
    time: 'منذ يوم',
    read: false,
    target: '/offers',
  },
  {
    id: 5,
    category: 'products',
    icon: 'collection',
    title: 'مجموعة جديدة',
    description: 'اكتشفي مجموعة الربيع الجديدة الآن',
    time: 'منذ يومين',
    read: false,
    target: '/new-arrivals',
  },
  {
    id: 6,
    category: 'offers',
    icon: 'coupon',
    title: 'كوبون متاح لك',
    description: 'كوبون خصم 15% على طلبك التالي',
    time: 'منذ يومين',
    read: false,
    target: '/offers',
  },
];

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    NotificationTabsComponent,
    NotificationCardComponent,
  ],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent {
  activeTab = signal<string>('all');
  readonly allNotifications = signal<NotificationItem[]>(NOTIFICATIONS_DATA);

  readonly filteredNotifications = computed(() => {
    const tab = this.activeTab();
    if (tab === 'all') return this.allNotifications();
    return this.allNotifications().filter((n) => n.category === tab);
  });

  onTabChange(tab: string): void {
    this.activeTab.set(tab);
  }
}
