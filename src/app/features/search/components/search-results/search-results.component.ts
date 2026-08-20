import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import {
  AllProductsCardComponent,
  AllProduct,
} from '../../../../shared/components/cards/all-products-card/all-products-card.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [AllProductsCardComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent {
  @Input({ required: true }) products: AllProduct[] = [];
  @Output() selectProduct = new EventEmitter<AllProduct>();

  onSelect(product: AllProduct): void {
    this.selectProduct.emit(product);
  }
}
