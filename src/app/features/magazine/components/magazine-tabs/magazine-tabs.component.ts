import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

export const MAGAZINE_TABS_DATA = [
  'كل المقالات',
  'عناية بالبشرة',
  'المكياج',
  'الشعر',
  'أخبار وصيحات',
];

@Component({
  selector: 'app-magazine-tabs',
  standalone: true,
  templateUrl: './magazine-tabs.component.html',
  styleUrl: './magazine-tabs.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MagazineTabsComponent {
  @Input() activeTab = 'كل المقالات';
  @Output() tabChange = new EventEmitter<string>();

  readonly tabs = MAGAZINE_TABS_DATA;

  selectTab(tab: string): void {
    this.tabChange.emit(tab);
  }
}
