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
import { LocalizeFieldPipe } from '../../../pipes/localize-field.pipe';

export interface NavItem {
  to: string;
  label: string;
  labelAr: string;
  labelEn: string;
  icon: LucideIcon;
  badge?: boolean;
}

@Component({
  selector: 'app-mobile-bottom-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideDynamicIcon, LocalizeFieldPipe],
  templateUrl: './mobile-bottom-nav.component.html',
  styleUrl: './mobile-bottom-nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileBottomNavComponent {
  @Input() activeItem?: string;

  readonly cartService = inject(CartService);

  readonly navItems: NavItem[] = [
    { to: '/', label: 'الرئيسية', labelAr: 'الرئيسية', labelEn: 'Home', icon: LucideHome },
    { to: '/categories', label: 'التصنيفات', labelAr: 'التصنيفات', labelEn: 'Categories', icon: LucideLayoutGrid },
    { to: '/search', label: 'البحث', labelAr: 'البحث', labelEn: 'Search', icon: LucideSearch },
    { to: '/wishlist', label: 'المفضلة', labelAr: 'المفضلة', labelEn: 'Wishlist', icon: LucideHeart },
    { to: '/cart', label: 'السلة', labelAr: 'السلة', labelEn: 'Cart', icon: LucideShoppingBag, badge: true },
  ];
}
