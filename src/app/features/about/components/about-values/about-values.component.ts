import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideDiamond,
  LucideHeart,
  LucideSparkles,
  LucideIcon,
} from '@lucide/angular';
import { AboutValueCardComponent } from '../about-value-card/about-value-card.component';
import { LocalizeFieldPipe } from '../../../../shared/pipes/localize-field.pipe';

export interface AboutValueItem {
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
  selector: 'app-about-values',
  standalone: true,
  imports: [CommonModule, AboutValueCardComponent, LocalizeFieldPipe],
  templateUrl: './about-values.component.html',
  styleUrl: './about-values.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutValuesComponent {
  readonly values: AboutValueItem[] = [
    {
      id: 1,
      title: 'جمال يومي أنيق',
      titleAr: 'جمال يومي أنيق',
      titleEn: 'Effortless Daily Glam',
      description: 'منتجات تجمع بين الجودة والأناقة لترافقك في كل لحظة.',
      descriptionAr: 'منتجات تجمع بين الجودة والأناقة لترافقك في كل لحظة.',
      descriptionEn: 'Products blending high performance and elegance for every moment.',
      icon: LucideSparkles,
    },
    {
      id: 2,
      title: 'مختارة بعناية',
      titleAr: 'مختارة بعناية',
      titleEn: 'Carefully Curated',
      description: 'نختار كل منتج بعناية ليناسب احتياجاتك ويلبي توقعاتك.',
      descriptionAr: 'نختار كل منتج بعناية ليناسب احتياجاتك ويلبي توقعاتك.',
      descriptionEn: 'Every item is handpicked to suit your beauty routine flawlessly.',
      icon: LucideDiamond,
    },
    {
      id: 3,
      title: 'منتجات أصلية',
      titleAr: 'منتجات أصلية',
      titleEn: '100% Authentic',
      description: 'نضمن لك منتجات أصلية 100% من أفضل الماركات العالمية.',
      descriptionAr: 'نضمن لك منتجات أصلية 100% من أفضل الماركات العالمية.',
      descriptionEn: 'We guarantee 100% authentic cosmetics from trusted creators.',
      icon: LucideHeart,
    },
  ];
}
