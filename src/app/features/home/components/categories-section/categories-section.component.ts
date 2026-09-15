import { Component, Input, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CategoryCircleComponent } from '../../../../shared/components/home/category-circle/category-circle.component';
import { LocalizeFieldPipe } from '../../../../shared/pipes/localize-field.pipe';

export interface HomeCategory {
  name: string;
  nameAr?: string;
  nameEn?: string;
  image: string;
}

export const HOME_CATEGORIES: HomeCategory[] = [
  {
    name: 'المكياج',
    nameAr: 'المكياج',
    nameEn: 'Makeup',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/f_auto,q_auto,w_300/v1787248101/hayat-makeup/category-eyes.png',
  },
  {
    name: 'العناية بالبشرة',
    nameAr: 'العناية بالبشرة',
    nameEn: 'Skincare',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/f_auto,q_auto,w_300/v1787248125/hayat-makeup/category-skin.png',
  },
  {
    name: 'العطور',
    nameAr: 'العطور',
    nameEn: 'Perfumes',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/f_auto,q_auto,w_300/v1787248119/hayat-makeup/category-perfume.png',
  },
  {
    name: 'الأدوات',
    nameAr: 'الأدوات',
    nameEn: 'Tools & Brushes',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/f_auto,q_auto,w_300/v1787248133/hayat-makeup/category-tools.png',
  },
];

@Component({
  selector: 'app-categories-section',
  standalone: true,
  imports: [CommonModule, CategoryCircleComponent, LocalizeFieldPipe],
  templateUrl: './categories-section.component.html',
  styleUrl: './categories-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesSectionComponent {
  @Input() config?: any;
  private readonly router = inject(Router);

  get categoriesList(): HomeCategory[] {
    if (this.config?.categories && this.config.categories.length > 0) {
      return this.config.categories;
    }
    return HOME_CATEGORIES;
  }

  onCategorySelect(category: HomeCategory): void {
    const name = category.nameAr || category.name;
    this.router.navigate(['/products'], { queryParams: { category: name } });
  }
}
