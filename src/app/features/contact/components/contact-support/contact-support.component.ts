import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideHeadphones } from '@lucide/angular';

@Component({
  selector: 'app-contact-support',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './contact-support.component.html',
  styleUrl: './contact-support.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSupportComponent {
  readonly headphonesIcon = LucideHeadphones;
}
