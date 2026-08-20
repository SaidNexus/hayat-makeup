import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideClock3,
  LucideCamera,
  LucideMail,
  LucideMessageCircle,
  LucidePhone,
  LucideIcon,
} from '@lucide/angular';
import { ContactMethodCardComponent } from '../contact-method-card/contact-method-card.component';

export interface ContactMethodItem {
  id: number;
  title: string;
  value: string;
  icon: LucideIcon;
  wide: boolean;
  href?: string;
}

export const CONTACT_PHONE = '+966 55 123 4567';
export const CONTACT_EMAIL = 'hello@hayatmakeup.com';

@Component({
  selector: 'app-contact-methods',
  standalone: true,
  imports: [ContactMethodCardComponent],
  templateUrl: './contact-methods.component.html',
  styleUrl: './contact-methods.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactMethodsComponent {
  readonly methods: ContactMethodItem[] = [
    {
      id: 3,
      title: 'واتساب',
      value: CONTACT_PHONE,
      icon: LucideMessageCircle,
      wide: false,
      href: 'https://wa.me/966551234567',
    },
    {
      id: 2,
      title: 'اتصال',
      value: CONTACT_PHONE,
      icon: LucidePhone,
      wide: false,
      href: 'tel:+966551234567',
    },
    {
      id: 1,
      title: 'البريد الإلكتروني',
      value: CONTACT_EMAIL,
      icon: LucideMail,
      wide: false,
      href: 'mailto:hello@hayatmakeup.com',
    },
    {
      id: 5,
      title: 'إنستغرام',
      value: '@hayat.makeup',
      icon: LucideCamera,
      wide: true,
      href: 'https://instagram.com/hayat.makeup',
    },
    {
      id: 4,
      title: 'ساعات العمل',
      value: 'يوميًا من 10:00 ص – 10:00 م',
      icon: LucideClock3,
      wide: true,
    },
  ];

  get standardMethods(): ContactMethodItem[] {
    return this.methods.filter((m) => !m.wide);
  }

  get wideMethods(): ContactMethodItem[] {
    return this.methods.filter((m) => m.wide);
  }
}
