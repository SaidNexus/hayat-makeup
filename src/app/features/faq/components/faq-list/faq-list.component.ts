import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideSearchX } from '@lucide/angular';
import {
  FaqItemComponent,
  FaqEntry,
} from '../faq-item/faq-item.component';

@Component({
  selector: 'app-faq-list',
  standalone: true,
  imports: [FaqItemComponent, LucideDynamicIcon],
  templateUrl: './faq-list.component.html',
  styleUrl: './faq-list.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqListComponent {
  @Input({ required: true }) items: FaqEntry[] = [];
  @Input() openId: number | null = null;
  @Output() toggle = new EventEmitter<number>();

  readonly searchXIcon = LucideSearchX;

  onToggle(id: number): void {
    this.toggle.emit(id);
  }
}
