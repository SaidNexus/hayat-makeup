import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideClipboardList,
  LucideClock3,
  LucideMapPin,
  LucidePackage,
  LucideSearch,
  LucideTag,
  LucideTriangleAlert,
  LucideTruck,
  LucideIcon,
} from '@lucide/angular';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { ShippingCardComponent } from './components/shipping-card/shipping-card.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';

export interface ShippingSection {
  title: string;
  icon: LucideIcon;
  lines: string[];
}

export const SHIPPING_FEE = 25;
export const FREE_SHIPPING_THRESHOLD = 199;

@Component({
  selector: 'app-shipping-policy',
  standalone: true,
  imports: [
    HeaderComponent,
    ShippingCardComponent,
    MobileBottomNavComponent,
    LucideDynamicIcon,
  ],
  templateUrl: './shipping-policy.component.html',
  styleUrl: './shipping-policy.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShippingPolicyComponent {
  readonly truckIcon = LucideTruck;

  readonly shippingSections: ShippingSection[] = [
    {
      title: 'مدة تجهيز الطلب',
      icon: LucidePackage,
      lines: [
        'يتم تجهيز الطلبات خلال 1-2 يوم عمل من تأكيد الطلب.',
        'لا يتم التجهيز أو الشحن في عطلات نهاية الأسبوع والمناسبات الرسمية.',
      ],
    },
    {
      title: 'مدة التوصيل',
      icon: LucideClock3,
      lines: [
        'داخل المدن الرئيسية: من 1 إلى 3 أيام عمل.',
        'المدن والمناطق الأخرى: من 3 إلى 7 أيام عمل.',
      ],
    },
    {
      title: 'رسوم الشحن',
      icon: LucideTag,
      lines: [
        `شحن مجاني للطلبات التي تزيد عن ${FREE_SHIPPING_THRESHOLD} ريال.`,
        `رسوم شحن ثابتة ${SHIPPING_FEE} ريال للطلبات الأقل من ${FREE_SHIPPING_THRESHOLD} ريال.`,
      ],
    },
    {
      title: 'المدن والمناطق المتاحة',
      icon: LucideMapPin,
      lines: [
        'نوفر خدمات التوصيل إلى جميع مدن ومناطق المملكة العربية السعودية.',
      ],
    },
    {
      title: 'التتبع',
      icon: LucideSearch,
      lines: [
        'عند شحن طلبك، ستصلك رسالة تحتوي على رقم التتبع',
        'لمتابعة حالة الشحنة خطوة بخطوة.',
      ],
    },
    {
      title: 'التأخير المحتمل',
      icon: LucideTriangleAlert,
      lines: [
        'قد يحدث تأخير في التوصيل بسبب ظروف خارجة عن إرادتنا',
        'مثل الأحوال الجوية أو العطلات الرسمية.',
        'سيتم إشعارك في حال وجود أي تأخير متوقع.',
      ],
    },
    {
      title: 'ملاحظات الاستلام',
      icon: LucideClipboardList,
      lines: [
        'يرجى التأكد من صحة بيانات العنوان ورقم الجوال عند إتمام الطلب.',
        'يجب استلام الطلب من قبل الشخص المستلم أو من ينوب عنه.',
        'في حال وجود مشكلة في الطلب، يرجى التواصل مع خدمة العملاء خلال 24 ساعة.',
      ],
    },
  ];
}
