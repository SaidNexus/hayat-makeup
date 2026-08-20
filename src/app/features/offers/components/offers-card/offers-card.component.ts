import { Component, Input, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

export interface OfferItem {
  id: number | string;
  title: string;
  discount: number | string;
  image: string;
}

@Component({
  selector: 'app-offers-card',
  standalone: true,
  templateUrl: './offers-card.component.html',
  styleUrl: './offers-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OffersCardComponent {
  @Input({ required: true }) offer!: OfferItem;

  private readonly router = inject(Router);

  navigateToProducts(): void {
    this.router.navigateByUrl('/products');
  }
}
