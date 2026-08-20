import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideChevronDown,
  LucideIcon,
} from '@lucide/angular';

@Component({
  selector: 'app-return-policy-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './return-policy-card.component.html',
  styleUrl: './return-policy-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReturnPolicyCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) icon!: LucideIcon;

  readonly chevronDownIcon = LucideChevronDown;
}
