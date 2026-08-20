import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { BestSellersTitleComponent } from './components/best-sellers-title/best-sellers-title.component';
import { BestSellersGridComponent } from './components/best-sellers-grid/best-sellers-grid.component';

@Component({
  selector: 'app-best-sellers-page',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    BestSellersTitleComponent,
    BestSellersGridComponent,
  ],
  templateUrl: './best-sellers-page.component.html',
  styleUrl: './best-sellers-page.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestSellersPageComponent {}
