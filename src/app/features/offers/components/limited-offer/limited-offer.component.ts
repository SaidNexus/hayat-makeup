import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideClock3 } from '@lucide/angular';

export interface TimeBox {
  label: string;
  value: string;
}

export const LIMITED_OFFER_TIME_DATA: TimeBox[] = [
  { label: 'ثانية', value: '45' },
  { label: 'دقيقة', value: '18' },
  { label: 'ساعة', value: '08' },
  { label: 'يوم', value: '02' },
];

@Component({
  selector: 'app-limited-offer',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './limited-offer.component.html',
  styleUrl: './limited-offer.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LimitedOfferComponent {
  readonly clockIcon = LucideClock3;
  readonly limitedOfferImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248324/hayat-makeup/offers/limited-offer.png';
  readonly timeBoxes = signal<TimeBox[]>(LIMITED_OFFER_TIME_DATA);
}
