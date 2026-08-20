import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideSparkles } from '@lucide/angular';

export interface QuizStep {
  number: number;
  label: string;
}

@Component({
  selector: 'app-skin-quiz-progress',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './skin-quiz-progress.component.html',
  styleUrl: './skin-quiz-progress.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkinQuizProgressComponent {
  @Input() currentStep = 1;

  readonly sparklesIcon = LucideSparkles;

  readonly steps: QuizStep[] = [
    { number: 1, label: 'البشرة' },
    { number: 2, label: 'تحتون البشرة' },
    { number: 3, label: 'نوع البشرة' },
    { number: 4, label: 'النتيجة' },
  ];
}
