import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

export interface Undertone {
  id: string;
  label: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-undertone-option',
  standalone: true,
  templateUrl: './undertone-option.component.html',
  styleUrl: './undertone-option.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UndertoneOptionComponent {
  @Input({ required: true }) tone!: Undertone;
  @Input() selected = false;
  @Output() selectUndertone = new EventEmitter<void>();

  onClick(): void {
    this.selectUndertone.emit();
  }
}
