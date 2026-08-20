import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import {
  LucideDynamicIcon,
  LucideHome,
  LucideShoppingBag,
  LucideGrid2x2,
  LucideTag,
  LucidePackage,
  LucideBookOpen,
  LucideTruck,
  LucideMessageCircle,
  LucideInfo,
  LucideCircleHelp,
  LucideUserRound,
  LucideHeart,
  LucideLogOut,
  LucideSparkles,
  LucideIcon,
} from '@lucide/angular';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';

export interface MenuItemData {
  to: string;
  label: string;
  icon: LucideIcon;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideDynamicIcon, HeaderComponent, MobileBottomNavComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  private readonly router = inject(Router);

  readonly LogOut = LucideLogOut;

  readonly menuItems: MenuItemData[] = [
    { to: '/', label: 'الرئيسية', icon: LucideHome },
    { to: '/products', label: 'جميع المنتجات', icon: LucideShoppingBag },
    { to: '/categories', label: 'التصنيفات', icon: LucideGrid2x2 },
    { to: '/offers', label: 'العروض والتخفيضات', icon: LucideTag },
    { to: '/best-sellers', label: 'الأكثر مبيعاً', icon: LucideHeart },
    { to: '/new-arrivals', label: 'وصل حديثاً', icon: LucideSparkles },
    { to: '/packages', label: 'الباقات', icon: LucidePackage },
    { to: '/looks', label: 'الإطلالات', icon: LucideSparkles },
    { to: '/makeup-guide', label: 'دليل المكياج', icon: LucideBookOpen },
    { to: '/magazine', label: 'مجلة الجمال', icon: LucideBookOpen },
    { to: '/shop-by-color', label: 'تسوق حسب اللون', icon: LucideTag },
    { to: '/skin-quiz', label: 'اختبار البشرة', icon: LucideSparkles },
    { to: '/skin-type', label: 'نوع البشرة', icon: LucideInfo },
    { to: '/track-order', label: 'تتبع الطلب', icon: LucideTruck },
    { to: '/faq', label: 'الأسئلة الشائعة', icon: LucideCircleHelp },
    { to: '/contact', label: 'تواصل معنا', icon: LucideMessageCircle },
    { to: '/about', label: 'من نحن', icon: LucideInfo },
    { to: '/account', label: 'حسابي', icon: LucideUserRound },
    { to: '/wishlist', label: 'المفضلة', icon: LucideHeart },
  ];

  get currentPath(): string {
    return this.router.url;
  }
}
