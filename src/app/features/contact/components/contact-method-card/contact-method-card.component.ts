import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideIcon } from '@lucide/angular';

@Component({
  selector: 'app-contact-method-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './contact-method-card.component.html',
  styleUrl: './contact-method-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactMethodCardComponent {
  @Input({ required: true }) icon!: LucideIcon;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) value!: string;
  @Input() href?: string;
}
