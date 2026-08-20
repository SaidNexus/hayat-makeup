import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideSlidersHorizontal } from '@lucide/angular';

export const NEW_ARRIVALS_FILTER_OPTIONS = [
  'الكل',
  'المكياج',
  'العناية بالبشرة',
  'الأدوات',
];

@Component({
  selector: 'app-new-arrivals-filters',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './new-arrivals-filters.component.html',
  styleUrl: './new-arrivals-filters.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewArrivalsFiltersComponent {
  @Input() active = 'الكل';
  @Output() filterChange = new EventEmitter<string>();

  readonly filters = NEW_ARRIVALS_FILTER_OPTIONS;
  readonly slidersIcon = LucideSlidersHorizontal;

  onSelect(filter: string): void {
    this.filterChange.emit(filter);
  }
}
