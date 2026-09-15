import { Component, Input, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  LucideDynamicIcon,
  LucideArrowLeft,
  LucideMoon,
  LucideSun,
} from '@lucide/angular';
import { LocalizeFieldPipe } from '../../../../shared/pipes/localize-field.pipe';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

export interface LookItem {
  id: number | string;
  image: string;
  title: string;
  titleAr?: string;
  titleEn?: string;
  description: string;
  descriptionAr?: string;
  descriptionEn?: string;
  type: 'day' | 'night';
}

export const HOME_LOOKS: LookItem[] = [
  {
    id: 2,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248221/hayat-makeup/looks/day-look.png',
    title: 'إطلالة يومية',
    titleAr: 'إطلالة يومية',
    titleEn: 'Day Look',
    description: 'مكياج ناعم وطبيعي',
    descriptionAr: 'مكياج ناعم وطبيعي',
    descriptionEn: 'Soft and natural makeup',
    type: 'day',
  },
  {
    id: 1,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248252/hayat-makeup/looks/night-look.png',
    title: 'إطلالة سهرة',
    titleAr: 'إطلالة سهرة',
    titleEn: 'Evening Glam',
    description: 'مكياج جذاب ولامع',
    descriptionAr: 'مكياج جذاب ولامع',
    descriptionEn: 'Chic and glowing makeup',
    type: 'night',
  },
];

@Component({
  selector: 'app-look-carousel',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon, LocalizeFieldPipe, TranslatePipe],
  templateUrl: './look-carousel.component.html',
  styleUrl: './look-carousel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LookCarouselComponent {
  @Input() config?: any;
  private readonly router = inject(Router);

  readonly arrowLeftIcon = LucideArrowLeft;
  readonly moonIcon = LucideMoon;
  readonly sunIcon = LucideSun;

  readonly looks = signal<LookItem[]>(HOME_LOOKS);

  navigateToLooks(): void {
    this.router.navigateByUrl('/looks');
  }
}
