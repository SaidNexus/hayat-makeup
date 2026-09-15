import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideDynamicIcon, LucideSearch, LucideX } from '@lucide/angular';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { LocalizeFieldPipe } from '../../../../shared/pipes/localize-field.pipe';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon, TranslatePipe, LocalizeFieldPipe],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();

  readonly searchIcon = LucideSearch;
  readonly xIcon = LucideX;

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }

  onClear(): void {
    this.valueChange.emit('');
  }
}
