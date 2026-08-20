import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { LooksHeaderComponent } from './components/looks-header/looks-header.component';
import { LooksGridComponent } from './components/looks-grid/looks-grid.component';
import { LooksPromoComponent } from './components/looks-promo/looks-promo.component';

@Component({
  selector: 'app-looks',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    LooksHeaderComponent,
    LooksGridComponent,
    LooksPromoComponent,
  ],
  templateUrl: './looks.component.html',
  styleUrl: './looks.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LooksComponent {}
