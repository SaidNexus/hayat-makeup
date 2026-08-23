import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';
import { LucideAngularModule, Edit2, Image as ImageIcon } from 'lucide-angular';

@Component({
  selector: 'app-size-guide-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './size-guide-page-editor.component.html',
  styleUrl: './size-guide-page-editor.component.css'
})
export class SizeGuidePageEditorComponent {
  private dashboardConfigService = inject(DashboardConfigService);
  
  readonly Edit2 = Edit2;
  readonly ImageIcon = ImageIcon;

  get config() {
    return this.dashboardConfigService.sizeGuidePageConfig();
  }

  updateConfig(key: string, value: any) {
    this.dashboardConfigService.sizeGuidePageConfig.update(config => ({
      ...config,
      [key]: value
    }));
  }

  promptImage() {
    const url = window.prompt("أدخل رابط الصورة الجديدة:", this.config.heroImage || "");
    if (url !== null) this.updateConfig("heroImage", url);
  }
}
