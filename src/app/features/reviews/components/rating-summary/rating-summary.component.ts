import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideStar } from '@lucide/angular';

export interface RatingDistributionItem {
  rating: number;
  percent: number;
}

export const RATING_DISTRIBUTION_DATA: RatingDistributionItem[] = [
  { rating: 5, percent: 78 },
  { rating: 4, percent: 15 },
  { rating: 3, percent: 5 },
  { rating: 2, percent: 1 },
  { rating: 1, percent: 1 },
];

@Component({
  selector: 'app-rating-summary',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './rating-summary.component.html',
  styleUrl: './rating-summary.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingSummaryComponent {
  readonly overall = '4.8';
  readonly total = '(1,256 تقييم)';
  readonly ratings = RATING_DISTRIBUTION_DATA;
  readonly starIcon = LucideStar;
}
