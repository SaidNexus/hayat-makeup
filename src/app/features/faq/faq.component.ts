import { Component, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { FaqSearchComponent } from './components/faq-search/faq-search.component';
import { FaqListComponent } from './components/faq-list/faq-list.component';
import { FaqSupportCardComponent } from './components/faq-support-card/faq-support-card.component';
import { FaqEntry } from './components/faq-item/faq-item.component';

export const FAQ_ITEMS_DATA: FaqEntry[] = [
  {
    id: 1,
    question: 'كيف أختار الدرجة المناسبة؟',
    answer:
      'نصيحتنا أن تبدئي بتجربة العينات قبل الشراء. يمكنك استخدام أداة تحديد درجة البشرة في صفحة المنتج، أو التواصل معنا لمساعدتك في اختيار الدرجة الأنسب لبشرتك.',
  },
  {
    id: 2,
    question: 'هل يمكن الاستبدال؟',
    answer:
      'نعم، يمكنك استبدال المنتج خلال 14 يومًا من تاريخ الاستلام بشرط أن يكون المنتج غير مستخدم وبحالته الأصلية مع العبوة الكاملة.',
  },
  {
    id: 3,
    question: 'كم مدة التوصيل؟',
    answer:
      'مدة التوصيل داخل المدن الرئيسية من 1 إلى 3 أيام عمل، وباقي المدن من 3 إلى 5 أيام عمل. ستصلك رسالة بنفس اللحظة التي يتم فيها شحن طلبك.',
  },
  {
    id: 4,
    question: 'هل الدفع عند الاستلام متوفر؟',
    answer:
      'نعم، الدفع عند الاستلام متاح لجميع الطلبات إضافة إلى خيارات الدفع الإلكتروني عبر بطاقات الائتمان والمدى وApple Pay.',
  },
  {
    id: 5,
    question: 'كيف أحافظ على منتجاتي؟',
    answer:
      'احفظي منتجاتك في مكان بارد وجاف بعيدًا عن أشعة الشمس المباشرة، وأغلقي العبوات جيدًا بعد كل استخدام، وتجنبي تخزينها في الحمام حيث الرطوبة العالية.',
  },
  {
    id: 6,
    question: 'كيف يمكنني تتبع طلبي؟',
    answer:
      'يمكنك تتبع طلبك بسهولة من خلال صفحة تتبع الطلب بإدخال رقم الطلب، وستظهر لك حالة الطلب الحالية وجميع خطوات الشحن بالتفصيل.',
  },
  {
    id: 7,
    question: 'هل المنتجات أصلية؟',
    answer:
      'جميع منتجاتنا أصلية 100% ومستوردة من موردين معتمدين، نضمن لك الجودة والأصالة في كل منتج نقدمه.',
  },
];

function normalizeArabic(value: string): string {
  return value
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/ى/g, 'ي')
    .toLowerCase();
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    FaqSearchComponent,
    FaqListComponent,
    FaqSupportCardComponent,
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  query = signal<string>('');
  openId = signal<number | null>(null);

  readonly allItems = signal<FaqEntry[]>(FAQ_ITEMS_DATA);

  readonly filteredItems = computed(() => {
    const q = normalizeArabic(this.query());
    if (!q) return this.allItems();
    return this.allItems().filter((item) => {
      const haystack = normalizeArabic(`${item.question} ${item.answer}`);
      return haystack.includes(q);
    });
  });

  handleToggle(id: number): void {
    this.openId.update((current) => (current === id ? null : id));
  }
}
