import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideBadgeCheck,
  LucideTruck,
  LucideGift,
  LucideUndo2,
  LucideIcon,
} from '@lucide/angular';

export interface ServiceFeature {
  label: string;
  icon: LucideIcon;
}

@Component({
  selector: 'app-service-features',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './service-features.component.html',
  styleUrl: './service-features.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceFeaturesComponent {
  readonly features: ServiceFeature[] = [
    {
      label: 'منتجات أصلية',
      icon: LucideBadgeCheck,
    },
    {
      label: 'توصيل سريع',
      icon: LucideTruck,
    },
    {
      label: 'تغليف فاخر',
      icon: LucideGift,
    },
    {
      label: 'إرجاع سهل',
      icon: LucideUndo2,
    },
  ];
}
