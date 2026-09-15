import { Component, Input, ChangeDetectionStrategy, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideDynamicIcon,
  LucideChevronDown,
  LucideClock3,
  LucideFileText,
  LucideLeaf,
  LucideSparkles,
  LucideIcon,
} from '@lucide/angular';
import { LocalizeFieldPipe } from '../../../../shared/pipes/localize-field.pipe';

export interface AccordionItem {
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  icon: LucideIcon;
}

export const ACCORDION_ITEMS_DATA: AccordionItem[] = [
  {
    titleAr: 'الوصف',
    titleEn: 'Description',
    contentAr: 'أحمر شفاه مطفي بتركيبة غنية يمنحك لوناً كثيفاً من أول تمريرة مع نعومة وراحة طوال اليوم.',
    contentEn: 'Rich matte formula delivering intense, vibrant color with all-day comfort and smooth velvety wear.',
    icon: LucideFileText,
  },
  {
    titleAr: 'اللمسة النهائية',
    titleEn: 'Finish',
    contentAr: 'لمسة نهائية مطفية مخملية غير لامعة تناسب الإطلالات النهارية والمسائية.',
    contentEn: 'Velvety matte non-drying finish ideal for both day and evening glam.',
    icon: LucideSparkles,
  },
  {
    titleAr: 'الثبات',
    titleEn: 'Longevity',
    contentAr: 'ثبات عالٍ يدوم حتى 8 ساعات دون الحاجة لإعادة التطبيق.',
    contentEn: 'High-wear longevity lasting up to 8 hours without regular touch-ups.',
    icon: LucideClock3,
  },
  {
    titleAr: 'المكونات',
    titleEn: 'Ingredients',
    contentAr: 'مكون غني بالزيوت الطبيعية المرطبة، خالٍ من العطور القاسية.',
    contentEn: 'Enriched with moisturizing natural botanicals and oils, free of harsh fragrances.',
    icon: LucideLeaf,
  },
  {
    titleAr: 'طريقة الاستخدام',
    titleEn: 'How to Use',
    contentAr: 'يوضع مباشرة على الشفاه، ويمكن إعادة التطبيق عند الحاجة للحصول على التغطية الكاملة.',
    contentEn: 'Apply directly to lips starting from the center outward for instant full coverage.',
    icon: LucideSparkles,
  },
];

@Component({
  selector: 'app-product-accordion',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon, LocalizeFieldPipe],
  templateUrl: './product-accordion.component.html',
  styleUrl: './product-accordion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductAccordionComponent {
  @Input() product: any;

  readonly chevronDownIcon = LucideChevronDown;
  readonly items = ACCORDION_ITEMS_DATA;

  openIndex = 0;

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? -1 : index;
  }
}
