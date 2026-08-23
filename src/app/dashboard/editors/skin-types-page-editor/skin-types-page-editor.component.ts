import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-skin-types-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skin-types-page-editor.component.html',
  styleUrl: './skin-types-page-editor.component.css'
})
export class SkinTypesPageEditorComponent {
  private configService = inject(DashboardConfigService);

  get config() {
    return this.configService.skinTypesPageConfig() || {};
  }

  updateConfig(updates: any) {
    this.configService.skinTypesPageConfig.update(c => ({ ...(c || {}), ...updates }));
  }

  addType() {
    const types = [...(this.config.types || [])];
    types.push({ 
      id: Date.now().toString(), 
      title: "نوع جديد", 
      description: "", 
      icon: "Droplets", 
      iconColor: "#7CA6D8", 
      iconBg: "#F1F7FD", 
      visible: true 
    });
    this.updateConfig({ types });
  }

  moveTypeUp(index: number) {
    if (index === 0) return;
    const types = [...(this.config.types || [])];
    [types[index], types[index-1]] = [types[index-1], types[index]];
    this.updateConfig({ types });
  }

  moveTypeDown(index: number) {
    if (index === (this.config.types?.length || 0) - 1) return;
    const types = [...(this.config.types || [])];
    [types[index], types[index+1]] = [types[index+1], types[index]];
    this.updateConfig({ types });
  }

  updateType(index: number, updates: any) {
    const types = [...(this.config.types || [])];
    types[index] = { ...types[index], ...updates };
    this.updateConfig({ types });
  }

  removeType(index: number) {
    const types = [...(this.config.types || [])];
    types.splice(index, 1);
    this.updateConfig({ types });
  }
}
