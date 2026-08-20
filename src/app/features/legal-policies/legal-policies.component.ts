import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  LucideCalendarDays,
  LucideChevronLeft,
  LucideCreditCard,
  LucideDynamicIcon,
  LucideFileText,
  LucideHelpCircle,
  LucideLockKeyhole,
  LucideRotateCcw,
  LucideTruck,
  LucideIcon,
} from '@lucide/angular';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';

export interface PolicyItem {
  id: number;
  title: string;
  icon: LucideIcon;
  to?: string;
}

@Component({
  selector: 'app-legal-policies',
  standalone: true,
  imports: [HeaderComponent, MobileBottomNavComponent, LucideDynamicIcon],
  templateUrl: './legal-policies.component.html',
  styleUrl: './legal-policies.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegalPoliciesComponent {
  private readonly router = inject(Router);

  readonly chevronLeftIcon = LucideChevronLeft;
  readonly calendarDaysIcon = LucideCalendarDays;

  readonly policies: PolicyItem[] = [
    {
      id: 1,
      title: 'سياسة الاستبدال والاسترجاع',
      icon: LucideRotateCcw,
      to: '/return-policy',
    },
    {
      id: 2,
      title: 'سياسة الخصوصية',
      icon: LucideLockKeyhole,
      to: '/privacy-policy',
    },
    {
      id: 3,
      title: 'الشروط والأحكام',
      icon: LucideFileText,
      to: '/terms',
    },
    {
      id: 4,
      title: 'سياسة الشحن',
      icon: LucideTruck,
      to: '/shipping-policy',
    },
    {
      id: 5,
      title: 'سياسة الدفع',
      icon: LucideCreditCard,
    },
    {
      id: 6,
      title: 'الأسئلة المتعلقة بالمنتجات',
      icon: LucideHelpCircle,
    },
  ];

  navigateTo(path?: string): void {
    if (path) {
      this.router.navigateByUrl(path);
    }
  }
}
