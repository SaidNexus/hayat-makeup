import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-track-order-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './track-order-page-editor.component.html',
  styleUrl: './track-order-page-editor.component.css'
})
export class TrackOrderPageEditorComponent {
  private configService = inject(DashboardConfigService);

  get config() {
    return this.configService.trackOrderPageConfig();
  }

  updateConfig(updates: Partial<any>) {
    this.configService.trackOrderPageConfig.update(config => ({
      ...config,
      ...updates
    }));
  }
}
