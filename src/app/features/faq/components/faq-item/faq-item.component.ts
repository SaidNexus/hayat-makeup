import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideChevronDown } from '@lucide/angular';

export interface FaqEntry {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-item',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './faq-item.component.html',
  styleUrl: './faq-item.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqItemComponent {
  @Input({ required: true }) faq!: FaqEntry;
  @Input() open = false;
  @Output() toggle = new EventEmitter<number>();

  readonly chevronDownIcon = LucideChevronDown;

  onToggle(): void {
    this.toggle.emit(this.faq.id);
  }
}
