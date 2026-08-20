import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideCopy } from '@lucide/angular';

@Component({
  selector: 'app-order-number',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './order-number.component.html',
  styleUrl: './order-number.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderNumberComponent {
  @Input({ required: true }) orderNumber = '';

  readonly copyIcon = LucideCopy;

  async handleCopy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.orderNumber);
    } catch {
      console.log(this.orderNumber);
    }
  }
}
