import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { ServiceFeaturesComponent } from './components/service-features/service-features.component';
import { CategoriesSectionComponent } from './components/categories-section/categories-section.component';
import { BestSellersComponent } from './components/best-sellers/best-sellers.component';
import { PromoBannerComponent } from './components/promo-banner/promo-banner.component';
import { LookCarouselComponent } from './components/look-carousel/look-carousel.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { DashboardConfigService } from '../../core/services/dashboard-config.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroBannerComponent,
    ServiceFeaturesComponent,
    CategoriesSectionComponent,
    BestSellersComponent,
    PromoBannerComponent,
    LookCarouselComponent,
    MobileBottomNavComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private configService = inject(DashboardConfigService);
  readonly config = this.configService.homePageConfig;
}
