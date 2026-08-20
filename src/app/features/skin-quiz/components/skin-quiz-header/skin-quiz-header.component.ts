import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  LucideDynamicIcon,
  LucideHeart,
  LucideMenu,
  LucideShoppingCart,
  LucideSparkles,
} from '@lucide/angular';
import { UiService } from '../../../../core/services/ui.service';
import { CartService } from '../../../../core/services/cart.service';
import { MobileMenuDrawerComponent } from '../../../../shared/components/navigation/mobile-menu-drawer/mobile-menu-drawer.component';

@Component({
  selector: 'app-skin-quiz-header',
  standalone: true,
  imports: [LucideDynamicIcon, MobileMenuDrawerComponent],
  templateUrl: './skin-quiz-header.component.html',
  styleUrl: './skin-quiz-header.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkinQuizHeaderComponent {
  private readonly router = inject(Router);
  private readonly uiService = inject(UiService);
  readonly cartService = inject(CartService);

  readonly logoImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248206/hayat-makeup/hero.png';
  readonly shoppingCartIcon = LucideShoppingCart;
  readonly heartIcon = LucideHeart;
  readonly sparksIcon = LucideSparkles;
  readonly menuIcon = LucideMenu;

  navigateTo(path: string): void {
    this.router.navigateByUrl(path);
  }

  openMenu(): void {
    this.uiService.openMenu();
  }
}
