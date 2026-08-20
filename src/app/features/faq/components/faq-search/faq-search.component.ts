import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideSearch, LucideX } from '@lucide/angular';

@Component({
  selector: 'app-faq-search',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './faq-search.component.html',
  styleUrl: './faq-search.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqSearchComponent {
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
