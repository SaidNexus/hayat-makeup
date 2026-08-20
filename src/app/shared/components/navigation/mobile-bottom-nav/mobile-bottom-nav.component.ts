import { Component, Input, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  LucideDynamicIcon,
  LucideHome,
  LucideLayoutGrid,
  LucideSearch,
  LucideHeart,
  LucideShoppingBag,
  LucideIcon,
} from '@lucide/angular';
import { CartService } from '../../../../core/services/cart.service';

export interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
  badge?: boolean;
}

@Component({
  selector: 'app-mobile-bottom-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideDynamicIcon],
  templateUrl: './mobile-bottom-nav.component.html',
  styleUrl: './mobile-bottom-nav.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileBottomNavComponent {
  @Input() activeItem?: string;

  readonly cartService = inject(CartService);

  readonly navItems: NavItem[] = [
    { to: '/', label: 'الرئيسية', icon: LucideHome },
    { to: '/categories', label: 'التصنيفات', icon: LucideLayoutGrid },
    { to: '/search', label: 'البحث', icon: LucideSearch },
    { to: '/wishlist', label: 'المفضلة', icon: LucideHeart },
    { to: '/cart', label: 'السلة', icon: LucideShoppingBag, badge: true },
  ];
}
