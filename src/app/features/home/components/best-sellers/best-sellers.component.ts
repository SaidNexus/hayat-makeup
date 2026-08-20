import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LucideDynamicIcon, LucideArrowLeft } from '@lucide/angular';
import { CartService } from '../../../../core/services/cart.service';
import { ProductCardComponent } from '../product-card/product-card.component';

export interface HomeProduct {
  id: number | string;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: string | number;
}

export const HOME_BEST_SELLERS: HomeProduct[] = [
  {
    id: 1,
    name: 'أحمر شفاه مطفي درجة 07 - وردي فوشيا',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248360/hayat-makeup/products/lipstick.png',
    price: 89,
    rating: 4.9,
    reviews: '98',
  },
  {
    id: 5,
    name: 'باليت ظلال العيون 12 لون - روز غولد',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248356/hayat-makeup/products/eye-shadow.png',
    price: 129,
    rating: 4.8,
    reviews: '124',
  },
  {
    id: 2,
    name: 'كريم أساس سائل باغط عالي - طبيعي',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248358/hayat-makeup/products/foundation.png',
    price: 119,
    rating: 4.7,
    reviews: '156',
  },
  {
    id: 4,
    name: 'ماسكارا مقاومة للماء تطويل وتكثيف',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248362/hayat-makeup/products/maskara.png',
    price: 99,
    rating: 4.9,
    reviews: '89',
  },
];

@Component({
  selector: 'app-best-sellers',
  standalone: true,
  imports: [LucideDynamicIcon, ProductCardComponent],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestSellersComponent {
  private readonly router = inject(Router);
  private readonly cartService = inject(CartService);

  readonly arrowLeftIcon = LucideArrowLeft;
  readonly products = signal<HomeProduct[]>(HOME_BEST_SELLERS);

  navigateToProducts(): void {
    this.router.navigateByUrl('/products');
  }

  onProductSelect(id: number | string): void {
    this.router.navigateByUrl(`/product/${id}`);
  }

  onAddToCart(product: HomeProduct): void {
    this.cartService.addToCart(product);
  }
}
