import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

export interface ColorFilterItem {
  id: string;
  label: string;
  color: string;
}

export const COLOR_FILTERS_DATA: ColorFilterItem[] = [
  { id: 'pink', label: 'وردي', color: '#D93678' },
  { id: 'red', label: 'أحمر', color: '#E5232D' },
  { id: 'nude', label: 'نيود', color: '#E4C1B4' },
  { id: 'brown', label: 'بني', color: '#91512F' },
  { id: 'purple', label: 'بنفسجي', color: '#8A3DA7' },
  { id: 'gold', label: 'ذهبي', color: '#D5A22F' },
];

@Component({
  selector: 'app-color-filter-tabs',
  standalone: true,
  templateUrl: './color-filter-tabs.component.html',
  styleUrl: './color-filter-tabs.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorFilterTabsComponent {
  @Input() activeColor = 'pink';
  @Output() colorChange = new EventEmitter<string>();

  readonly colors = COLOR_FILTERS_DATA;

  selectColor(id: string): void {
    this.colorChange.emit(id);
  }
}
