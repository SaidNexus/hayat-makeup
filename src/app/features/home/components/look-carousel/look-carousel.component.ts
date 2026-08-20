import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  LucideDynamicIcon,
  LucideArrowLeft,
  LucideMoon,
  LucideSun,
} from '@lucide/angular';

export interface LookItem {
  id: number | string;
  image: string;
  title: string;
  description: string;
  type: 'day' | 'night';
}

export const HOME_LOOKS: LookItem[] = [
  {
    id: 2,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248221/hayat-makeup/looks/day-look.png',
    title: 'إطلالة يومية',
    description: 'مكياج ناعم وطبيعي',
    type: 'day',
  },
  {
    id: 1,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248252/hayat-makeup/looks/night-look.png',
    title: 'إطلالة سهرة',
    description: 'مكياج جذاب ولامع',
    type: 'night',
  },
];

@Component({
  selector: 'app-look-carousel',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './look-carousel.component.html',
  styleUrl: './look-carousel.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LookCarouselComponent {
  private readonly router = inject(Router);

  readonly arrowLeftIcon = LucideArrowLeft;
  readonly moonIcon = LucideMoon;
  readonly sunIcon = LucideSun;

  readonly looks = signal<LookItem[]>(HOME_LOOKS);

  navigateToLooks(): void {
    this.router.navigateByUrl('/looks');
  }
}
