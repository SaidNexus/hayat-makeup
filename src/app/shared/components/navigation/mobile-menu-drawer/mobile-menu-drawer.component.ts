import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
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
  LucideGlobe,
  LucideLanguages,
  LucideArrowLeft,
  LucideChevronRight,
  LucideLayoutDashboard,
  LucideIcon,
} from '@lucide/angular';
import { UiService } from '../../../../core/services/ui.service';
import { LangService } from '../../../../core/services/lang.service';
import { LocalizeFieldPipe } from '../../../pipes/localize-field.pipe';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

export interface MobileDrawerItem {
  to: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  icon: LucideIcon;
}

@Component({
  selector: 'app-mobile-menu-drawer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    LucideDynamicIcon,
    LocalizeFieldPipe,
  ],
  templateUrl: './mobile-menu-drawer.component.html',
  styleUrl: './mobile-menu-drawer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileMenuDrawerComponent {
  private readonly router = inject(Router);
  readonly uiService = inject(UiService);
  readonly langService = inject(LangService);

  readonly logoutIcon = LucideLogOut;
  readonly ArrowLeft = LucideArrowLeft;
  readonly ChevronRight = LucideChevronRight;
  readonly Globe = LucideGlobe;
  readonly Languages = LucideLanguages;
  readonly LayoutDashboard = LucideLayoutDashboard;

  readonly shoppingItems: MobileDrawerItem[] = [
    {
      to: '/',
      titleAr: 'الرئيسية',
      titleEn: 'Home',
      descAr: 'الصفحة الرئيسية للمتجر',
      descEn: 'Main store page',
      icon: LucideHome,
    },
    {
      to: '/products',
      titleAr: 'جميع المنتجات',
      titleEn: 'All Products',
      descAr: 'استكشفي تشكيلة المكياج الكاملة',
      descEn: 'Explore full makeup collection',
      icon: LucideShoppingBag,
    },
    {
      to: '/categories',
      titleAr: 'التصنيفات',
      titleEn: 'Categories',
      descAr: 'تسوقي حسب فئات مستحضرات التجميل',
      descEn: 'Shop by beauty categories',
      icon: LucideGrid2x2,
    },
    {
      to: '/offers',
      titleAr: 'العروض والتخفيضات',
      titleEn: 'Offers & Deals',
      descAr: 'أقوى الخصومات والعروض الحصرية',
      descEn: 'Exclusive discounts & special deals',
      icon: LucideTag,
    },
    {
      to: '/best-sellers',
      titleAr: 'الأكثر مبيعاً',
      titleEn: 'Best Sellers',
      descAr: 'المنتجات الأكثر طلباً وإعجاباً',
      descEn: 'Most popular & top-rated items',
      icon: LucideHeart,
    },
    {
      to: '/new-arrivals',
      titleAr: 'وصل حديثاً',
      titleEn: 'New Arrivals',
      descAr: 'أحدث صيحات وابتكارات الجمال',
      descEn: 'Latest beauty additions & trends',
      icon: LucideSparkles,
    },
    {
      to: '/packages',
      titleAr: 'الباقات والمجموعات',
      titleEn: 'Bundles & Sets',
      descAr: 'باقات توفير متكاملة ومميزة',
      descEn: 'Value bundles & complete sets',
      icon: LucidePackage,
    },
  ];

  readonly beautyItems: MobileDrawerItem[] = [
    {
      to: '/looks',
      titleAr: 'الإطلالات',
      titleEn: 'Makeup Looks',
      descAr: 'إلهام وتنسيقات مكياج عصرية',
      descEn: 'Inspirational modern styles',
      icon: LucideSparkles,
    },
    {
      to: '/makeup-guide',
      titleAr: 'دليل المكياج',
      titleEn: 'Makeup Guide',
      descAr: 'نصائح وإرشادات للمكياج الاحترافي',
      descEn: 'Pro beauty tips & step-by-step',
      icon: LucideBookOpen,
    },
    {
      to: '/magazine',
      titleAr: 'مجلة الجمال',
      titleEn: 'Beauty Magazine',
      descAr: 'أسرار العناية وصيحات الموضة',
      descEn: 'Beauty secrets, news & trends',
      icon: LucideBookOpen,
    },
    {
      to: '/shop-by-color',
      titleAr: 'تسوق حسب اللون',
      titleEn: 'Shop by Color',
      descAr: 'اختاري مستحضراتك حسب درجتك المفضلة',
      descEn: 'Pick products by your shade',
      icon: LucideTag,
    },
    {
      to: '/skin-quiz',
      titleAr: 'اختبار البشرة',
      titleEn: 'Skin Quiz',
      descAr: 'اكتشفي الروتين الأنسب لبشرتك',
      descEn: 'Find your personalized routine',
      icon: LucideSparkles,
    },
    {
      to: '/skin-type',
      titleAr: 'نوع البشرة',
      titleEn: 'Skin Type',
      descAr: 'منتجات مخصصة لكل نوع بشرة',
      descEn: 'Tailored products for your skin',
      icon: LucideInfo,
    },
  ];

  readonly accountAndHelpItems: MobileDrawerItem[] = [
    {
      to: '/account',
      titleAr: 'حسابي',
      titleEn: 'My Account',
      descAr: 'إدارة الملف الشخصي والبيانات',
      descEn: 'Manage your profile & orders',
      icon: LucideUserRound,
    },
    {
      to: '/wishlist',
      titleAr: 'المفضلة',
      titleEn: 'Wishlist',
      descAr: 'قائمة المنتجات المحفوظة لديكِ',
      descEn: 'Your saved favorite items',
      icon: LucideHeart,
    },
    {
      to: '/track-order',
      titleAr: 'تتبع الطلب',
      titleEn: 'Track Order',
      descAr: 'متابعة حالة شحنتك لحظة بلحظة',
      descEn: 'Track your shipment status',
      icon: LucideTruck,
    },
    {
      to: '/faq',
      titleAr: 'الأسئلة الشائعة',
      titleEn: 'FAQ',
      descAr: 'إجابات على الأسئلة الأكثر تكراراً',
      descEn: 'Frequently asked questions',
      icon: LucideCircleHelp,
    },
    {
      to: '/contact',
      titleAr: 'تواصل معنا',
      titleEn: 'Contact Us',
      descAr: 'فريق خدمة العملاء في خدمتك',
      descEn: 'Our support team is here to help',
      icon: LucideMessageCircle,
    },
    {
      to: '/about',
      titleAr: 'من نحن',
      titleEn: 'About Us',
      descAr: 'تعرفي على قصة حياة ميك اب ورؤيتنا',
      descEn: 'Our story and brand mission',
      icon: LucideInfo,
    },
  ];

  close(): void {
    this.uiService.setMenuOpen(false);
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  toggleLanguage(): void {
    this.langService.toggleLang();
  }
}
