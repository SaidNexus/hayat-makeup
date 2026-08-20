import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideCheck } from '@lucide/angular';

@Component({
  selector: 'app-order-success-header',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './order-success-header.component.html',
  styleUrl: './order-success-header.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSuccessHeaderComponent {
  readonly checkIcon = LucideCheck;
}
