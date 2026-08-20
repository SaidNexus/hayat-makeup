import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  LucideDynamicIcon,
  LucideFileText,
  LucideMail,
  LucidePenLine,
  LucideSend,
  LucideShieldCheck,
  LucideUserRound,
} from '@lucide/angular';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, LucideDynamicIcon],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  readonly userRoundIcon = LucideUserRound;
  readonly mailIcon = LucideMail;
  readonly fileTextIcon = LucideFileText;
  readonly penLineIcon = LucidePenLine;
  readonly sendIcon = LucideSend;
  readonly shieldCheckIcon = LucideShieldCheck;

  name = signal<string>('');
  email = signal<string>('');
  subject = signal<string>('');
  message = signal<string>('');
  submitted = signal<boolean>(false);

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.name().trim() || !this.message().trim()) return;
    this.submitted.set(true);
    this.name.set('');
    this.email.set('');
    this.subject.set('');
    this.message.set('');
  }

  onFieldChange(): void {
    if (this.submitted()) {
      this.submitted.set(false);
    }
  }
}
