import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-notifications-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notifications-page-editor.component.html',
  styleUrl: './notifications-page-editor.component.css'
})
export class NotificationsPageEditorComponent {
  configService = inject(DashboardConfigService);
  config = this.configService.notificationsPageConfig;

  updateConfig(key: string, value: any) {
    this.configService.updateNotificationsPageConfig({ [key]: value });
  }
}
