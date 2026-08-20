import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideChevronLeft,
  LucideIcon,
} from '@lucide/angular';

@Component({
  selector: 'app-account-menu-item',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './account-menu-item.component.html',
  styleUrl: './account-menu-item.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountMenuItemComponent {
  @Input() icon?: LucideIcon;
  @Input({ required: true }) label!: string;
  @Input() badge?: number;
  @Output() itemClick = new EventEmitter<void>();

  readonly chevronLeftIcon = LucideChevronLeft;

  onClick(): void {
    this.itemClick.emit();
  }
}
