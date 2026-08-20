import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryServiceFeaturesComponent } from './components/category-service-features/category-service-features.component';

export interface ShopCategory {
  id: string;
  title: string;
  image: string;
  description?: string;
  bgColor?: string;
}

export const SHOP_CATEGORIES: ShopCategory[] = [
  {
    id: 'eyes',
    title: 'المكياج',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248095/hayat-makeup/categories/makeup.jpg',
    description: 'كل ما تحتاجينه\nلبشرة مثالية',
    bgColor: '#FBF1EF',
  },
  {
    id: 'skin',
    title: 'العناية بالبشرة',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248097/hayat-makeup/categories/skin-care.jpg',
    description: 'كل ما تحتاجينه\nلبشرة مثالية',
    bgColor: '#FBF1EF',
  },
  {
    id: 'perfume',
    title: 'العطور',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248096/hayat-makeup/categories/perfumes.jpg',
    description: 'كل ما تحتاجينه\nلبشرة مثالية',
    bgColor: '#FBF1EF',
  },
  {
    id: 'tools',
    title: 'الأدوات',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248098/hayat-makeup/categories/tools.jpg',
    description: 'كل ما تحتاجينه\nلبشرة مثالية',
    bgColor: '#FBF1EF',
  },
];

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    CategoryCardComponent,
    CategoryServiceFeaturesComponent,
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {
  private readonly router = inject(Router);

  readonly categories = signal<ShopCategory[]>(SHOP_CATEGORIES);

  handleCategoryClick(categoryId: string): void {
    this.router.navigate(['/products'], { queryParams: { category: categoryId } });
  }
}
