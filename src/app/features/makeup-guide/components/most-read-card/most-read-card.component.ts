import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideIcon } from '@lucide/angular';

export interface MostReadArticle {
  id: number | string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

@Component({
  selector: 'app-most-read-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './most-read-card.component.html',
  styleUrl: './most-read-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MostReadCardComponent {
  @Input({ required: true }) article!: MostReadArticle;
}
