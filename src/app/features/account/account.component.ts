import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import {
  AccountProfileCardComponent,
  UserProfile,
} from './components/account-profile-card/account-profile-card.component';
import {
  AccountStatsComponent,
  AccountStat,
} from './components/account-stats/account-stats.component';
import { AccountSectionsComponent } from './components/account-sections/account-sections.component';
import { CartService } from '../../core/services/cart.service';
import { FavoritesService } from '../../core/services/favorites.service';

export const USER_MOCK: UserProfile = {
  name: 'نورة العتيبي',
  email: 'noura@hayatmakeup.sa',
  joinedAt: '2024',
};

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    AccountProfileCardComponent,
    AccountStatsComponent,
    AccountSectionsComponent,
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent {
  private readonly router = inject(Router);
  readonly cartService = inject(CartService);
  readonly favoritesService = inject(FavoritesService);

  readonly user = USER_MOCK;

  readonly stats = computed<AccountStat[]>(() => [
    {
      id: 'favorites',
      label: 'المفضلة',
      value: this.favoritesService.favorites().length,
    },
    {
      id: 'cart',
      label: 'السلة',
      value: this.cartService.totalItems(),
    },
    {
      id: 'orders',
      label: 'الطلبات',
      value: 1,
    },
  ]);

  handleNavigate(path: string): void {
    if (path) this.router.navigateByUrl(path);
  }

  handleStatClick(id: string): void {
    if (id === 'favorites') this.router.navigateByUrl('/wishlist');
    else if (id === 'cart') this.router.navigateByUrl('/cart');
    else if (id === 'orders') this.router.navigateByUrl('/order-success');
  }

  handleLogout(): void {
    this.cartService.clearCart();
    this.favoritesService.clearFavorites();
    this.router.navigateByUrl('/');
  }
}
