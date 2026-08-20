import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  LucideDynamicIcon,
  LucideArrowLeft,
  LucideSearch,
} from '@lucide/angular';
import { SkinQuizHeaderComponent } from './components/skin-quiz-header/skin-quiz-header.component';
import { SkinQuizProgressComponent } from './components/skin-quiz-progress/skin-quiz-progress.component';
import {
  SkinToneOptionComponent,
  SkinTone,
} from './components/skin-tone-option/skin-tone-option.component';
import {
  UndertoneOptionComponent,
  Undertone,
} from './components/undertone-option/undertone-option.component';
import {
  SkinTypeOptionComponent,
  SkinTypeChoice,
} from './components/skin-type-option/skin-type-option.component';
import { SuggestedShadeComponent } from './components/suggested-shade/suggested-shade.component';

export const QUIZ_TONES_DATA: SkinTone[] = [
  { id: '5', label: 'فاتح', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248372/hayat-makeup/skin/1.png' },
  { id: '4', label: 'متوسط فاتح', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248374/hayat-makeup/skin/2.png' },
  { id: '3', label: 'متوسط', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248376/hayat-makeup/skin/3.png' },
  { id: '2', label: 'قمحي', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248379/hayat-makeup/skin/4.png' },
  { id: '1', label: 'داكن', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248381/hayat-makeup/skin/5.png' },
];

export const QUIZ_UNDERTONES_DATA: Undertone[] = [
  {
    id: 'neutral',
    label: 'محايد',
    description: 'مزيج من الذهبي والوردي',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248388/hayat-makeup/skin/neutral.png',
  },
  {
    id: 'warm',
    label: 'دافئ',
    description: 'ذهبي أو خوخي',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248389/hayat-makeup/skin/warm.png',
  },
  {
    id: 'cool',
    label: 'بارد',
    description: 'وردي أو وردي مزرق',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248383/hayat-makeup/skin/cool.png',
  },
];

export const QUIZ_SKIN_TYPES_DATA: SkinTypeChoice[] = [
  { id: 'normal', label: 'عادية', description: 'متوازنة' },
  { id: 'dry', label: 'جافة', description: 'تشرين بالجفاف' },
  { id: 'oily', label: 'دهنية', description: 'لامعة في المنطقة T' },
  { id: 'combination', label: 'مختلطة', description: 'دهنية في T وجافة' },
  { id: 'sensitive', label: 'حساسة', description: 'تتأثر بسهولة' },
];

@Component({
  selector: 'app-skin-quiz',
  standalone: true,
  imports: [
    SkinQuizHeaderComponent,
    SkinQuizProgressComponent,
    SkinToneOptionComponent,
    UndertoneOptionComponent,
    SkinTypeOptionComponent,
    SuggestedShadeComponent,
    LucideDynamicIcon,
  ],
  templateUrl: './skin-quiz.component.html',
  styleUrl: './skin-quiz.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkinQuizComponent {
  private readonly router = inject(Router);

  readonly searchIcon = LucideSearch;
  readonly arrowLeftIcon = LucideArrowLeft;

  readonly tones = signal<SkinTone[]>(QUIZ_TONES_DATA);
  readonly undertones = signal<Undertone[]>(QUIZ_UNDERTONES_DATA);
  readonly skinTypes = signal<SkinTypeChoice[]>(QUIZ_SKIN_TYPES_DATA);

  selectedTone = signal<string>('5');
  selectedUndertone = signal<string>('neutral');
  selectedType = signal<string>('normal');

  onSelectTone(id: string): void {
    this.selectedTone.set(id);
  }

  onSelectUndertone(id: string): void {
    this.selectedUndertone.set(id);
  }

  onSelectType(id: string): void {
    this.selectedType.set(id);
  }

  onNext(): void {
    this.router.navigateByUrl('/skin-type');
  }
}
