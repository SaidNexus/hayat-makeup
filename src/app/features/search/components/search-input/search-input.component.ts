import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideSearch, LucideX } from '@lucide/angular';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [LucideDynamicIcon],
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
