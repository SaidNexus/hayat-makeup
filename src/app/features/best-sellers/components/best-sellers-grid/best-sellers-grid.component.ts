import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  BestSellerCardComponent,
  BestSellerProduct,
} from '../best-seller-card/best-seller-card.component';

export const BEST_SELLER_PAGE_PRODUCTS: BestSellerProduct[] = [
  {
    id: 1,
    rank: 1,
    name: 'أحمر شفاه مات رويال',
    variant: 'روز غامق',
    price: 75,
    rating: 4.8,
    reviews: '1,250',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248089/hayat-makeup/best-seller/lipstick.png',
  },
  {
    id: 2,
    rank: 2,
    name: 'كريم أساس بيرفكت كفر',
    variant: 'بيج طبيعي',
    price: 105,
    rating: 4.7,
    reviews: '980',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248087/hayat-makeup/best-seller/foundation.png',
  },
  {
    id: 3,
    rank: 3,
    name: 'باليت ظلال 12 لون',
    variant: 'روز كلاسيك',
    price: 129,
    rating: 4.9,
    reviews: '860',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248084/hayat-makeup/best-seller/bullet-shadow.png',
  },
  {
    id: 5,
    rank: 5,
    name: 'مجموعة فرش مكياج 5 قطع',
    variant: 'احترافية',
    price: 115,
    rating: 4.9,
    reviews: '620',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248081/hayat-makeup/best-seller/blushs.png',
  },
  {
    id: 4,
    rank: 4,
    name: 'ماسكارا فوليوم أند ليفت',
    variant: 'أسود كثيف',
    price: 65,
    rating: 4.6,
    reviews: '750',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248091/hayat-makeup/best-seller/mascara.png',
  },
];

@Component({
  selector: 'app-best-sellers-grid',
  standalone: true,
  imports: [BestSellerCardComponent],
  templateUrl: './best-sellers-grid.component.html',
  styleUrl: './best-sellers-grid.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestSellersGridComponent {
  private readonly router = inject(Router);

  readonly displayProducts = signal<BestSellerProduct[]>(
    BEST_SELLER_PAGE_PRODUCTS
  );

  onProductSelect(id: number | string): void {
    this.router.navigateByUrl(`/product/${id}`);
  }
}
