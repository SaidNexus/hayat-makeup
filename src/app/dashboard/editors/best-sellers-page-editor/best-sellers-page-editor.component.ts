import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-best-sellers-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './best-sellers-page-editor.component.html',
  styleUrl: './best-sellers-page-editor.component.css'
})
export class BestSellersPageEditorComponent {
  configService = inject(DashboardConfigService);

  get config() {
    return this.configService.bestSellersPageConfig();
  }

  updateConfig(key: keyof typeof this.config, value: any) {
    this.configService.updateBestSellersPageConfig({ [key]: value });
  }
}
