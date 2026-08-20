import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-category-circle',
  standalone: true,
  templateUrl: './category-circle.component.html',
  styleUrl: './category-circle.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryCircleComponent {
  @Input() image = '';
  @Input() name = '';
  @Output() categoryClick = new EventEmitter<void>();

  onClick(): void {
    this.categoryClick.emit();
  }
}
