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

  get gridClass(): string {
    const count = this.processedBenefits.length;
    if (count === 3) {
      return 'grid grid-cols-3 divide-x divide-gray-100 rtl:divide-x-reverse gap-y-0';
    }
    if (count === 4) {
      return 'grid grid-cols-2 sm:grid-cols-4 gap-y-3 sm:gap-y-0 sm:divide-x sm:divide-gray-100 sm:rtl:divide-x-reverse';
    }
    if (count === 2) {
      return 'grid grid-cols-2 divide-x divide-gray-100 rtl:divide-x-reverse gap-y-0';
    }
    if (count === 1) {
      return 'grid grid-cols-1';
    }
    return 'grid grid-cols-2 sm:grid-cols-4 gap-y-3 sm:gap-y-0 sm:divide-x sm:divide-gray-100 sm:rtl:divide-x-reverse';
  }

  get processedBenefits(): ProcessedBenefit[] {
    const list = this.benefitsList;
    return list.map((item, idx) => {
      let rawEn = (item.textEn || item.text || '').trim();
      let rawAr = (item.textAr || item.text || '').trim();

      // Normalize any newline variations
      rawEn = rawEn.replace(/\\n/g, '\n').replace(/\r\n/g, '\n').replace(/<br\s*\/?>/gi, '\n');
      rawAr = rawAr.replace(/\\n/g, '\n').replace(/\r\n/g, '\n').replace(/<br\s*\/?>/gi, '\n');

      // Normalize unspaced concatenations or legacy verbose phrases
      rawEn = rawEn
        .replace(/Fast DeliveryAll Regions/gi, 'Fast Delivery\nAll Regions')
        .replace(/Fast Delivery All Regions/gi, 'Fast Delivery\nAll Regions')
        .replace(/Fast Express Delivery\s*(?:To all cities and regions|All Regions)?/gi, 'Fast Delivery\nAll Regions')
        .replace(/Fast & Secure Payment\s*(?:Multiple payment options|Multiple Options)?/gi, 'Secure Payment\nMultiple Options')
        .replace(/Secure PaymentMultiple Options/gi, 'Secure Payment\nMultiple Options')
        .replace(/100% Original Products\s*(?:Certified and guaranteed|Guaranteed)?/gi, '100% Original\nGuaranteed')
        .replace(/100% OriginalGuaranteed/gi, '100% Original\nGuaranteed')
        .replace(/Multiple payment options/gi, 'Multiple Options')
        .replace(/To all cities and regions/gi, 'All Regions')
        .replace(/Certified and guaranteed/gi, 'Guaranteed');

      const linesEn = rawEn.split('\n').map((s: string) => s.trim()).filter(Boolean);
      const linesAr = rawAr.split('\n').map((s: string) => s.trim()).filter(Boolean);

      let titleEn = (item.titleEn || linesEn[0] || '').trim();
      let subtitleEn = (item.subtitleEn || linesEn[1] || '').trim();

      // If titleEn itself has concatenated words, clean it
      if (titleEn.toLowerCase().includes('fast deliveryall regions')) {
        titleEn = 'Fast Delivery';
        if (!subtitleEn) subtitleEn = 'All Regions';
      } else if (titleEn.toLowerCase().includes('secure paymentmultiple options')) {
        titleEn = 'Secure Payment';
        if (!subtitleEn) subtitleEn = 'Multiple Options';
      } else if (titleEn.toLowerCase().includes('100% originalguaranteed')) {
        titleEn = '100% Original';
        if (!subtitleEn) subtitleEn = 'Guaranteed';
      }

      let titleAr = (item.titleAr || linesAr[0] || '').trim();
      let subtitleAr = (item.subtitleAr || linesAr[1] || '').trim();

      const icon = item.icon || 'BadgeCheck';

      // Smart bilingual fallbacks according to icon or content to prevent mixed languages
      if (!titleEn) {
        if (icon === 'CreditCard' || titleAr.includes('دفع')) titleEn = 'Secure Payment';
        else if (icon === 'Truck' || titleAr.includes('توصيل')) titleEn = 'Fast Delivery';
        else if (icon === 'BadgeCheck' || titleAr.includes('أصلية')) titleEn = '100% Original';
        else if (icon === 'Undo2' || titleAr.includes('إرجاع')) titleEn = 'Easy Return';
        else if (icon === 'Gift' || titleAr.includes('تغليف')) titleEn = 'Luxury Packaging';
        else titleEn = 'Store Benefit';
      }

      if (!subtitleEn) {
        if (icon === 'CreditCard' || subtitleAr.includes('دفع') || subtitleAr.includes('خيارات')) subtitleEn = 'Multiple Options';
        else if (icon === 'Truck' || subtitleAr.includes('مناطق') || subtitleAr.includes('مدن')) subtitleEn = 'All Regions';
        else if (icon === 'BadgeCheck' || subtitleAr.includes('مضمون') || subtitleAr.includes('معتمد')) subtitleEn = 'Guaranteed';
        else if (icon === 'Undo2') subtitleEn = 'Within 14 Days';
        else if (icon === 'Gift') subtitleEn = 'Special Wrap';
      }

      if (!titleAr) {
        if (icon === 'CreditCard') titleAr = 'دفع آمن';
        else if (icon === 'Truck') titleAr = 'توصيل سريع';
        else if (icon === 'BadgeCheck') titleAr = 'منتجات أصلية 100%';
        else if (icon === 'Undo2') titleAr = 'إرجاع سهل';
        else if (icon === 'Gift') titleAr = 'تغليف فاخر';
        else titleAr = 'ميزة إضافية';
      }

      if (!subtitleAr) {
        if (icon === 'CreditCard') subtitleAr = 'خيارات متعددة';
        else if (icon === 'Truck') subtitleAr = 'لكافة المناطق';
        else if (icon === 'BadgeCheck') subtitleAr = 'معتمدة ومضمونة';
        else if (icon === 'Undo2') subtitleAr = 'خلال 14 يوماً';
        else if (icon === 'Gift') subtitleAr = 'تغليف هدايا خاص';
      }

      return {
        id: item.id || `benefit-${idx}`,
        icon,
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
