import { Component, Input, computed, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideMapPin,
  LucidePhone,
  LucideTruck,
} from '@lucide/angular';

export interface CustomerDetails {
  name?: string;
  phone?: string;
  city?: string;
  area?: string;
  address?: string;
  notes?: string;
}

@Component({
  selector: 'app-delivery-details',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './delivery-details.component.html',
  styleUrl: './delivery-details.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeliveryDetailsComponent {
  @Input() customer?: CustomerDetails;

  readonly truckIcon = LucideTruck;
  readonly mapPinIcon = LucideMapPin;
  readonly phoneIcon = LucidePhone;

  readonly name = computed(() => this.customer?.name || 'أسماء محمد');

  readonly address = computed(() => {
    if (!this.customer) {
      return 'الرياض، حي النخيل، شارع الأمير تركي بن عبدالعزيز';
    }
    const parts = [
      this.customer.address,
      this.customer.area,
      this.customer.city,
    ].filter(Boolean);
    return parts.length > 0
      ? parts.join('، ')
      : 'الرياض، حي النخيل، شارع الأمير تركي بن عبدالعزيز';
  });

  readonly phone = computed(() => this.customer?.phone || '05XXXXXXXX');
}
