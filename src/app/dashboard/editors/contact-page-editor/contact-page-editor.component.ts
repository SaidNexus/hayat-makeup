import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Edit2, Image as ImageIcon, Trash2 } from 'lucide-angular';
import { AddItemButtonComponent } from '../components/add-item-button/add-item-button.component';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-contact-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, AddItemButtonComponent],
  templateUrl: './contact-page-editor.component.html',
  styleUrl: './contact-page-editor.component.css'
})
export class ContactPageEditorComponent {
  private configService = inject(DashboardConfigService);
  
  get config() {
    return this.configService.contactPageConfig();
  }

  readonly Edit2 = Edit2;
  readonly ImageIcon = ImageIcon;
  readonly Trash2 = Trash2;

  updateConfig(key: string, value: any) {
    this.configService.contactPageConfig.update(config => ({ ...config, [key]: value }));
  }

  changeBanner() {
    const url = window.prompt("أدخل رابط الصورة الجديدة:", this.config.bannerImage || "");
    if (url !== null) this.updateConfig("bannerImage", url);
  }

  addMethod() {
    const newMethod = { id: crypto.randomUUID(), type: "phone", title: "رقم جديد", value: "", link: "" };
    this.updateConfig("contactMethods", [...(this.config.contactMethods || []), newMethod]);
  }

  updateMethod(id: string, updates: any) {
    this.updateConfig("contactMethods", (this.config.contactMethods || []).map((m: any) => m.id === id ? { ...m, ...updates } : m));
  }

  deleteMethod(id: string) {
    this.updateConfig("contactMethods", (this.config.contactMethods || []).filter((m: any) => m.id !== id));
  }
}
