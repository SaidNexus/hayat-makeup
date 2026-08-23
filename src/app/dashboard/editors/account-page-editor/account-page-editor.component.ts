import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Eye, EyeOff } from 'lucide-angular';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-account-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './account-page-editor.component.html',
  styleUrls: ['./account-page-editor.component.css']
})
export class AccountPageEditorComponent {
  Eye = Eye;
  EyeOff = EyeOff;

  constructor(private configService: DashboardConfigService) {}

  get config() {
    return this.configService.accountPageConfig();
  }

  handleChange(key: string, value: any) {
    this.configService.accountPageConfig.update(prev => ({ ...prev, [key]: value }));
  }

  handleToggleMenuItem(id: string) {
    this.configService.accountPageConfig.update(prev => ({
      ...prev,
      menuItems: prev.menuItems.map((item: any) => 
        item.id === id ? { ...item, visible: !item.visible } : item
      )
    }));
  }

  handleChangeMenuItem(id: string, label: string) {
    this.configService.accountPageConfig.update(prev => ({
      ...prev,
      menuItems: prev.menuItems.map((item: any) => 
        item.id === id ? { ...item, label } : item
      )
    }));
  }
}
