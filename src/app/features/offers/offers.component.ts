import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { OffersHeaderComponent } from './components/offers-header/offers-header.component';
import { OffersHeroComponent } from './components/offers-hero/offers-hero.component';
import { FeaturedOffersComponent } from './components/featured-offers/featured-offers.component';
import { OffersBundlesComponent } from './components/offers-bundles/offers-bundles.component';
import { DiscountStepsComponent } from './components/discount-steps/discount-steps.component';
import { LimitedOfferComponent } from './components/limited-offer/limited-offer.component';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    OffersHeaderComponent,
    OffersHeroComponent,
    FeaturedOffersComponent,
    OffersBundlesComponent,
    DiscountStepsComponent,
    LimitedOfferComponent,
  ],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OffersComponent {}
