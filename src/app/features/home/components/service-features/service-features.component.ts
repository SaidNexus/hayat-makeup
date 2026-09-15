import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LucideDynamicIcon,
  LucideBadgeCheck,
  LucideTruck,
  LucideGift,
  LucideUndo2,
  LucideCreditCard,
  LucidePackage,
  LucideIcon,
} from '@lucide/angular';
import { LocalizeFieldPipe } from '../../../../shared/pipes/localize-field.pipe';

export interface ProcessedBenefit {
  id: string;
  icon: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
}

@Component({
  selector: 'app-service-features',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon, LocalizeFieldPipe],
  templateUrl: './service-features.component.html',
  styleUrl: './service-features.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceFeaturesComponent {
  @Input() config?: any;

  readonly iconMap: Record<string, LucideIcon> = {
    BadgeCheck: LucideBadgeCheck,
    Truck: LucideTruck,
    Gift: LucideGift,
    Undo2: LucideUndo2,
    CreditCard: LucideCreditCard,
    Package: LucidePackage,
  };

  get benefitsList(): any[] {
    if (this.config?.benefits && this.config.benefits.length > 0) {
      return this.config.benefits.filter((b: any) => b.enabled !== false);
    }
    return [
      { text: 'دفع آمن وسريع\nخيارات متعددة', textAr: 'دفع آمن وسريع\nخيارات متعددة', textEn: 'Secure Payment\nMultiple Options', icon: 'CreditCard' },
      { text: 'توصيل سريع\nلكافة المناطق', textAr: 'توصيل سريع\nلكافة المناطق', textEn: 'Fast Delivery\nAll Regions', icon: 'Truck' },
      { text: 'منتجات أصلية 100%\nمعتمدة ومضمونة', textAr: 'منتجات أصلية 100%\nمعتمدة ومضمونة', textEn: '100% Original\nGuaranteed', icon: 'BadgeCheck' },
    ];
  }

  get processedBenefits(): ProcessedBenefit[] {
    const list = this.benefitsList;
    return list.map((item, idx) => {
      let rawEn = (item.textEn || item.text || '').trim();
      let rawAr = (item.textAr || item.text || '').trim();

      // Normalize verbose legacy English phrases to concise, clean versions
      rawEn = rawEn
        .replace(/Fast & Secure Payment/gi, 'Secure Payment')
        .replace(/Fast Express Delivery/gi, 'Fast Delivery')
        .replace(/100% Original Products/gi, '100% Original')
        .replace(/Multiple payment options/gi, 'Multiple Options')
        .replace(/To all cities and regions/gi, 'All Regions')
        .replace(/Certified and guaranteed/gi, 'Guaranteed');

      const linesEn = rawEn.split('\n').map((s: string) => s.trim()).filter(Boolean);
      const linesAr = rawAr.split('\n').map((s: string) => s.trim()).filter(Boolean);

      const titleEn = item.titleEn || linesEn[0] || 'Feature';
      const subtitleEn = item.subtitleEn || linesEn[1] || '';

      const titleAr = item.titleAr || linesAr[0] || 'الميزة';
      const subtitleAr = item.subtitleAr || linesAr[1] || '';

      return {
        id: item.id || `benefit-${idx}`,
        icon: item.icon || 'BadgeCheck',
        titleAr,
        titleEn,
        subtitleAr,
        subtitleEn,
      };
    });
  }

  getIcon(iconName?: string): LucideIcon {
    if (iconName && this.iconMap[iconName]) {
      return this.iconMap[iconName];
    }
    return LucideBadgeCheck;
  }
}
