import { Component, Input, signal, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideCheckCircle2,
  LucideDroplets,
  LucideMoreHorizontal,
  LucideStar,
  LucideThumbsUp,
} from '@lucide/angular';

export interface ReviewItem {
  id: number;
  name: string;
  avatar?: string;
  verified: boolean;
  skinType: string;
  rating: number;
  productId: number;
  productName: string;
  productImage: string;
  reviewImage?: string;
  date: string;
  helpful: number;
  text: string;
  variant?: string;
}

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewCardComponent {
  get avatarInitial(): string {
    return this.review?.name ? this.review.name.charAt(0) : '';
  }
  @Input({ required: true }) review!: ReviewItem;

  readonly checkCircleIcon = LucideCheckCircle2;
  readonly dropletsIcon = LucideDroplets;
  readonly moreIcon = LucideMoreHorizontal;
  readonly starIcon = LucideStar;
  readonly thumbsUpIcon = LucideThumbsUp;

  isHelpful = signal<boolean>(false);
  helpfulOffset = signal<number>(0);

  get helpfulCount(): number {
    return this.review.helpful + this.helpfulOffset();
  }

  toggleHelpful(): void {
    if (this.isHelpful()) {
      this.isHelpful.set(false);
      this.helpfulOffset.set(0);
    } else {
      this.isHelpful.set(true);
      this.helpfulOffset.set(1);
    }
  }
}
