import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideSearchX } from '@lucide/angular';

@Component({
  selector: 'app-search-empty-state',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './search-empty-state.component.html',
  styleUrl: './search-empty-state.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchEmptyStateComponent {
  @Input() query = '';
  @Output() clearQuery = new EventEmitter<void>();
  @Output() browseProducts = new EventEmitter<void>();

  readonly searchXIcon = LucideSearchX;

  onBrowse(): void {
    this.browseProducts.emit();
  }

  onClear(): void {
    this.clearQuery.emit();
  }
}
