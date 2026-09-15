import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideDynamicIcon, LucideSearchX } from '@lucide/angular';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { LocalizeFieldPipe } from '../../../../shared/pipes/localize-field.pipe';

@Component({
  selector: 'app-search-empty-state',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon, TranslatePipe, LocalizeFieldPipe],
  templateUrl: './search-empty-state.component.html',
  styleUrl: './search-empty-state.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchEmptyStateComponent {
  @Input() query = '';
  @Output() clearQuery = new EventEmitter<void>();
  @Output() browseProducts = new EventEmitter<void>();

  readonly searchXIcon = LucideSearchX;

  onClear(): void {
    this.clearQuery.emit();
  }

  onBrowse(): void {
    this.browseProducts.emit();
  }
}
