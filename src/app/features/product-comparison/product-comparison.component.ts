import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  LucideDynamicIcon,
  LucideArrowRight,
  LucideHeart,
  LucideShare2,
  LucideStar,
  LucideX,
} from '@lucide/angular';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { FavoritesService } from '../../core/services/favorites.service';

export interface ComparisonProduct {
  id: number;
  name: string;
  type: string;
  price: string;
  rating: string;
  image: string;
  appearanceLine1: string;
  appearanceLine2: string;
  skin: string;
  size: string;
  features: string[];
}

export const COMPARISON_PRODUCTS_DATA: ComparisonProduct[] = [
  {
    id: 1,
    name: 'فلت كفر',
    type: 'كريم أساس',
    price: '149',
    rating: '4.7',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248358/hayat-makeup/products/foundation.png',
    appearanceLine1: 'طبيعي',
    appearanceLine2: 'متوسطة – قابلة للبناء',
    skin: 'عادية – دهنية – مختلطة',
    size: '30 مل',
    features: [
      'يغطي العيوب والخطوط',
      'تركيبة خفيفة ومريحة',
      'يمنح بشرة ناعمة ومشرقة',
      'يدوم حتى 12 ساعة',
    ],
  },
  {
    id: 2,
    name: 'إيفا مات',
    type: 'أحمر شفاه مطفي',
    price: '79',
    rating: '4.8',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248360/hayat-makeup/products/lipstick.png',
    appearanceLine1: 'مات',
    appearanceLine2: 'متوسطة – عالية',
    skin: 'جميع أنواع البشرة',
    size: '4 جم',
    features: [
      'لون غني وثابت',
      'لا يسبب جفاف الشفاه',
      'يمنح مظهرًا مخمليًا',
      'تصميم أنيق وسهل الاستخدام',
    ],
  },
  {
    id: 3,
    name: 'بيوتي جلو',
    type: 'باليت ظلال عيون',
    price: '129',
    rating: '4.6',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248356/hayat-makeup/products/eye-shadow.png',
    appearanceLine1: 'مات ولمّاع',
    appearanceLine2: '-',
    skin: 'جميع أنواع البشرة',
    size: '12 لون / 14 جم',
    features: [
      'ألوان عالية الصبغة',
      'قابلة للمزج بسهولة',
      'تدوم طوال اليوم',
      'مناسبة للمكياج النهاري والسهرات',
    ],
  },
];

@Component({
  selector: 'app-product-comparison',
  standalone: true,
  imports: [HeaderComponent, MobileBottomNavComponent, LucideDynamicIcon],
  templateUrl: './product-comparison.component.html',
  styleUrl: './product-comparison.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComparisonComponent {
  private readonly router = inject(Router);
  private readonly favoritesService = inject(FavoritesService);

  readonly arrowRightIcon = LucideArrowRight;
  readonly shareIcon = LucideShare2;
  readonly heartIcon = LucideHeart;
  readonly starIcon = LucideStar;
  readonly xIcon = LucideX;

  readonly comparisonProducts = signal<ComparisonProduct[]>(
    COMPARISON_PRODUCTS_DATA
  );

  handleBack(): void {
    history.back();
  }

  handleShare(): void {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
  }

  handleRemove(id: number): void {
    this.comparisonProducts.update((prev) => prev.filter((p) => p.id !== id));
  }

  handleAddAllToWishlist(): void {
    this.comparisonProducts().forEach((product) => {
      this.favoritesService.toggleFavorite(product);
    });
  }

  getStarFill(ratingStr: string, starIndex: number): string {
    return starIndex < Math.floor(Number(ratingStr)) ? '#C91F72' : 'none';
  }
}
