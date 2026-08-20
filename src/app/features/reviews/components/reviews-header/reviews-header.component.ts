import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucidePencil } from '@lucide/angular';

@Component({
  selector: 'app-reviews-header',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './reviews-header.component.html',
  styleUrl: './reviews-header.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsHeaderComponent {
  readonly pencilIcon = LucidePencil;
}
