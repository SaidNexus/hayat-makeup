import { Component, computed, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchEmptyStateComponent } from './components/search-empty-state/search-empty-state.component';
import {
  ALL_PRODUCTS_DATA,
  ProductItem,
} from '../all-products/all-products.component';

export type AllProduct = ProductItem;

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    SearchInputComponent,
    SearchResultsComponent,
    SearchEmptyStateComponent,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  query = signal<string>('');

  constructor() {
    this.route.queryParamMap.subscribe((params) => {
      const q = params.get('q') || '';
      this.query.set(q);
    });
  }

  readonly trimmed = computed(() => this.query().trim());

  readonly visibleResults = computed<ProductItem[]>(() => {
    const q = this.trimmed().toLowerCase();
    if (!q) return [];
    return ALL_PRODUCTS_DATA.filter((product: ProductItem) =>
      [product.name, product.description, product.category]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  });

  handleChange(value: string): void {
    this.query.set(value);
    const next = value.trim();
    if (next) {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { q: next },
        queryParamsHandling: 'merge',
        replaceUrl: true,
      });
    } else {
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { q: null },
        queryParamsHandling: 'merge',
        replaceUrl: true,
      });
    }
  }

  handleSelect(product: ProductItem): void {
    this.router.navigateByUrl(`/product/${product.id}`);
  }

  handleClear(): void {
    this.handleChange('');
  }

  handleBrowse(): void {
    this.router.navigateByUrl('/products');
  }
}
