import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDiamond,
  LucideHeart,
  LucideSparkles,
  LucideIcon,
} from '@lucide/angular';
import { AboutValueCardComponent } from '../about-value-card/about-value-card.component';

export interface AboutValueItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

@Component({
  selector: 'app-about-values',
  standalone: true,
  imports: [AboutValueCardComponent],
  templateUrl: './about-values.component.html',
  styleUrl: './about-values.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutValuesComponent {
  readonly values: AboutValueItem[] = [
    {
      id: 1,
      title: 'جمال يومي أنيق',
      description: 'منتجات تجمع بين الجودة والأناقة لترافقك في كل لحظة.',
      icon: LucideSparkles,
    },
    {
      id: 2,
      title: 'مختارة بعناية',
      description: 'نختار كل منتج بعناية ليناسب احتياجاتك ويلبي توقعاتك.',
      icon: LucideDiamond,
    },
    {
      id: 3,
      title: 'منتجات أصلية',
      description: 'نضمن لك منتجات أصلية 100% من أفضل الماركات العالمية.',
      icon: LucideHeart,
    },
  ];
}
