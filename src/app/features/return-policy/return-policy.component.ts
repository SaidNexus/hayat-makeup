import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideCalendarDays,
  LucideCircleX,
  LucideClock3,
  LucideHeadphones,
  LucidePackageCheck,
  LucideRotateCcw,
  LucideWalletCards,
  LucideIcon,
} from '@lucide/angular';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { ReturnsHeroComponent } from './components/returns-hero/returns-hero.component';
import { ReturnPolicyCardComponent } from './components/return-policy-card/return-policy-card.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';

export interface ReturnPolicyItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const RETURN_FEE = 15;

@Component({
  selector: 'app-return-policy',
  standalone: true,
  imports: [
    HeaderComponent,
    ReturnsHeroComponent,
    ReturnPolicyCardComponent,
    MobileBottomNavComponent,
  ],
  templateUrl: './return-policy.component.html',
  styleUrl: './return-policy.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReturnPolicyComponent {
  readonly policies: ReturnPolicyItem[] = [
    {
      id: 1,
      title: 'شروط الاستبدال',
      description:
        'يحق لك استبدال المنتج في حال وجود عيب تصنيعي أو عند استلام منتج غير مطابق للطلب.',
      icon: LucideRotateCcw,
    },
    {
      id: 2,
      title: 'شروط الاسترجاع',
      description:
        'يحق لك استرجاع المنتج في حال عدم رضاك عنه، شرط ألا يكون قد تم فتحه أو استخدامه.',
      icon: LucidePackageCheck,
    },
    {
      id: 3,
      title: 'المدة المسموح بها',
      description:
        'يمكنك تقديم طلب الاستبدال أو الاسترجاع خلال 7 أيام من تاريخ استلام الطلب.',
      icon: LucideCalendarDays,
    },
    {
      id: 4,
      title: 'حالة المنتج',
      description:
        'يجب أن يكون المنتج غير مستخدم، وفي حالته الأصلية مع جميع الملحقات والتغليف.',
      icon: LucidePackageCheck,
    },
    {
      id: 5,
      title: 'المنتجات غير القابلة للاسترجاع',
      description:
        'لا يمكن استرجاع المنتجات التالية: المنتجات المفتوحة، منتجات العناية الشخصية، العروض والتخفيضات.',
      icon: LucideCircleX,
    },
    {
      id: 6,
      title: 'خطوات تقديم الطلب',
      description:
        'تواصلي معنا عبر خدمة العملاء أو من خلال التطبيق، مع إرفاق رقم الطلب وصورة المنتج.',
      icon: LucideHeadphones,
    },
    {
      id: 7,
      title: 'رسوم الاسترجاع إن وجدت',
      description: `في حال كان الاسترجاع بسبب تغيير الرأي، يتم خصم رسوم شحن قدرها ${RETURN_FEE} ريال من المبلغ المسترد.`,
      icon: LucideWalletCards,
    },
    {
      id: 8,
      title: 'مدة معالجة الطلب',
      description:
        'يتم معالجة طلب الاسترجاع خلال 5-8 أيام عمل من استلام المنتج، وسيتم إشعارك عبر التطبيق أو البريد الإلكتروني.',
      icon: LucideClock3,
    },
  ];
}
