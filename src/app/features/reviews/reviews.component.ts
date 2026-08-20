import { Component, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { ReviewsHeaderComponent } from './components/reviews-header/reviews-header.component';
import { RatingSummaryComponent } from './components/rating-summary/rating-summary.component';
import { ReviewFiltersComponent } from './components/review-filters/review-filters.component';
import {
  ReviewCardComponent,
  ReviewItem,
} from '../../shared/components/cards/review-card/review-card.component';

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 1,
    name: 'سارة العتيبي',
    avatar: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248077/hayat-makeup/avatar.png',
    verified: true,
    skinType: 'مختلطة',
    rating: 5,
    productId: 2,
    productName: 'فاونديشن هيات مات بيرفكت',
    productImage: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248358/hayat-makeup/products/foundation.png',
    reviewImage: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248358/hayat-makeup/products/foundation.png',
    date: '12 مايو 2024',
    helpful: 24,
    text: 'تغطية رائعة وخفيفة على البشرة، ما يسد المسام ويعطي لمعة طبيعية تدوم طوال اليوم. أنصح فيه!',
  },
  {
    id: 2,
    name: 'نورة خالد',
    avatar: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248077/hayat-makeup/avatar.png',
    verified: true,
    skinType: 'دهنية',
    rating: 4.6,
    productId: 3,
    productName: 'ماسكارا هيات لرفع وتكثيف الرموش',
    productImage: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248362/hayat-makeup/products/maskara.png',
    reviewImage: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248362/hayat-makeup/products/maskara.png',
    date: '5 مايو 2024',
    helpful: 11,
    text: 'أفضل ماسكارا جربتها! ما تتكتل وتعطي طول وكثافة بشكل طبيعي. ما أستغني عنها.',
  },
];

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    ReviewsHeaderComponent,
    RatingSummaryComponent,
    ReviewFiltersComponent,
    ReviewCardComponent,
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {
  activeFilter = signal<string>('الكل (1,256)');
  readonly allReviews = signal<ReviewItem[]>(REVIEWS_DATA);

  readonly filteredReviews = computed(() => {
    const filter = this.activeFilter();
    return this.allReviews().filter((review) => {
      if (filter.startsWith('مع صور')) {
        return Boolean(review.reviewImage);
      }
      if (filter.startsWith('5 نجوم')) {
        return review.rating >= 5;
      }
      if (filter.startsWith('4 نجوم')) {
        return review.rating >= 4 && review.rating < 5;
      }
      return true;
    });
  });

  onFilterChange(filter: string): void {
    this.activeFilter.set(filter);
  }
}
