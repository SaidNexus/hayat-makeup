import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-product-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-page-editor.component.html'
})
export class ProductPageEditorComponent {
  private configService = inject(DashboardConfigService);

  get config() {
    return this.configService.productPageConfig();
  }

  updateConfig(updates: any) {
    this.configService.productPageConfig.update(config => ({ ...config, ...updates }));
  }
}
