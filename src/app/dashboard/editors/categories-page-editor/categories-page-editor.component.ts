import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-categories-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories-page-editor.component.html',
  styleUrl: './categories-page-editor.component.css'
})
export class CategoriesPageEditorComponent {
  configService = inject(DashboardConfigService);

  get config() {
    return this.configService.categoriesPageConfig();
  }

  updateConfig(key: keyof typeof this.config, value: any) {
    this.configService.updateCategoriesPageConfig({ [key]: value });
  }
}
