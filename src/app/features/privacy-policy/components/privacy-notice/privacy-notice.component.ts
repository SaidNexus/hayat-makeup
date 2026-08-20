import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideShield } from '@lucide/angular';

@Component({
  selector: 'app-privacy-notice',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './privacy-notice.component.html',
  styleUrl: './privacy-notice.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyNoticeComponent {
  readonly shieldIcon = LucideShield;
}
