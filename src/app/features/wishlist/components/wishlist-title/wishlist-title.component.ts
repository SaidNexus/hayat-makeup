import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideDynamicIcon, LucideHeart } from '@lucide/angular';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';
import { LocalizeFieldPipe } from '../../../../shared/pipes/localize-field.pipe';

@Component({
  selector: 'app-wishlist-title',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon, TranslatePipe, LocalizeFieldPipe],
  templateUrl: './wishlist-title.component.html',
  styleUrl: './wishlist-title.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistTitleComponent {
  @Input() count = 0;
  readonly heartIcon = LucideHeart;
}
