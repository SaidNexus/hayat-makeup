import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

export const PRODUCT_GALLERY_IMAGES = [
  'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248354/hayat-makeup/product-details/lipstick-main.png',
  'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248347/hayat-makeup/product-details/lipstick-1.png',
  'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248351/hayat-makeup/product-details/lipstick-2.png',
  'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248352/hayat-makeup/product-details/lipstick-3.jpg',
  'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248347/hayat-makeup/product-details/lipstick-1.png',
];

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductGalleryComponent implements OnInit {
  @Input() product: any;

  readonly images = PRODUCT_GALLERY_IMAGES;
  activeImage = this.images[0];

  ngOnInit(): void {
    if (this.product?.image) {
      this.activeImage = this.product.image;
    }
  }

  setActiveImage(img: string): void {
    this.activeImage = img;
  }
}
