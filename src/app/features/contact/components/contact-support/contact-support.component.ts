import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideDynamicIcon, LucideHeadphones } from '@lucide/angular';
import { LocalizeFieldPipe } from '../../../../shared/pipes/localize-field.pipe';

@Component({
  selector: 'app-contact-support',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon, LocalizeFieldPipe],
  templateUrl: './contact-support.component.html',
  styleUrl: './contact-support.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSupportComponent {
  readonly headphonesIcon = LucideHeadphones;
}
