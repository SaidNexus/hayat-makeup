import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProductOptionsComponent } from './components/product-options/product-options.component';
import { ProductActionsComponent } from './components/product-actions/product-actions.component';
import { ProductAccordionComponent } from './components/product-accordion/product-accordion.component';
import {
  RelatedProductCardComponent,
  RelatedProduct,
} from './components/related-product-card/related-product-card.component';
import { ALL_PRODUCTS_DATA, ProductItem } from '../all-products/all-products.component';

export const RELATED_PRODUCTS_MOCK: RelatedProduct[] = [
  {
    id: 1,
    name: 'ملمع شفاه جلو سيك',
    price: 59,
    rating: 4.8,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248089/hayat-makeup/best-seller/lipstick.png',
  },
  {
    id: 2,
    name: 'كريم أساس بيرفكت كفر',
    price: 105,
    rating: 4.7,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248087/hayat-makeup/best-seller/foundation.png',
  },
  {
    id: 3,
    name: 'باليت ظلال 12 لون',
    price: 129,
    rating: 4.9,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248084/hayat-makeup/best-seller/bullet-shadow.png',
  },
  {
    id: 4,
    name: 'ماسكارا فوليوم أند ليفت',
    price: 65,
    rating: 4.6,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248091/hayat-makeup/best-seller/mascara.png',
  },
];

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    ProductGalleryComponent,
    ProductInfoComponent,
    ProductOptionsComponent,
    ProductActionsComponent,
    ProductAccordionComponent,
    RelatedProductCardComponent,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  quantity = signal<number>(1);
  product = signal<ProductItem | any>(null);
  readonly relatedProducts = signal<RelatedProduct[]>(RELATED_PRODUCTS_MOCK);

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      const found = ALL_PRODUCTS_DATA.find((p: ProductItem) => String(p.id) === String(id));
      this.product.set(
        found || {
          id: id || 1,
          name: 'أحمر شفاه مطفي',
          description: 'درجة 07 - وردي فوشيا',
          price: 89,
          oldPrice: 129,
          discount: 31,
          rating: 4.9,
          reviews: 98,
          image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248360/hayat-makeup/products/lipstick.png',
        }
      );
    });
  }

  onQuantityChange(q: number): void {
    this.quantity.set(q);
  }

  onSelectRelated(id: number | string): void {
    this.router.navigateByUrl(`/product/${id}`);
  }
}
