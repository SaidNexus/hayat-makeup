import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
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
