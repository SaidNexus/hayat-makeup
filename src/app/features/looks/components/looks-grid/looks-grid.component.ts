import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { LookCardComponent, LookItem } from '../../../../shared/components/cards/look-card/look-card.component';

export const LOOKS_GRID_DATA: LookItem[] = [
  { id: 1, title: 'ناعم', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248256/hayat-makeup/looks/soft.png' },
  { id: 6, title: 'جامعة', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248259/hayat-makeup/looks/university.png' },
  { id: 7, title: 'عمل', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248264/hayat-makeup/looks/work.png' },
  { id: 8, title: 'يومي', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248215/hayat-makeup/looks/daily.png' },
  { id: 2, title: 'لامع', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248231/hayat-makeup/looks/glossy.png' },
  { id: 3, title: 'سموكي', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248253/hayat-makeup/looks/smoky.jpg' },
  { id: 4, title: 'سهرة', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248225/hayat-makeup/looks/evening.png' },
  { id: 5, title: 'عروس', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248210/hayat-makeup/looks/bridal.png' },
];

@Component({
  selector: 'app-looks-grid',
  standalone: true,
  imports: [LookCardComponent],
  templateUrl: './looks-grid.component.html',
  styleUrl: './looks-grid.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LooksGridComponent {
  readonly looks = signal<LookItem[]>(LOOKS_GRID_DATA);
}
