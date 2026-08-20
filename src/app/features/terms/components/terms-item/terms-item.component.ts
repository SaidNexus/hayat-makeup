import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideChevronDown,
  LucideIcon,
} from '@lucide/angular';

@Component({
  selector: 'app-terms-item',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './terms-item.component.html',
  styleUrl: './terms-item.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsItemComponent {
  @Input({ required: true }) number!: number;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) icon!: LucideIcon;
  @Input() isOpen = false;
  @Output() toggle = new EventEmitter<void>();

  readonly chevronDownIcon = LucideChevronDown;

  onToggle(): void {
    this.toggle.emit();
  }
}
