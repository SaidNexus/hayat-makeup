import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideArrowLeft } from '@lucide/angular';

export interface FeaturedArticleData {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-featured-article',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './featured-article.component.html',
  styleUrl: './featured-article.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedArticleComponent {
  @Input({ required: true }) article!: FeaturedArticleData;

  readonly arrowLeftIcon = LucideArrowLeft;
}
