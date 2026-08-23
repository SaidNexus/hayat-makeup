import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, ShieldCheck, Heart, Star, Target, Check, Trash2 } from 'lucide-angular';
import { SectionCardComponent } from '../components/section-card/section-card.component';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-about-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, SectionCardComponent],
  templateUrl: './about-page-editor.component.html',
  styleUrl: './about-page-editor.component.css'
})
export class AboutPageEditorComponent {
  private configService = inject(DashboardConfigService);
  
  get config() {
    return this.configService.aboutPageConfig();
  }

  readonly ShieldCheck = ShieldCheck;
  readonly Heart = Heart;
  readonly Star = Star;
  readonly Target = Target;
  readonly Check = Check;
  readonly Trash2 = Trash2;

  updateConfig(updates: Partial<any>) {
    this.configService.aboutPageConfig.update(config => ({ ...config, ...updates }));
  }

  addReason() {
    const list = [...(this.config.reasons || [])];
    list.push({ id: "r-" + Date.now(), icon: "Star", title: "ميزة جديدة", text: "وصف قصير" });
    this.updateConfig({ reasons: list });
  }

  updateReason(index: number, updates: any) {
    const list = [...(this.config.reasons || [])];
    list[index] = { ...list[index], ...updates };
    this.updateConfig({ reasons: list });
  }

  removeReason(index: number) {
    const list = [...(this.config.reasons || [])];
    list.splice(index, 1);
    this.updateConfig({ reasons: list });
  }

  addValue() {
    const list = [...(this.config.values || [])];
    list.push({ id: "v-" + Date.now(), icon: "Star", label: "قيمة جديدة" });
    this.updateConfig({ values: list });
  }

  updateValue(index: number, updates: any) {
    const list = [...(this.config.values || [])];
    list[index] = { ...list[index], ...updates };
    this.updateConfig({ values: list });
  }

  removeValue(index: number) {
    const list = [...(this.config.values || [])];
    list.splice(index, 1);
    this.updateConfig({ values: list });
  }

  addContact() {
    const list = [...(this.config.contacts || [])];
    list.push({ id: "c-" + Date.now(), icon: "phone", label: "طريقة تواصل", link: "#" });
    this.updateConfig({ contacts: list });
  }

  updateContact(index: number, updates: any) {
    const list = [...(this.config.contacts || [])];
    list[index] = { ...list[index], ...updates };
    this.updateConfig({ contacts: list });
  }

  removeContact(index: number) {
    const list = [...(this.config.contacts || [])];
    list.splice(index, 1);
    this.updateConfig({ contacts: list });
  }

  noop() {}
}
