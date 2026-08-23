import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-search-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-page-editor.component.html',
  styleUrl: './search-page-editor.component.css'
})
export class SearchPageEditorComponent {
  private configService = inject(DashboardConfigService);

  get config() {
    return this.configService.searchPageConfig();
  }

  updateConfig(key: string, value: any) {
    this.configService.searchPageConfig.update(config => ({
      ...config,
      [key]: value
    }));
  }
}
