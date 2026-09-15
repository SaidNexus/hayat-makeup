import { Component, computed, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { AllProductsCardComponent } from '../../shared/components/cards/all-products-card/all-products-card.component';
import { ProductsFiltersComponent } from './components/products-filters/products-filters.component';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { LocalizeFieldPipe } from '../../shared/pipes/localize-field.pipe';

export interface ProductItem {
  id: number | string;
  name: string;
  nameAr?: string;
  nameEn?: string;
  description: string;
  descriptionAr?: string;
  descriptionEn?: string;
  price: number;
  oldPrice?: number | null;
  discount?: number;
  rating: number | string;
  reviews: number | string;
  reviewsCount?: number;
  image: string;
  images?: string[];
  category: string;
  variants?: any[];
  stock?: number;
}

const CATEGORY_MAP: Record<string, string> = {
  eyes: 'مكياج',
  face: 'مكياج',
  lips: 'مكياج',
  tools: 'أدوات',
  perfume: 'عطور',
  skin: 'العناية بالبشرة',
};

const SORT_MAP: Record<string, string> = {
  'السعر': 'price',
  'النوع': 'category',
  'التقييم': 'rating',
  'ترتيب': 'name',
};

export const ALL_PRODUCTS_DATA: ProductItem[] = [
  {
    id: 1,
    name: 'أحمر شفاه مطفي',
    nameAr: 'أحمر شفاه مطفي',
    nameEn: 'Matte Lipstick',
    description: 'درجة 07 - وردي فوشيا',
    descriptionAr: 'درجة 07 - وردي فوشيا',
    descriptionEn: 'Shade 07 - Fuchsia Pink',
    price: 89,
    oldPrice: 129,
    discount: 31,
    rating: 4.9,
    reviews: '98',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248360/hayat-makeup/products/lipstick.png',
    category: 'مكياج',
  },
  {
    id: 2,
    name: 'كريم أساس سائل',
    nameAr: 'كريم أساس سائل',
    nameEn: 'Liquid Foundation',
    description: 'تغطية عالية - مظهر طبيعي',
    descriptionAr: 'تغطية عالية - مظهر طبيعي',
    descriptionEn: 'High Coverage - Natural Finish',
    price: 119,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: '156',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248358/hayat-makeup/products/foundation.png',
    category: 'مكياج',
  },
  {
    id: 3,
    name: 'لوحة ظلال العيون',
    nameAr: 'لوحة ظلال العيون',
    nameEn: 'Eyeshadow Palette',
    description: '12 لون متنوع وناعم',
    descriptionAr: '12 لون متنوع وناعم',
    descriptionEn: '12 versatile shades',
    price: 139,
    oldPrice: 169,
    discount: 18,
    rating: 4.8,
    reviews: '142',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248356/hayat-makeup/products/eye-shadow.png',
    category: 'مكياج',
  },
  {
    id: 4,
    name: 'ماسكارا مقاومة للماء',
    nameAr: 'ماسكارا مقاومة للماء',
    nameEn: 'Waterproof Mascara',
    description: 'تطويل وتكثيف فوري',
    descriptionAr: 'تطويل وتكثيف فوري',
    descriptionEn: 'Instant volume and length',
    price: 99,
    oldPrice: null,
    discount: 0,
    rating: 4.9,
    reviews: '89',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248362/hayat-makeup/products/maskara.png',
    category: 'مكياج',
  },
  {
    id: 5,
    name: 'باليت ظلال العيون روز',
    nameAr: 'باليت ظلال العيون روز',
    nameEn: 'Rose Gold Eyeshadow Palette',
    description: 'روز غولد - 12 لون',
    descriptionAr: 'روز غولد - 12 لون',
    descriptionEn: 'Rose Gold - 12 shades',
    price: 129,
    oldPrice: null,
    discount: 0,
    rating: 4.8,
    reviews: '124',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248356/hayat-makeup/products/eye-shadow.png',
    category: 'مكياج',
  },
  {
    id: 6,
    name: 'مجموعة فرش المكياج',
    nameAr: 'مجموعة فرش المكياج',
    nameEn: 'Makeup Brush Set',
    description: '6 قطع - احترافية فائقة النعومة',
    descriptionAr: '6 قطع - احترافية فائقة النعومة',
    descriptionEn: '6 pcs professional ultra-soft',
    price: 109,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: '102',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248356/hayat-makeup/products/eye-shadow.png',
    category: 'أدوات',
  },
  {
    id: 7,
    name: 'أحمر شفاه مطفي مخملي',
    nameAr: 'أحمر شفاه مطفي مخملي',
    nameEn: 'Velvet Matte Lipstick',
    description: 'درجة 07 - وردي فوشيا',
    descriptionAr: 'درجة 07 - وردي فوشيا',
    descriptionEn: 'Shade 07 - Fuchsia Pink',
    price: 89,
    oldPrice: 129,
    discount: 31,
    rating: 4.9,
    reviews: '98',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248360/hayat-makeup/products/lipstick.png',
    category: 'مكياج',
  },
  {
    id: 8,
    name: 'كريم أساس سائل ناتشورال',
    nameAr: 'كريم أساس سائل ناتشورال',
    nameEn: 'Natural Liquid Foundation',
    description: 'تغطية متوازنة تدوم طويلاً',
    descriptionAr: 'تغطية متوازنة تدوم طويلاً',
    descriptionEn: 'Balanced long-lasting coverage',
    price: 119,
    oldPrice: null,
    discount: 0,
    rating: 4.7,
    reviews: '156',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248358/hayat-makeup/products/foundation.png',
    category: 'مكياج',
  },
];

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MobileBottomNavComponent,
    AllProductsCardComponent,
    ProductsFiltersComponent,
    TranslatePipe,
    LocalizeFieldPipe,
  ],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllProductsComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly products = signal<ProductItem[]>(ALL_PRODUCTS_DATA);
  readonly selectedFilter = signal<string | null>(null);
  readonly categoryParam = signal<string | null>(null);

  readonly visibleProducts = computed(() => {
    let list = [...this.products()];
    const cat = this.categoryParam();
    const catKey = (cat ? CATEGORY_MAP[cat] || cat : null);
    const filter = this.selectedFilter();
    const sortKey = filter ? SORT_MAP[filter] : null;

    if (catKey) {
      list = list.filter((p) => p.category === catKey);
    }

    if (sortKey === 'price') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortKey === 'rating') {
      list.sort((a, b) => Number(b.rating) - Number(a.rating));
    } else if (sortKey === 'category') {
      list.sort((a, b) =>
        String(a.category).localeCompare(String(b.category), 'ar')
      );
    } else if (sortKey === 'name') {
      list.sort((a, b) =>
        String(a.name).localeCompare(String(b.name), 'ar')
      );
    }

    return list;
  });

  constructor() {
    this.route.queryParams.subscribe((params) => {
      this.categoryParam.set(params['category'] || null);
    });
  }

  onFilterChange(filter: string | null): void {
    this.selectedFilter.set(filter);
  }

  onProductSelect(id: number | string): void {
    this.router.navigateByUrl(`/product/${id}`);
  }
}
