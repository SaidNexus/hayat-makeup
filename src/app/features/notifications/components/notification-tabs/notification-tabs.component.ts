import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

export interface NotificationTab {
  id: string;
  label: string;
}

export const NOTIFICATION_TABS_DATA: NotificationTab[] = [
  { id: 'all', label: 'الكل' },
  { id: 'orders', label: 'الطلبات' },
  { id: 'offers', label: 'العروض' },
  { id: 'products', label: 'المنتجات' },
];

@Component({
  selector: 'app-notification-tabs',
  standalone: true,
  templateUrl: './notification-tabs.component.html',
  styleUrl: './notification-tabs.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationTabsComponent {
  @Input() activeTab = 'all';
  @Output() tabChange = new EventEmitter<string>();

  readonly tabs = NOTIFICATION_TABS_DATA;

  onSelect(id: string): void {
    this.tabChange.emit(id);
  }
}
