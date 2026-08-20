import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideIcon } from '@lucide/angular';

@Component({
  selector: 'app-about-value-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './about-value-card.component.html',
  styleUrl: './about-value-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutValueCardComponent {
  @Input({ required: true }) icon!: LucideIcon;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
}
