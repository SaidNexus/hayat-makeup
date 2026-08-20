import { Component, EventEmitter, Input, Output, signal, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideChevronDown,
  LucideSlidersHorizontal,
} from '@lucide/angular';

export const FILTER_OPTIONS = [
  'السعر',
  'النوع',
  'الدرجة',
  'اللمسة',
  'التقييم',
  'ترتيب',
];

@Component({
  selector: 'app-products-filters',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './products-filters.component.html',
  styleUrl: './products-filters.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsFiltersComponent {
  @Input() active: string | null = null;
  @Output() filterChange = new EventEmitter<string | null>();

  readonly filters = FILTER_OPTIONS;
  readonly filterActive = signal<boolean>(false);

  readonly chevronDownIcon = LucideChevronDown;
  readonly slidersHorizontalIcon = LucideSlidersHorizontal;

  onFilterClick(filter: string): void {
    const isSelected = this.active === filter;
    this.filterChange.emit(isSelected ? null : filter);
    this.filterActive.set(false);
  }

  onFilterButtonClick(): void {
    this.filterActive.update((prev) => !prev);
    this.filterChange.emit(null);
  }
}
