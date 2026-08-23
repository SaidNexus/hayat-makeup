import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-checkout-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout-page-editor.component.html'
})
export class CheckoutPageEditorComponent {
  private configService = inject(DashboardConfigService);

  get config() {
    return this.configService.checkoutPageConfig();
  }

  updateConfig(updates: any) {
    this.configService.checkoutPageConfig.update(config => ({ ...config, ...updates }));
  }
}
