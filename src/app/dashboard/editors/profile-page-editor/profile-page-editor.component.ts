import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-profile-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile-page-editor.component.html',
  styleUrl: './profile-page-editor.component.css'
})
export class ProfilePageEditorComponent {
  private dashboardConfigService = inject(DashboardConfigService);

  get config() {
    return this.dashboardConfigService.profilePageConfig();
  }

  updateConfig(key: string, value: any) {
    this.dashboardConfigService.profilePageConfig.update(config => ({
      ...config,
      [key]: value
    }));
  }
}
