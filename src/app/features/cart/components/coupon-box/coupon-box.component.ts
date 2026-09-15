import { Component, EventEmitter, Input, Output, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

export const COUPON_CODE = 'HAYAT10';

@Component({
  selector: 'app-coupon-box',
  standalone: true,
  imports: [FormsModule, TranslatePipe],
  templateUrl: './coupon-box.component.html',
  styleUrl: './coupon-box.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CouponBoxComponent {
  @Input() applied = false;
  @Output() applyCoupon = new EventEmitter<void>();

  coupon = '';
  readonly error = signal<string>('');
  readonly validCode = COUPON_CODE;

  handleApply(): void {
    if (this.applied) return;
    if (!this.coupon.trim()) return;

    if (this.coupon.trim().toUpperCase() === COUPON_CODE) {
      this.error.set('');
      this.applyCoupon.emit();
    } else {
      this.error.set('كود الخصم غير صحيح');
    }
  }

  handleChange(): void {
    if (this.error()) {
      this.error.set('');
    }
  }
}
