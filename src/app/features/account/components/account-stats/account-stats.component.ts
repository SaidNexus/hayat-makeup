import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideHeart,
  LucidePackageCheck,
  LucideShoppingBag,
  LucideIcon,
} from '@lucide/angular';

import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

export interface AccountStat {
  id: string;
  label: string;
  key?: string;
  value: number;
}

const STAT_ICONS: Record<string, LucideIcon> = {
  favorites: LucideHeart,
  cart: LucideShoppingBag,
  orders: LucidePackageCheck,
};

@Component({
  selector: 'app-account-stats',
  standalone: true,
  imports: [LucideDynamicIcon, TranslatePipe],
  templateUrl: './account-stats.component.html',
  styleUrl: './account-stats.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountStatsComponent {
  @Input({ required: true }) stats: AccountStat[] = [];
  @Output() selectStat = new EventEmitter<string>();

  getIcon(id: string): LucideIcon {
    return STAT_ICONS[id] || LucidePackageCheck;
  }

  onClick(id: string): void {
    this.selectStat.emit(id);
  }
}
