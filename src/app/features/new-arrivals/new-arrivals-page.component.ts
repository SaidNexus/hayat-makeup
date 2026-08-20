import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { NewArrivalsTitleComponent } from './components/new-arrivals-title/new-arrivals-title.component';
import { NewArrivalsHeroComponent } from './components/new-arrivals-hero/new-arrivals-hero.component';
import { NewArrivalsFiltersComponent } from './components/new-arrivals-filters/new-arrivals-filters.component';
import { NewArrivalsGridComponent } from './components/new-arrivals-grid/new-arrivals-grid.component';

@Component({
  selector: 'app-new-arrivals-page',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    NewArrivalsTitleComponent,
    NewArrivalsHeroComponent,
    NewArrivalsFiltersComponent,
    NewArrivalsGridComponent,
  ],
  templateUrl: './new-arrivals-page.component.html',
  styleUrl: './new-arrivals-page.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewArrivalsPageComponent {
  readonly filter = signal<string>('الكل');

  onFilterChange(newFilter: string): void {
    this.filter.set(newFilter);
  }
}
