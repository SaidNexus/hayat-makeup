import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-returns-hero',
  standalone: true,
  templateUrl: './returns-hero.component.html',
  styleUrl: './returns-hero.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReturnsHeroComponent {
  readonly returnsHeroImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248369/hayat-makeup/returns/returns-hero.png';
}
