import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryServiceFeaturesComponent } from './components/category-service-features/category-service-features.component';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { LocalizeFieldPipe } from '../../shared/pipes/localize-field.pipe';

export interface ShopCategory {
  id: string;
  title: string;
  titleAr: string;
  titleEn: string;
  image: string;
  description?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  bgColor?: string;
}

export const SHOP_CATEGORIES: ShopCategory[] = [
  {
    id: 'eyes',
    title: 'المكياج',
    titleAr: 'المكياج',
    titleEn: 'Makeup',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248095/hayat-makeup/categories/makeup.jpg',
    description: 'كل ما تحتاجينه\nلبشرة مثالية',
    descriptionAr: 'كل ما تحتاجينه\nلبشرة مثالية',
    descriptionEn: 'Everything you need\nfor flawless skin',
    bgColor: '#FBF1EF',
  },
  {
    id: 'skin',
    title: 'العناية بالبشرة',
    titleAr: 'العناية بالبشرة',
    titleEn: 'Skin Care',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248097/hayat-makeup/categories/skin-care.jpg',
    description: 'كل ما تحتاجينه\nلبشرة مثالية',
    descriptionAr: 'كل ما تحتاجينه\nلبشرة مثالية',
    descriptionEn: 'Everything you need\nfor glowing skin',
    bgColor: '#FBF1EF',
  },
  {
    id: 'perfume',
    title: 'العطور',
    titleAr: 'العطور',
    titleEn: 'Perfumes',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248096/hayat-makeup/categories/perfumes.jpg',
    description: 'كل ما تحتاجينه\nلبشرة مثالية',
    descriptionAr: 'كل ما تحتاجينه\nلبشرة مثالية',
    descriptionEn: 'Scents tailored\nfor your allure',
    bgColor: '#FBF1EF',
  },
  {
    id: 'tools',
    title: 'الأدوات',
    titleAr: 'الأدوات',
    titleEn: 'Beauty Tools',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248098/hayat-makeup/categories/tools.jpg',
    description: 'كل ما تحتاجينه\nلبشرة مثالية',
    descriptionAr: 'كل ما تحتاجينه\nلبشرة مثالية',
    descriptionEn: 'Professional tools\nfor effortless application',
    bgColor: '#FBF1EF',
  },
];

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MobileBottomNavComponent,
    CategoryCardComponent,
    CategoryServiceFeaturesComponent,
    TranslatePipe,
    LocalizeFieldPipe,
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
