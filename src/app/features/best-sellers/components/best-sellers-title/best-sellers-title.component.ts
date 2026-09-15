import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-best-sellers-title',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './best-sellers-title.component.html',
  styleUrl: './best-sellers-title.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestSellersTitleComponent {}
