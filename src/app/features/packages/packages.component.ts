import { Component, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import {
  FeaturedPackageComponent,
  PackageItem,
} from './components/featured-package/featured-package.component';
import { PackageCardComponent } from './components/package-card/package-card.component';

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 1,
    name: 'باقة يومية',
    description: 'مثالية لإطلالة ناعمة ومنعشة كل يوم',
    price: 359,
    oldPrice: 479,
    discount: 25,
    products: 5,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248334/hayat-makeup/packages/daily-package.png',
    featured: true,
  },
  {
    id: 2,
    name: 'باقة عروس',
    description: 'كل ما تحتاجينه لتكوني أجمل في يومك',
    price: 489,
    oldPrice: 699,
    discount: 30,
    products: 6,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248330/hayat-makeup/packages/arus-package.png',
  },
  {
    id: 3,
    name: 'باقة سهرة',
    description: 'إطلالة جريئة تخطف الأنظار في كل مناسبة',
    price: 439,
    oldPrice: 549,
    discount: 20,
    products: 6,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248343/hayat-makeup/packages/sahra-package.png',
  },
  {
    id: 4,
    name: 'باقة الشفاه',
    description: 'تشكيلة متكاملة لعشاق الشفاه المثالية',
    price: 254,
    oldPrice: 299,
    discount: 15,
    products: 5,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248340/hayat-makeup/packages/lips-package.png',
  },
  {
    id: 5,
    name: 'باقة وجه كامل',
    description: 'مجموعة متكاملة لإطلالة مثالية من أول خطوة',
    price: 559,
    oldPrice: 799,
    discount: 30,
    products: 7,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248338/hayat-makeup/packages/full-face-package.png',
  },
];

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    FeaturedPackageComponent,
    PackageCardComponent,
  ],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PackagesComponent {
  readonly packages = signal<PackageItem[]>(PACKAGES_DATA);

  readonly featuredPackage = computed(() => this.packages()[0]);
  readonly regularPackages = computed(() => this.packages().slice(1));
}
