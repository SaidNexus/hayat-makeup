import { Component, Input, ChangeDetectionStrategy, computed } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideChevronDown,
  LucideClock3,
  LucideFileText,
  LucideLeaf,
  LucideSparkles,
  LucideIcon,
} from '@lucide/angular';

export interface AccordionItem {
  title: string;
  icon: LucideIcon;
}

export const PRODUCT_ACCORDION_CONTENT: Record<string, string> = {
  الوصف:
    'أحمر شفاه مطفي بتركيبة غنية يمنحك لوناً كثيفاً من أول تمريرة مع نعومة وراحة طوال اليوم.',
  'اللمسة النهائية':
    'لمسة نهائية مطفية مخملية غير لامعة تناسب الإطلالات النهارية والمسائية.',
  الثبات: 'ثبات عالٍ يدوم حتى 8 ساعات دون الحاجة لإعادة التطبيق.',
  المكونات: 'مكون غني بالزيوت الطبيعية المرطبة، خالٍ من العطور القاسية.',
  'طريقة الاستخدام':
    'يوضع مباشرة على الشفاه، ويمكن إعادة التطبيق عند الحاجة للحصول على التغطية الكاملة.',
};

@Component({
  selector: 'app-product-accordion',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './product-accordion.component.html',
  styleUrl: './product-accordion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductAccordionComponent {
  @Input() product: any;

  readonly chevronDownIcon = LucideChevronDown;

  readonly items: AccordionItem[] = [
    { title: 'الوصف', icon: LucideFileText },
    { title: 'اللمسة النهائية', icon: LucideSparkles },
    { title: 'الثبات', icon: LucideClock3 },
    { title: 'المكونات', icon: LucideLeaf },
    { title: 'طريقة الاستخدام', icon: LucideSparkles },
  ];

  readonly accordionList = computed(() => {
    return this.items.map((item) => ({
      ...item,
      content: this.getContent(item.title),
    }));
  });

  openIndex = 0;

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? -1 : index;
  }

  getContent(title: string): string {
    if (title === 'الوصف' && this.product?.description) {
      return `${this.product.name} - ${this.product.description}.`;
    }
    return PRODUCT_ACCORDION_CONTENT[title] || '';
  }
}
