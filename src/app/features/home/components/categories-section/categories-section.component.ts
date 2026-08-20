import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryCircleComponent } from '../../../../shared/components/home/category-circle/category-circle.component';

export interface HomeCategory {
  name: string;
  image: string;
}

const CATEGORY_PARAM: Record<string, string> = {
  'المكياج': 'eyes',
  'العناية بالبشرة': 'skin',
  'العطور': 'perfume',
  'الأدوات': 'tools',
};

export const HOME_CATEGORIES: HomeCategory[] = [
  {
    name: 'المكياج',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248101/hayat-makeup/category-eyes.png',
  },
  {
    name: 'العناية بالبشرة',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248125/hayat-makeup/category-skin.png',
  },
  {
    name: 'العطور',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248119/hayat-makeup/category-perfume.png',
  },
  {
    name: 'الأدوات',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248133/hayat-makeup/category-tools.png',
  },
];

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CategoryCircleComponent],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesSectionComponent {
  private readonly router = inject(Router);

  readonly categories = signal<HomeCategory[]>(HOME_CATEGORIES);

  onCategorySelect(categoryName: string): void {
    const param = CATEGORY_PARAM[categoryName] || '';
    this.router.navigate(['/products'], { queryParams: { category: param } });
  }
}
