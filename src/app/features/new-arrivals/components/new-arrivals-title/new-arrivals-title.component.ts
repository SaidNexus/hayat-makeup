import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-new-arrivals-title',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './new-arrivals-title.component.html',
  styleUrl: './new-arrivals-title.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewArrivalsTitleComponent {}
