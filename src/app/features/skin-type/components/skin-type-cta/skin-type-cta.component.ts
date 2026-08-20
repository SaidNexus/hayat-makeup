import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LucideDynamicIcon, LucideChevronLeft } from '@lucide/angular';

@Component({
  selector: 'app-skin-type-cta',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './skin-type-cta.component.html',
  styleUrl: './skin-type-cta.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkinTypeCtaComponent {
  private readonly router = inject(Router);

  readonly chevronLeftIcon = LucideChevronLeft;

  navigateToQuiz(): void {
    this.router.navigateByUrl('/skin-quiz');
  }
}
