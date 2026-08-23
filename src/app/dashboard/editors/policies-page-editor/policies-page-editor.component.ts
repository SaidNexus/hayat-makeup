import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';
import { SectionCardComponent } from '../components/section-card/section-card.component';
import { LucideAngularModule, Trash2 } from 'lucide-angular';

@Component({
  selector: 'app-policies-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionCardComponent, LucideAngularModule],
  templateUrl: './policies-page-editor.component.html',
  styleUrl: './policies-page-editor.component.css'
})
export class PoliciesPageEditorComponent {
  private configService = inject(DashboardConfigService);
  Trash2Icon = Trash2;

  get config() {
    return this.configService.policiesPageConfig();
  }

  updateConfig(updates: Partial<any>) {
    this.configService.policiesPageConfig.update(config => ({
      ...config,
      ...updates
    }));
  }

  get addAction() {
    return { label: 'إضافة سياسة', onClick: () => this.addPolicy() };
  }

  addPolicy() {
    const policies = [...(this.config.policies || [])];
    policies.push({
      key: "p-" + Date.now(),
      gridTitle: "سياسة جديدة",
      gridDescription: "وصف السياسة الجديدة",
      icon: "FileText",
      title: "عنوان تفاصيل السياسة",
      subtitle: "وصف طويل",
      heroIcon: "FileText",
      showWhatsApp: true,
      sections: []
    });
    this.updateConfig({ policies });
  }

  updatePolicy(index: number, updates: Partial<any>) {
    const policies = [...this.config.policies];
    policies[index] = { ...policies[index], ...updates };
    this.updateConfig({ policies });
  }

  removePolicy(index: number) {
    const policies = [...this.config.policies];
    policies.splice(index, 1);
    this.updateConfig({ policies });
  }
}
