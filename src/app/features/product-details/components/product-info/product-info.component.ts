import { Component, Input, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideDynamicIcon, LucideStar } from '@lucide/angular';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

export const PRODUCT_INFO_FALLBACK = {
  breadcrumb: 'الرئيسية > أحمر شفاه',
  title: 'أحمر شفاه مطفي',
  variant: 'درجة 07 - وردي فوشيا',
  rating: '4.9',
  reviews: '(98)',
  price: 89,
  oldPrice: 129,
  discount: 'خصم 31%',
  shadeLabel: 'وردي فوشيا',
};

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon, TranslatePipe],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductInfoComponent {
  @Input() product: any;

  readonly starIcon = LucideStar;

  readonly info = computed(() => ({
    breadcrumb: this.product?.breadcrumb || PRODUCT_INFO_FALLBACK.breadcrumb,
    title: this.product?.name || PRODUCT_INFO_FALLBACK.title,
    variant: this.product?.description || PRODUCT_INFO_FALLBACK.variant,
    rating: this.product?.rating ?? PRODUCT_INFO_FALLBACK.rating,
    reviews: this.product
      ? `(${this.product.reviews ?? this.product.reviewsCount ?? 98})`
      : PRODUCT_INFO_FALLBACK.reviews,
    price: this.product?.price ?? PRODUCT_INFO_FALLBACK.price,
    oldPrice: this.product?.oldPrice ?? PRODUCT_INFO_FALLBACK.oldPrice,
    discount: this.product?.discount
      ? `خصم ${this.product.discount}%`
      : PRODUCT_INFO_FALLBACK.discount,
  }));
}
