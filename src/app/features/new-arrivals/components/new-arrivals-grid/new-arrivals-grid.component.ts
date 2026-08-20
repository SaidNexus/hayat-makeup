import { Component, Input, computed, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  NewArrivalProductCardComponent,
  NewArrivalProduct,
} from '../new-arrival-product-card/new-arrival-product-card.component';

export const NEW_ARRIVAL_PRODUCTS_DATA: NewArrivalProduct[] = [
  {
    id: 1,
    name: 'ملمع شفاه جلو سيك',
    brand: 'حياة ميك أب',
    price: 59,
    rating: 4.8,
    reviews: 132,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248289/hayat-makeup/new-arrivals/lipstick.png',
    category: 'المكياج',
  },
  {
    id: 2,
    name: 'كريم أساس فلتر فينيش',
    brand: 'حياة ميك أب',
    price: 89,
    rating: 4.7,
    reviews: 98,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248283/hayat-makeup/new-arrivals/foundation.png',
    category: 'المكياج',
  },
  {
    id: 3,
    name: 'باليت شادو روز فيلفت',
    brand: 'حياة ميك أب',
    price: 129,
    rating: 4.9,
    reviews: 76,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248296/hayat-makeup/new-arrivals/shadow.png',
    category: 'المكياج',
  },
  {
    id: 4,
    name: 'ماسكارا حجم وكثافة',
    brand: 'حياة ميك أب',
    price: 49,
    rating: 4.6,
    reviews: 111,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248292/hayat-makeup/new-arrivals/mascara.png',
    category: 'المكياج',
  },
  {
    id: 5,
    name: 'كريم ترطيب هيدرا جلو',
    brand: 'حياة ميك أب',
    price: 79,
    rating: 4.7,
    reviews: 85,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248286/hayat-makeup/new-arrivals/glowCream.png',
    category: 'العناية بالبشرة',
  },
  {
    id: 6,
    name: 'أحمر خدود سائل ناتشورال',
    brand: 'حياة ميك أب',
    price: 65,
    rating: 4.8,
    reviews: 64,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248281/hayat-makeup/new-arrivals/blushs.png',
    category: 'المكياج',
  },
];

@Component({
  selector: 'app-new-arrivals-grid',
  standalone: true,
  imports: [NewArrivalProductCardComponent],
  templateUrl: './new-arrivals-grid.component.html',
  styleUrl: './new-arrivals-grid.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewArrivalsGridComponent {
  @Input() filter = 'الكل';

  private readonly router = inject(Router);

  readonly products = signal<NewArrivalProduct[]>(NEW_ARRIVAL_PRODUCTS_DATA);

  readonly filteredProducts = computed(() => {
    const f = this.filter;
    if (f === 'الكل') {
      return this.products();
    }
    return this.products().filter((p) => p.category === f);
  });

  onProductSelect(id: number | string): void {
    this.router.navigateByUrl(`/product/${id}`);
  }
}
