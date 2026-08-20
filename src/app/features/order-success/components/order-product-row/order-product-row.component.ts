import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-order-product-row',
  standalone: true,
  templateUrl: './order-product-row.component.html',
  styleUrl: './order-product-row.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderProductRowComponent {
  @Input({ required: true }) image!: string;
  @Input({ required: true }) name!: string;
  @Input() variant?: string;
  @Input({ required: true }) price!: number | string;
  @Input() quantity: number | string = 1;
  @Input() isLast = false;
}
