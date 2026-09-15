import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideMapPin,
  LucideShoppingBag,
} from '@lucide/angular';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-order-actions',
  standalone: true,
  imports: [LucideDynamicIcon, TranslatePipe],
  templateUrl: './order-actions.component.html',
  styleUrl: './order-actions.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderActionsComponent {
  @Output() trackOrder = new EventEmitter<void>();
  @Output() continueShopping = new EventEmitter<void>();

  readonly mapPinIcon = LucideMapPin;
  readonly shoppingBagIcon = LucideShoppingBag;

  onTrackOrder(): void {
    this.trackOrder.emit();
  }

  onContinueShopping(): void {
    this.continueShopping.emit();
  }
}
