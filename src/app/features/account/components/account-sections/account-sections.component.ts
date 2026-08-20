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

export interface AccountMenuGroup {
  title: string;
  items: {
    id: string;
    label: string;
    icon: LucideIcon;
    to: string;
    badge?: number;
  }[];
}

@Component({
  selector: 'app-account-sections',
  standalone: true,
  imports: [AccountMenuItemComponent, LucideDynamicIcon],
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
        items: [
          {
            id: 'favorites',
            label: 'المفضلة',
            icon: LucideHeart,
            badge: this.favoritesCount,
            to: '/wishlist',
          },
          {
            id: 'cart',
            label: 'السلة',
            icon: LucideShoppingBag,
            badge: this.cartCount,
            to: '/cart',
          },
          {
            id: 'orders',
            label: 'الطلبات',
            icon: LucidePackageCheck,
            to: '/order-success',
          },
          {
            id: 'trackOrder',
            label: 'تتبع الطلب',
            icon: LucideTruck,
            to: '/track-order',
          },
          {
            id: 'notifications',
            label: 'الإشعارات',
            icon: LucideBell,
            to: '/notifications',
          },
          {
            id: 'addresses',
            label: 'عناويني',
            icon: LucideMapPin,
            to: '/checkout',
          },
        ],
      },
      {
        title: 'الدعم',
        items: [
          {
            id: 'contact',
            label: 'تواصل معنا',
            icon: LucideMessageCircle,
            to: '/contact',
          },
          {
            id: 'policies',
            label: 'السياسات',
            icon: LucideShieldCheck,
            to: '/legal-policies',
          },
          {
            id: 'about',
            label: 'من نحن',
            icon: LucideInfo,
            to: '/about',
          },
        ],
      },
      {
        title: 'الإعدادات',
        items: [
          {
            id: 'settings',
            label: 'إعدادات الحساب',
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
