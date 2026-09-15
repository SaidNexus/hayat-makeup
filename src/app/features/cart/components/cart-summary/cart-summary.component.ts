import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartSummaryComponent {
  @Input() subtotal = 0;
  @Input() shipping = 0;
  @Input() discount = 0;
  @Input() total = 0;
}
