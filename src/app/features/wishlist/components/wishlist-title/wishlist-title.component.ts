import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideHeart } from '@lucide/angular';

@Component({
  selector: 'app-wishlist-title',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './wishlist-title.component.html',
  styleUrl: './wishlist-title.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistTitleComponent {
  @Input() count = 0;

  readonly heartIcon = LucideHeart;
}
