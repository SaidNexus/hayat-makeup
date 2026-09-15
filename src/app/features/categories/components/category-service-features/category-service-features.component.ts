import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideDynamicIcon,
  LucideRotateCcw,
  LucideTruck,
  LucideBadgeCheck,
  LucideIcon,
} from '@lucide/angular';
import { LocalizeFieldPipe } from '../../../../shared/pipes/localize-field.pipe';

export interface CategoryFeature {
  id: number;
  title: string;
  titleAr: string;
  titleEn: string;
  description: string;
  descriptionAr: string;
  descriptionEn: string;
  icon: LucideIcon;
}

@Component({
  selector: 'app-category-service-features',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon, LocalizeFieldPipe],
  templateUrl: './category-service-features.component.html',
  styleUrl: './category-service-features.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryServiceFeaturesComponent {
  readonly features: CategoryFeature[] = [
    {
      id: 3,
      title: 'منتجات أصلية',
      titleAr: 'منتجات أصلية',
      titleEn: 'Original Products',
      description: '100% مضمونة',
      descriptionAr: '100% مضمونة',
      descriptionEn: '100% Guaranteed',
      icon: LucideBadgeCheck,
    },
    {
      id: 2,
      title: 'توصيل سريع',
      titleAr: 'توصيل سريع',
      titleEn: 'Fast Delivery',
      description: 'لجميع مناطق المملكة',
      descriptionAr: 'لجميع مناطق المملكة',
      descriptionEn: 'To all regions',
      icon: LucideTruck,
    },
    {
      id: 1,
      title: 'إرجاع سهل',
      titleAr: 'إرجاع سهل',
      titleEn: 'Easy Returns',
      description: 'خلال 14 يوم',
      descriptionAr: 'خلال 14 يوم',
      descriptionEn: 'Within 14 days',
      icon: LucideRotateCcw,
    },
  ];
}
