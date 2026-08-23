import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';

@Component({
  selector: 'app-bundles-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bundles-page-editor.component.html',
  styleUrl: './bundles-page-editor.component.css'
})
export class BundlesPageEditorComponent {
  private configService = inject(DashboardConfigService);

  get config() {
    return this.configService.bundlesPageConfig() || {};
  }

  updateConfig(updates: any) {
    this.configService.bundlesPageConfig.update(c => ({ ...(c || {}), ...updates }));
  }

  addBundle() {
    const bundles = [...(this.config.bundles || [])];
    bundles.push({
      id: Date.now().toString(),
      title: "باقة جديدة",
      description: "",
      productsCount: 1,
      price: "0",
      oldPrice: "",
      discount: "",
      badge: "",
      badgeIcon: "",
      image: ""
    });
    this.updateConfig({ bundles });
  }

  moveBundleUp(index: number) {
    if (index === 0) return;
    const bundles = [...(this.config.bundles || [])];
    [bundles[index], bundles[index-1]] = [bundles[index-1], bundles[index]];
    this.updateConfig({ bundles });
  }

  moveBundleDown(index: number) {
    if (index === (this.config.bundles?.length || 0) - 1) return;
    const bundles = [...(this.config.bundles || [])];
    [bundles[index], bundles[index+1]] = [bundles[index+1], bundles[index]];
    this.updateConfig({ bundles });
  }

  updateBundle(index: number, updates: any) {
    const bundles = [...(this.config.bundles || [])];
    bundles[index] = { ...bundles[index], ...updates };
    this.updateConfig({ bundles });
  }

  removeBundle(index: number) {
    const bundles = [...(this.config.bundles || [])];
    bundles.splice(index, 1);
    this.updateConfig({ bundles });
  }

  toNumber(val: any): number {
    return Number(val);
  }
}
