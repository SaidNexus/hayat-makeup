import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-new-arrivals-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-arrivals-page-editor.component.html',
  styleUrl: './new-arrivals-page-editor.component.css'
})
export class NewArrivalsPageEditorComponent {
  configService = inject(DashboardConfigService);

  get config() {
    return this.configService.newArrivalsPageConfig();
  }

  updateConfig(key: keyof typeof this.config, value: any) {
    this.configService.updateNewArrivalsPageConfig({ [key]: value });
  }
}
