import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

export const REVIEW_FILTERS_DATA = [
  'الكل (1,256)',
  'مع صور (632)',
  '5 نجوم (982)',
  '4 نجوم (189)',
  'الفلترة',
];

@Component({
  selector: 'app-review-filters',
  standalone: true,
  templateUrl: './review-filters.component.html',
  styleUrl: './review-filters.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewFiltersComponent {
  @Input() activeFilter = 'الكل (1,256)';
  @Output() filterChange = new EventEmitter<string>();

  readonly filters = REVIEW_FILTERS_DATA;

  onSelect(filter: string): void {
    this.filterChange.emit(filter);
  }
}
