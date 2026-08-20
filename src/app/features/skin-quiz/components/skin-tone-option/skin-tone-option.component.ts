import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

export interface SkinTone {
  id: string;
  label: string;
  image: string;
}

const TONE_COLORS: Record<string, string> = {
  '5': '#EFD8C8',
  '4': '#E7BC94',
  '3': '#D59A68',
  '2': '#BB794D',
  '1': '#8B5735',
};

@Component({
  selector: 'app-skin-tone-option',
  standalone: true,
  templateUrl: './skin-tone-option.component.html',
  styleUrl: './skin-tone-option.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkinToneOptionComponent {
  @Input({ required: true }) tone!: SkinTone;
  @Input() selected = false;
  @Output() selectTone = new EventEmitter<void>();

  get toneColor(): string {
    return TONE_COLORS[this.tone.id] || '#DDB08D';
  }

  onClick(): void {
    this.selectTone.emit();
  }
}
