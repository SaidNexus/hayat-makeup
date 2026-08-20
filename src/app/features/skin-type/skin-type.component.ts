import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { SkinTypeHeaderComponent } from './components/skin-type-header/skin-type-header.component';
import {
  SkinTypeCardComponent,
  SkinTypeItem,
} from './components/skin-type-card/skin-type-card.component';
import { SkinTypeAdviceComponent } from './components/skin-type-advice/skin-type-advice.component';
import { SkinTypeCtaComponent } from './components/skin-type-cta/skin-type-cta.component';

export const SKIN_TYPES_DATA: SkinTypeItem[] = [
  {
    id: 'oily',
    title: 'دهنية',
    description: 'تركيبات خفيفة تتحكم بالمعان وتحافظ على توازن بشرتك.',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248372/hayat-makeup/skin/1.png',
    products: [
      'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248358/hayat-makeup/products/foundation.png',
      'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248356/hayat-makeup/products/eye-shadow.png',
      'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248362/hayat-makeup/products/maskara.png',
    ],
  },
  {
    id: 'dry',
    title: 'جافة',
    description: 'تركيبات مرطبة تغذي البشرة وتمنحها نعومة وإشراقة.',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248374/hayat-makeup/skin/2.png',
    products: [
      'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248360/hayat-makeup/products/lipstick.png',
      'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248358/hayat-makeup/products/foundation.png',
      'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248356/hayat-makeup/products/eye-shadow.png',
    ],
  },
  {
    id: 'combination',
    title: 'مختلطة',
    description: 'توازن مثالي للعناية والمظهر المثالي في كل منطقة.',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248376/hayat-makeup/skin/3.png',
    products: [
      'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248358/hayat-makeup/products/foundation.png',
      'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248362/hayat-makeup/products/maskara.png',
      'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248356/hayat-makeup/products/eye-shadow.png',
    ],
  },
  {
    id: 'sensitive',
    title: 'حساسة',
    description: 'تركيبات لطيفة تهدئ البشرة وتقلل من التهيج والاحمرار.',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248379/hayat-makeup/skin/4.png',
    products: [
      'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248358/hayat-makeup/products/foundation.png',
      'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248360/hayat-makeup/products/lipstick.png',
      'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248362/hayat-makeup/products/maskara.png',
    ],
  },
  {
    id: 'acne',
    title: 'معرضة للحبوب',
    description: 'تركيبات تساعد على تنقية البشرة والحد من ظهور الحبوب.',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248381/hayat-makeup/skin/5.png',
    products: [
      'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248358/hayat-makeup/products/foundation.png',
      'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248362/hayat-makeup/products/maskara.png',
      'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248360/hayat-makeup/products/lipstick.png',
    ],
  },
];

@Component({
  selector: 'app-skin-type',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    SkinTypeHeaderComponent,
    SkinTypeCardComponent,
    SkinTypeAdviceComponent,
    SkinTypeCtaComponent,
  ],
  templateUrl: './skin-type.component.html',
  styleUrl: './skin-type.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkinTypeComponent {
  readonly skinTypes = signal<SkinTypeItem[]>(SKIN_TYPES_DATA);
}
