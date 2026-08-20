import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  LucideDynamicIcon,
  LucideHome,
  LucideShoppingBag,
  LucideGrid2x2,
  LucideTag,
  LucidePackage,
  LucideBookOpen,
  LucideFileText,
  LucideTruck,
  LucideMessageCircle,
  LucideInfo,
  LucideCircleHelp,
  LucideUserRound,
  LucideHeart,
  LucideLogOut,
  LucideIcon,
} from '@lucide/angular';
import { UiService } from '../../../../core/services/ui.service';
import { NAV_ROUTES } from '../nav-routes';

export interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

@Component({
  selector: 'app-mobile-menu-drawer',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './mobile-menu-drawer.component.html',
  styleUrl: './mobile-menu-drawer.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileMenuDrawerComponent {
  private readonly router = inject(Router);
  readonly uiService = inject(UiService);

  readonly logoutIcon = LucideLogOut;

  readonly menuItems: MenuItem[] = [
    {
      id: 'home',
      label: 'الرئيسية',
      icon: LucideHome,
      active: true,
    },
    {
      id: 'products',
      label: 'المنتجات',
      icon: LucideShoppingBag,
    },
    {
      id: 'categories',
      label: 'التصنيفات',
      icon: LucideGrid2x2,
    },
    {
      id: 'offers',
      label: 'العروض',
      icon: LucideTag,
    },
    {
      id: 'packages',
      label: 'الباقات',
      icon: LucidePackage,
    },
    {
      id: 'magazine',
      label: 'المجلة',
      icon: LucideBookOpen,
    },
    {
      id: 'trackOrder',
      label: 'تتبع الطلب',
      icon: LucideTruck,
    },
    {
      id: 'legalPolicies',
      label: 'السياسات القانونية',
      icon: LucideFileText,
    },
    {
      id: 'contact',
      label: 'تواصل معنا',
      icon: LucideMessageCircle,
    },
    {
      id: 'about',
      label: 'من نحن',
      icon: LucideInfo,
    },
    {
      id: 'faq',
      label: 'الأسئلة الشائعة',
      icon: LucideCircleHelp,
    },
    {
      id: 'account',
      label: 'حسابي',
      icon: LucideUserRound,
    },
    {
      id: 'favorites',
      label: 'المفضلة',
      icon: LucideHeart,
    },
  ];

  close(): void {
    this.uiService.setMenuOpen(false);
  }

  handleNavigate(id: string): void {
    const path = NAV_ROUTES[id];
    if (path) {
      this.router.navigateByUrl(path);
    }
    this.close();
  }
}
