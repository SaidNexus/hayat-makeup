import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { OffersCardComponent, OfferItem } from '../offers-card/offers-card.component';

export const FEATURED_OFFERS_DATA: OfferItem[] = [
  {
    id: 1,
    title: 'عطور مختارة',
    discount: 20,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248318/hayat-makeup/offers/featured-perfume.png',
  },
  {
    id: 2,
    title: 'خصم على المكياج',
    discount: 30,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248316/hayat-makeup/offers/featured-makeup.png',
  },
  {
    id: 3,
    title: 'خصم على منتجات العناية',
    discount: 25,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248321/hayat-makeup/offers/featured-skincare.png',
  },
];

@Component({
  selector: 'app-featured-offers',
  standalone: true,
  imports: [OffersCardComponent],
  templateUrl: './featured-offers.component.html',
  styleUrl: './featured-offers.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedOffersComponent {
  readonly offers = signal<OfferItem[]>(FEATURED_OFFERS_DATA);
}
