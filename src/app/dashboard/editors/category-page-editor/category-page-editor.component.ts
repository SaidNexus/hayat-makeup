import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-category-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-page-editor.component.html',
  styleUrl: './category-page-editor.component.css'
})
export class CategoryPageEditorComponent {
  private configService = inject(DashboardConfigService);

  get config() {
    return this.configService.categoryPageConfig();
  }

  updateConfig(updates: Partial<any>) {
    this.configService.categoryPageConfig.update(config => ({
      ...config,
      ...updates
    }));
  }
}
