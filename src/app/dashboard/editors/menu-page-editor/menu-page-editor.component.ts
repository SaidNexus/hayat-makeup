import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Eye, EyeOff } from 'lucide-angular';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-menu-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './menu-page-editor.component.html',
  styleUrls: ['./menu-page-editor.component.css']
})
export class MenuPageEditorComponent {
  Eye = Eye;
  EyeOff = EyeOff;

  constructor(private configService: DashboardConfigService) {}

  get config() {
    return this.configService.menuPageConfig();
  }

  handleToggleMenuItem(id: string) {
    this.configService.menuPageConfig.update(prev => ({
      ...prev,
      menuItems: prev.menuItems.map((item: any) =>
        item.id === id ? { ...item, visible: !item.visible } : item
      ),
    }));
  }

  handleChangeMenuItem(id: string, label: string) {
    this.configService.menuPageConfig.update(prev => ({
      ...prev,
      menuItems: prev.menuItems.map((item: any) =>
        item.id === id ? { ...item, label } : item
      ),
    }));
  }

  handleChange(key: string, value: any) {
    this.configService.menuPageConfig.update(prev => ({ ...prev, [key]: value }));
  }
}
