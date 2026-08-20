import { Component, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { ColorFilterTabsComponent } from './components/color-filter-tabs/color-filter-tabs.component';
import { ColorProductSectionComponent } from './components/color-product-section/color-product-section.component';
import { ColorProduct } from './components/color-product-card/color-product-card.component';

export interface ColorSection {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  products: ColorProduct[];
}

const BASE_PRODUCTS = [
  {
    id: 1,
    name: 'أحمر شفاه مطفي',
    price: 79,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248145/hayat-makeup/colors/pink-lipstick.png',
  },
  {
    id: 2,
    name: 'أحمر خدود مطفي',
    price: 69,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248138/hayat-makeup/colors/pink-blush.png',
  },
  {
    id: 3,
    name: 'باليت ظلال عيون',
    price: 129,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248148/hayat-makeup/colors/pink-palette.png',
  },
  {
    id: 4,
    name: 'ملمع شفاه لامع',
    price: 59,
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248141/hayat-makeup/colors/pink-gloss.png',
  },
];

const SECTION_META: Record<string, { title: string; subtitle: string; color: string }> = {
  pink: { title: 'منتجات وردية', subtitle: 'كل درجات الوردي لأنوثتك', color: '#D93678' },
  red: { title: 'منتجات حمراء', subtitle: 'أحمر كلاسيكي... جمال لا يزول', color: '#DE242C' },
  nude: { title: 'منتجات نيود', subtitle: 'ألوان ناعمة لإطلالة طبيعية', color: '#DDBFB2' },
  brown: { title: 'منتجات بنية', subtitle: 'درجات دافئة لإطلالة جذابة', color: '#91512F' },
  purple: { title: 'منتجات بنفسجية', subtitle: 'درجات جريئة ومميزة', color: '#8A3DA7' },
  gold: { title: 'منتجات ذهبية', subtitle: 'لمسات ذهبية لإطلالة مشرقة', color: '#D5A22F' },
};

const PRODUCT_NAMES: Record<string, { lip: string; blush: string; palette: string; gloss: string }> = {
  pink: {
    lip: 'أحمر شفاه مطفي وردي غامق',
    blush: 'أحمر خدود مطفي وردي طبيعي',
    palette: 'باليت ظلال عيون وردية',
    gloss: 'ملمع شفاه وردي لامع',
  },
  red: {
    lip: 'أحمر شفاه مطفي أحمر كلاسيكي',
    blush: 'أحمر خدود أحمر طبيعي',
    palette: 'باليت ظلال عيون حمراء',
    gloss: 'ملمع شفاه أحمر لامع',
  },
  nude: {
    lip: 'أحمر شفاه نيود طبيعي',
    blush: 'أحمر خدود نيود',
    palette: 'باليت ظلال نيود',
    gloss: 'ملمع شفاه نيود',
  },
  brown: {
    lip: 'أحمر شفاه بني دافئ',
    blush: 'أحمر خدود بني',
    palette: 'باليت ظلال بنية',
    gloss: 'ملمع شفاه بني',
  },
  purple: {
    lip: 'أحمر شفاه بنفسجي',
    blush: 'أحمر خدود بنفسجي',
    palette: 'باليت ظلال بنفسجية',
    gloss: 'ملمع شفاه بنفسجي',
  },
  gold: {
    lip: 'أحمر شفاه ذهبي',
    blush: 'أحمر خدود ذهبي',
    palette: 'باليت ظلال ذهبية',
    gloss: 'ملمع شفاه ذهبي',
  },
};

const buildSection = (color: string): ColorSection => {
  const meta = SECTION_META[color];
  const names = PRODUCT_NAMES[color];
  return {
    id: color,
    title: meta.title,
    subtitle: meta.subtitle,
    color: meta.color,
    products: [
      { ...BASE_PRODUCTS[0], id: `${color}-1`, name: names.lip, price: 79 },
      { ...BASE_PRODUCTS[1], id: `${color}-2`, name: names.blush, price: 69 },
      { ...BASE_PRODUCTS[2], id: `${color}-3`, name: names.palette, price: 129 },
      { ...BASE_PRODUCTS[3], id: `${color}-4`, name: names.gloss, price: 59 },
    ],
  };
};

export const COLOR_SECTIONS_DATA: ColorSection[] = [
  'pink',
  'red',
  'nude',
  'brown',
  'purple',
  'gold',
].map(buildSection);

@Component({
  selector: 'app-shop-by-color',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    ColorFilterTabsComponent,
    ColorProductSectionComponent,
  ],
  templateUrl: './shop-by-color.component.html',
  styleUrl: './shop-by-color.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShopByColorComponent {
  activeColor = signal<string>('pink');
  readonly sections = signal<ColorSection[]>(COLOR_SECTIONS_DATA);

  readonly visibleSections = computed(() => {
    if (this.activeColor() === 'pink') {
      return this.sections();
    }
    return this.sections().filter((s) => s.id === this.activeColor());
  });

  onColorChange(color: string): void {
    this.activeColor.set(color);
  }
}
