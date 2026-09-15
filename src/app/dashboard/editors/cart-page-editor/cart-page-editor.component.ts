import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardConfigService } from '../../../core/services/dashboard-config.service';
import { PreviewScrollService } from '../../../core/services/preview-scroll.service';
import { SectionCardComponent } from '../components/section-card/section-card.component';
import { BilingualInputComponent } from '../../components/bilingual-input/bilingual-input.component';
import { LucideAngularModule, Trash2 } from 'lucide-angular';

@Component({
  selector: 'app-cart-page-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionCardComponent, BilingualInputComponent, LucideAngularModule],
  templateUrl: './cart-page-editor.component.html'
})
export class CartPageEditorComponent {
  private configService = inject(DashboardConfigService);
  private previewScrollService = inject(PreviewScrollService);
  readonly TrashIcon = Trash2;

  get config() {
    return this.configService.cartPageConfig();
  }

  updateConfig(updates: any) {
    this.configService.cartPageConfig.update(config => ({ ...config, ...updates }));
  }

  updateBilingualField(field: string, lang: 'Ar' | 'En', value: string) {
    const key = `${field}${lang}`;
    const updates: any = { [key]: value };
    if (lang === 'Ar') {
      updates[field] = value;
    }
    this.updateConfig(updates);
  }

  onCardClick() {
    this.previewScrollService.scrollToSection({
      sectionType: 'cart',
      selector: 'app-cart, .cart-container'
    });
  }

  addTrustBadge() {
    const badges = [...(this.config.trustBadges || [])];
    badges.push({ 
      id: "t-" + Date.now(), 
      icon: "BadgeCheck", 
      title: "ميزة جديدة", 
      titleAr: "ميزة جديدة",
      titleEn: "New Feature",
      subtitle: "تفاصيل الميزة",
      subtitleAr: "تفاصيل الميزة",
      subtitleEn: "Feature details"
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
