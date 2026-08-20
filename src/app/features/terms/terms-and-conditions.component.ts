import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideCopyright,
  LucideCreditCard,
  LucideFileCheck,
  LucideHeadphones,
  LucidePackageCheck,
  LucideShield,
  LucideTag,
  LucideTriangleAlert,
  LucideTruck,
  LucideIcon,
} from '@lucide/angular';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { TermsItemComponent } from './components/terms-item/terms-item.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';

export interface TermEntry {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [HeaderComponent, TermsItemComponent, MobileBottomNavComponent],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsAndConditionsComponent {
  openId = signal<number | null>(null);

  readonly terms: TermEntry[] = [
    {
      id: 1,
      title: 'القبول بالشروط',
      description:
        'باستخدامك للموقع أو التطبيق، فإنك توافق على الالتزام بهذه الشروط والأحكام.',
      icon: LucideFileCheck,
    },
    {
      id: 2,
      title: 'الطلبات والدفع',
      description:
        'جميع الطلبات تخضع للتوفر. يتم الدفع عبر الوسائل المتاحة بالموقع.',
      icon: LucideCreditCard,
    },
    {
      id: 3,
      title: 'الأسعار',
      description:
        'جميع الأسعار بالريال السعودي وتشمل ضريبة القيمة المضافة.',
      icon: LucideTag,
    },
    {
      id: 4,
      title: 'الشحن',
      description:
        'نقوم بشحن الطلبات إلى جميع مناطق المملكة وفق شركة الشحن واختيارك.',
      icon: LucideTruck,
    },
    {
      id: 5,
      title: 'الاستبدال والاسترجاع',
      description:
        'يمكنك الاستبدال أو الاسترجاع خلال 7 أيام من استلام الطلب وفق سياسة الاسترجاع المعتمدة.',
      icon: LucidePackageCheck,
    },
    {
      id: 6,
      title: 'استخدام الموقع أو التطبيق',
      description:
        'يُمنع استخدام الموقع أو التطبيق لأي أغراض غير قانونية أو تضر بتجربة المستخدم أو أمن النظام.',
      icon: LucideShield,
    },
    {
      id: 7,
      title: 'حقوق الملكية',
      description:
        'جميع المحتويات والملكية الفكرية الخاصة بمتجر Hayat Makeup محفوظة ولا يجوز استخدامها دون إذن.',
      icon: LucideCopyright,
    },
    {
      id: 8,
      title: 'المسؤولية',
      description:
        'نحن نسعى لتقديم معلومات دقيقة، لكننا لا نضمن خلو الموقع أو المنتجات من الأخطاء بشكل كامل.',
      icon: LucideTriangleAlert,
    },
    {
      id: 9,
      title: 'طرق التواصل',
      description:
        'لأي استفسار أو دعم، تواصل معنا عبر قنوات التواصل المتاحة.',
      icon: LucideHeadphones,
    },
  ];

  handleToggle(id: number): void {
    this.openId.update((current) => (current === id ? null : id));
  }
}
