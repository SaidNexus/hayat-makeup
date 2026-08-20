import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideChevronDown,
  LucideIcon,
} from '@lucide/angular';

@Component({
  selector: 'app-shipping-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './shipping-card.component.html',
  styleUrl: './shipping-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShippingCardComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) icon!: LucideIcon;

  readonly chevronDownIcon = LucideChevronDown;
}
