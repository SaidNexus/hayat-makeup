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

  readonly fallbackImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248101/hayat-makeup/category-eyes.png';

  onImgError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target && target.src !== this.fallbackImage) {
      target.src = this.fallbackImage;
    }
  }

  onClick(): void {
    this.categoryClick.emit();
  }
}
