import { Component, Input, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LucideDynamicIcon, LucideChevronLeft } from '@lucide/angular';
import {
  ColorProductCardComponent,
  ColorProduct,
} from '../color-product-card/color-product-card.component';

@Component({
  selector: 'app-color-product-section',
  standalone: true,
  imports: [ColorProductCardComponent, LucideDynamicIcon],
  templateUrl: './color-product-section.component.html',
  styleUrl: './color-product-section.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorProductSectionComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;
  @Input({ required: true }) color!: string;
  @Input({ required: true }) products: ColorProduct[] = [];

  private readonly router = inject(Router);

  readonly chevronLeftIcon = LucideChevronLeft;

  navigateToProducts(): void {
    this.router.navigateByUrl('/products');
  }
}
