import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideHeart } from '@lucide/angular';

@Component({
  selector: 'app-looks-header',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './looks-header.component.html',
  styleUrl: './looks-header.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LooksHeaderComponent {
  readonly heartIcon = LucideHeart;
}
