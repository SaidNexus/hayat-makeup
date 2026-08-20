import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideClock3 } from '@lucide/angular';

@Component({
  selector: 'app-expected-delivery',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './expected-delivery.component.html',
  styleUrl: './expected-delivery.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpectedDeliveryComponent {
  readonly clockIcon = LucideClock3;
  readonly calendarImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248094/hayat-makeup/calendarImage.png';
}
