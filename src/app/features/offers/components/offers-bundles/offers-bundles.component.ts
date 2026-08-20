import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { OffersBundleCardComponent, OfferBundle } from '../offers-bundle-card/offers-bundle-card.component';

export const OFFER_BUNDLES_DATA: OfferBundle[] = [
  {
    id: 1,
    name: 'باقة العناية الفاخرة',
    description: 'عناية متكاملة',
    price: 199,
    oldPrice: 329,
    saving: 130,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248310/hayat-makeup/offers/bundle-care.png',
  },
  {
    id: 2,
    name: 'باقة الجمال اليومية',
    description: 'عطر + مكياج',
    price: 159,
    oldPrice: 279,
    saving: 120,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248307/hayat-makeup/offers/bundle-beauty.png',
  },
  {
    id: 3,
    name: 'باقة الإطلالة الكاملة',
    description: 'مكياج + عناية + عطر',
    price: 219,
    oldPrice: 399,
    saving: 180,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248312/hayat-makeup/offers/bundle-complete.png',
    featured: true,
  },
];

@Component({
  selector: 'app-offers-bundles',
  standalone: true,
  imports: [OffersBundleCardComponent],
  templateUrl: './offers-bundles.component.html',
  styleUrl: './offers-bundles.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OffersBundlesComponent {
  readonly bundles = signal<OfferBundle[]>(OFFER_BUNDLES_DATA);
}
