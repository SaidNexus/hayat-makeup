import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideChevronDown,
  LucideIcon,
} from '@lucide/angular';

@Component({
  selector: 'app-privacy-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './privacy-card.component.html',
  styleUrl: './privacy-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) icon!: LucideIcon;

  readonly chevronDownIcon = LucideChevronDown;
}
