import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideArrowLeft } from '@lucide/angular';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryCardComponent {
  @Input() image = '';
  @Input() title = '';
  @Input() description = '';
  @Input() bgColor = '#FBF3F1';
  @Input() className = '';

  @Output() cardClick = new EventEmitter<void>();

  readonly arrowLeftIcon = LucideArrowLeft;

  onClick(): void {
    this.cardClick.emit();
  }
}
