import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LucideDynamicIcon, LucideHeadset } from '@lucide/angular';

@Component({
  selector: 'app-faq-support-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './faq-support-card.component.html',
  styleUrl: './faq-support-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqSupportCardComponent {
  private readonly router = inject(Router);

  readonly headsetIcon = LucideHeadset;

  navigateToContact(): void {
    this.router.navigateByUrl('/contact');
  }
}
