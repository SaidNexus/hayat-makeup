import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideLoader2, LucideSearch } from '@lucide/angular';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-track-order-form',
  standalone: true,
  imports: [LucideDynamicIcon, TranslatePipe],
  templateUrl: './track-order-form.component.html',
  styleUrl: './track-order-form.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrackOrderFormComponent {
  @Input() value = '';
  @Input() loading = false;
  @Output() valueChange = new EventEmitter<string>();
  @Output() submitForm = new EventEmitter<void>();

  readonly searchIcon = LucideSearch;
  readonly loaderIcon = LucideLoader2;

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitForm.emit();
  }
}
