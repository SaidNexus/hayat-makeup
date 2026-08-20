import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideArrowLeft } from '@lucide/angular';

export interface LookItem {
  id: number | string;
  title: string;
  image: string;
  description?: string;
  type?: string;
}

@Component({
  selector: 'app-look-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './look-card.component.html',
  styleUrl: './look-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LookCardComponent {
  @Input({ required: true }) look!: LookItem;

  readonly arrowLeftIcon = LucideArrowLeft;
}
