import { Component, EventEmitter, Input, Output, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import {
  LatestArticleCardComponent,
  LatestArticle,
} from '../../../../shared/components/cards/latest-article-card/latest-article-card.component';
import { LucideDynamicIcon, LucideChevronLeft } from '@lucide/angular';

export const LATEST_ARTICLES_DATA: LatestArticle[] = [
  {
    id: 1,
    category: 'عناية بالبشرة',
    title: '5 نصائح لبشرة نضرة في فصل الصيف',
    description:
      'تعرفي على أهم النصائح لحماية بشرتك من أشعة الشمس والحفاظ على نضارتها.',
    date: '25 مايو 2024',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248276/hayat-makeup/magazine/skincare-summer.jpg',
  },
  {
    id: 2,
    category: 'المكياج',
    title: 'إطلالات مكياج ناعمة للسهرات',
    description: 'أفكار لإطلالات أنيقة تناسب كل المناسبات وتبرز جمالك الطبيعي.',
    date: '23 مايو 2024',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248275/hayat-makeup/magazine/makeup-evening.jpg',
  },
  {
    id: 3,
    category: 'أخبار وصيحات',
    title: 'أحدث ألوان أحمر الشفاه لصيف 2024',
    description: 'اكتشفي الألوان الرائجة هذا الموسم واختاري درجتك المفضلة.',
    date: '19 مايو 2024',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248273/hayat-makeup/magazine/lipstick-trends.jpg',
  },
  {
    id: 4,
    category: 'الشعر',
    title: 'روتين الشعر اللامع في المنزل',
    description: 'خطوات بسيطة تعيد الحيوية للشعر وتحميه من التلف اليومي.',
    date: '15 مايو 2024',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248271/hayat-makeup/magazine/featured-skin.png',
  },
];

@Component({
  selector: 'app-latest-articles',
  standalone: true,
  imports: [LatestArticleCardComponent, LucideDynamicIcon],
  templateUrl: './latest-articles.component.html',
  styleUrl: './latest-articles.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LatestArticlesComponent {
  @Input() activeTab = 'كل المقالات';
  @Output() showAll = new EventEmitter<void>();

  readonly chevronLeftIcon = LucideChevronLeft;
  readonly articles = signal<LatestArticle[]>(LATEST_ARTICLES_DATA);

  readonly visibleArticles = computed(() => {
    if (this.activeTab === 'كل المقالات') {
      return this.articles();
    }
    return this.articles().filter((a) => a.category === this.activeTab);
  });

  onShowAll(): void {
    this.showAll.emit();
  }
}
