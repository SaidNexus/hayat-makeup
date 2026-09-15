import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideBell,
  LucideHeart,
  LucideInfo,
  LucideLogOut,
  LucideMapPin,
  LucideMessageCircle,
  LucidePackageCheck,
  LucideSettings,
  LucideShieldCheck,
  LucideShoppingBag,
  LucideTruck,
  LucideIcon,
} from '@lucide/angular';
import { AccountMenuItemComponent } from '../account-menu-item/account-menu-item.component';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

export interface AccountMenuGroup {
  title: string;
  titleKey?: string;
  items: {
    id: string;
    label: string;
    labelKey?: string;
    icon: LucideIcon;
    to: string;
    badge?: number;
  }[];
}

@Component({
  selector: 'app-account-sections',
  standalone: true,
  imports: [AccountMenuItemComponent, LucideDynamicIcon, TranslatePipe],
  templateUrl: './account-sections.component.html',
  styleUrl: './account-sections.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSectionsComponent {
  @Input() cartCount = 0;
  @Input() favoritesCount = 0;
  @Output() navigate = new EventEmitter<string>();
  @Output() logout = new EventEmitter<void>();

  readonly logOutIcon = LucideLogOut;

  get groups(): AccountMenuGroup[] {
    return [
      {
        title: 'طلباتي',
        titleKey: 'ACCOUNT.MY_ORDERS_SECTION',
        items: [
          {
            id: 'favorites',
            label: 'المفضلة',
            labelKey: 'ACCOUNT.FAVORITES',
            icon: LucideHeart,
            badge: this.favoritesCount,
            to: '/wishlist',
          },
          {
            id: 'cart',
            label: 'السلة',
            labelKey: 'ACCOUNT.CART',
            icon: LucideShoppingBag,
            badge: this.cartCount,
            to: '/cart',
          },
          {
            id: 'orders',
            label: 'الطلبات',
            labelKey: 'ACCOUNT.ORDERS',
            icon: LucidePackageCheck,
            to: '/order-success',
          },
          {
            id: 'trackOrder',
            label: 'تتبع الطلب',
            labelKey: 'ACCOUNT.TRACK_ORDER',
            icon: LucideTruck,
            to: '/track-order',
          },
          {
            id: 'notifications',
            label: 'الإشعارات',
            labelKey: 'ACCOUNT.NOTIFICATIONS',
            icon: LucideBell,
            to: '/notifications',
          },
          {
            id: 'addresses',
            label: 'عناويني',
            labelKey: 'ACCOUNT.ADDRESSES',
            icon: LucideMapPin,
            to: '/checkout',
          },
        ],
      },
      {
        title: 'الدعم',
        titleKey: 'ACCOUNT.SUPPORT_SECTION',
        items: [
          {
            id: 'contact',
            label: 'تواصل معنا',
            labelKey: 'ACCOUNT.CONTACT_US',
            icon: LucideMessageCircle,
            to: '/contact',
          },
          {
            id: 'policies',
            label: 'السياسات',
            labelKey: 'ACCOUNT.POLICIES',
            icon: LucideShieldCheck,
            to: '/legal-policies',
          },
          {
            id: 'about',
            label: 'من نحن',
            labelKey: 'ACCOUNT.ABOUT_US',
            icon: LucideInfo,
            to: '/about',
          },
        ],
      },
      {
        title: 'الإعدادات',
        titleKey: 'ACCOUNT.SETTINGS_SECTION',
        items: [
          {
            id: 'settings',
            label: 'إعدادات الحساب',
            labelKey: 'ACCOUNT.ACCOUNT_SETTINGS',
            icon: LucideSettings,
            to: '/privacy-policy',
          },
        ],
      },
    ];
  }

  onNavigate(path: string): void {
    this.navigate.emit(path);
  }

  onLogout(): void {
    this.logout.emit();
  }
}
