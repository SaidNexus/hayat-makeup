import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideRotateCcw,
  LucideTruck,
  LucideBadgeCheck,
  LucideIcon,
} from '@lucide/angular';

export interface CategoryFeature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

@Component({
  selector: 'app-category-service-features',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './category-service-features.component.html',
  styleUrl: './category-service-features.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryServiceFeaturesComponent {
  readonly features: CategoryFeature[] = [
    {
      id: 3,
      title: 'منتجات أصلية',
      description: '100% مضمونة',
      icon: LucideBadgeCheck,
    },
    {
      id: 2,
      title: 'توصيل سريع',
      description: 'لجميع مناطق المملكة',
      icon: LucideTruck,
    },
    {
      id: 1,
      title: 'إرجاع سهل',
      description: 'خلال 14 يوم',
      icon: LucideRotateCcw,
    },
  ];
}
