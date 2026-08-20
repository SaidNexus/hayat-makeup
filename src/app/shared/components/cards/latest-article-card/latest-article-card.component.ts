import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideChevronLeft } from '@lucide/angular';

export interface LatestArticle {
  id: number | string;
  category: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

@Component({
  selector: 'app-latest-article-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './latest-article-card.component.html',
  styleUrl: './latest-article-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LatestArticleCardComponent {
  @Input({ required: true }) article!: LatestArticle;

  readonly chevronLeftIcon = LucideChevronLeft;
}
