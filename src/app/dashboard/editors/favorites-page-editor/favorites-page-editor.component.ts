import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, ShieldCheck, Trash2 } from 'lucide-angular';
import { SectionCardComponent } from '../components/section-card/section-card.component';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-favorites-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule, SectionCardComponent],
  templateUrl: './favorites-page-editor.component.html',
  styleUrl: './favorites-page-editor.component.css'
})
export class FavoritesPageEditorComponent {
  private configService = inject(DashboardConfigService);
  
  get config() {
    return this.configService.favoritesPageConfig();
  }

  readonly ShieldCheck = ShieldCheck;
  readonly Trash2 = Trash2;

  updateConfig(updates: Partial<any>) {
    this.configService.favoritesPageConfig.update(config => ({ ...config, ...updates }));
  }

  addBadge() {
    const badges = [...(this.config.trustBadges || [])];
    badges.push({ id: "b-" + Date.now(), icon: "ShieldCheck", title: "ميزة جديدة", subtitle: "وصف قصير" });
    this.updateConfig({ trustBadges: badges });
  }

  updateBadge(index: number, updates: any) {
    const badges = [...(this.config.trustBadges || [])];
    badges[index] = { ...badges[index], ...updates };
    this.updateConfig({ trustBadges: badges });
  }

  removeBadge(index: number) {
    const badges = [...(this.config.trustBadges || [])];
    badges.splice(index, 1);
    this.updateConfig({ trustBadges: badges });
  }

  noop() {}
}
