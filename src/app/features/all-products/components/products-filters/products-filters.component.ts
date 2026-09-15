import { Component, EventEmitter, Input, Output, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideDynamicIcon,
  LucideChevronDown,
  LucideSlidersHorizontal,
} from '@lucide/angular';
import { LocalizeFieldPipe } from '../../../../shared/pipes/localize-field.pipe';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

export interface FilterOption {
  key: string;
  labelAr: string;
  labelEn: string;
}

export const FILTER_OPTIONS: FilterOption[] = [
  { key: 'السعر', labelAr: 'السعر', labelEn: 'Price' },
  { key: 'النوع', labelAr: 'النوع', labelEn: 'Type' },
  { key: 'الدرجة', labelAr: 'الدرجة', labelEn: 'Shade' },
  { key: 'اللمسة', labelAr: 'اللمسة', labelEn: 'Finish' },
  { key: 'التقييم', labelAr: 'التقييم', labelEn: 'Rating' },
  { key: 'ترتيب', labelAr: 'ترتيب', labelEn: 'Sort' },
];

@Component({
  selector: 'app-products-filters',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon, LocalizeFieldPipe, TranslatePipe],
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

  onFilterClick(filterKey: string): void {
    const isSelected = this.active === filterKey;
    this.filterChange.emit(isSelected ? null : filterKey);
    this.filterActive.set(false);
  }

  onFilterButtonClick(): void {
    this.filterActive.update((prev) => !prev);
    this.filterChange.emit(null);
  }
}
