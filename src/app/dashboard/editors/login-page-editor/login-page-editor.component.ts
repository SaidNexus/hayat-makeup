import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Edit2, Image as ImageIcon, Trash2 } from 'lucide-angular';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';
import { AddItemButtonComponent } from '../components/add-item-button/add-item-button.component';

@Component({
  selector: 'app-login-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, AddItemButtonComponent],
  templateUrl: './login-page-editor.component.html',
  styleUrl: './login-page-editor.component.css'
})
export class LoginPageEditorComponent {
  configService = inject(DashboardConfigService);
  config = this.configService.loginPageConfig;

  // Icons
  Edit2 = Edit2;
  ImageIcon = ImageIcon;
  Trash2 = Trash2;

  updateConfig(key: string, value: any) {
    this.configService.updateLoginPageConfig({ [key]: value });
  }

  addBenefit() {
    const newBenefit = {
      id: crypto.randomUUID(),
      title: 'ميزة جديدة',
      line1: 'وصف',
      line2: 'وصف'
    };
    this.updateConfig('benefits', [...this.config().benefits, newBenefit]);
  }

  updateBenefit(id: string, updates: any) {
    this.updateConfig(
      'benefits',
      this.config().benefits.map((b: any) => (b.id === id ? { ...b, ...updates } : b))
    );
  }

  deleteBenefit(id: string) {
    this.updateConfig(
      'benefits',
      this.config().benefits.filter((b: any) => b.id !== id)
    );
  }

  changeHeroImage() {
    const url = window.prompt('أدخل رابط الصورة الجديدة:', this.config().heroImage || '');
    if (url !== null) this.updateConfig('heroImage', url);
  }
}
