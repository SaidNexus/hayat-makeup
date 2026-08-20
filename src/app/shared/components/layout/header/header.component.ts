import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideDynamicIcon,
  LucideMenu,
  LucideSearch,
  LucideShoppingBag,
} from '@lucide/angular';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideDynamicIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly cartService = inject(CartService);

  readonly Menu = LucideMenu;
  readonly Search = LucideSearch;
  readonly ShoppingBag = LucideShoppingBag;
}
