import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  MostReadCardComponent,
  MostReadArticle,
} from '../most-read-card/most-read-card.component';
import { LucideChevronLeft, LucideChevronRight } from '@lucide/angular';

export const MOST_READ_ARTICLES_DATA: MostReadArticle[] = [
  {
    id: 2,
    title: 'الحواجب المثالية',
    description: 'شكل حاجبك حسب وجه',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248190/hayat-makeup/guide/lashes.png',
    icon: LucideChevronLeft,
  },
  {
    id: 1,
    title: 'أحمر شفاه يدوم',
    description: 'نصائح لثبات أحمر الشفاه',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248195/hayat-makeup/guide/lips.png',
    icon: LucideChevronRight,
  },
];

@Component({
  selector: 'app-most-read',
  standalone: true,
  imports: [MostReadCardComponent],
  templateUrl: './most-read.component.html',
  styleUrl: './most-read.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MostReadComponent {
  readonly articles = MOST_READ_ARTICLES_DATA;
}
