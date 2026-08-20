import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideSparkles } from '@lucide/angular';

export const SUGGESTED_SHADES_DATA = [
  '#D6A97D',
  '#E1B682',
  '#C98D66',
  '#E2B486',
  '#E8C09D',
  '#EDD5BF',
];

@Component({
  selector: 'app-suggested-shade',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './suggested-shade.component.html',
  styleUrl: './suggested-shade.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuggestedShadeComponent {
  readonly foundationImage = 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248385/hayat-makeup/skin/foundation.png';
  readonly sparklesIcon = LucideSparkles;
  readonly shades = SUGGESTED_SHADES_DATA;
}
