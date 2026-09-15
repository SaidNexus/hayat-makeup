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
  readonly fallbackImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248221/hayat-makeup/looks/day-look.png';

  onImgError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target && target.src !== this.fallbackImage) {
      target.src = this.fallbackImage;
    }
  }
}
