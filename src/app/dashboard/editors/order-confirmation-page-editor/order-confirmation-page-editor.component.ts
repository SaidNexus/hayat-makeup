import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-order-confirmation-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-confirmation-page-editor.component.html',
  styleUrl: './order-confirmation-page-editor.component.css'
})
export class OrderConfirmationPageEditorComponent {
  configService = inject(DashboardConfigService);
  config = this.configService.orderConfirmationPageConfig;

  updateConfig(key: string, value: any) {
    this.configService.updateOrderConfirmationPageConfig({ [key]: value });
  }
}
