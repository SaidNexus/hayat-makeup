import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';
import { LucideAngularModule, Trash2 } from 'lucide-angular';

@Component({
  selector: 'app-cart-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './cart-page-editor.component.html'
})
export class CartPageEditorComponent {
  private configService = inject(DashboardConfigService);
  readonly TrashIcon = Trash2;

  get config() {
    return this.configService.cartPageConfig();
  }

  updateConfig(updates: any) {
    this.configService.cartPageConfig.update(config => ({ ...config, ...updates }));
  }

  addTrustBadge() {
    const badges = [...(this.config.trustBadges || [])];
    badges.push({ 
      id: "t-" + Date.now(), 
      icon: "BadgeCheck", 
      title: "ميزة جديدة", 
      subtitle: "تفاصيل الميزة" 
    });
    this.updateConfig({ trustBadges: badges });
  }

  updateTrustBadge(index: number, updates: any) {
    const badges = [...(this.config.trustBadges || [])];
    badges[index] = { ...badges[index], ...updates };
    this.updateConfig({ trustBadges: badges });
  }

  removeTrustBadge(index: number) {
    const badges = [...(this.config.trustBadges || [])];
    badges.splice(index, 1);
    this.updateConfig({ trustBadges: badges });
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }
}
