import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideHeart } from '@lucide/angular';

@Component({
  selector: 'app-skin-type-header',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './skin-type-header.component.html',
  styleUrl: './skin-type-header.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkinTypeHeaderComponent {
  readonly heartIcon = LucideHeart;
}
