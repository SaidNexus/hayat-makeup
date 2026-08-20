import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideClipboardCheck,
  LucideCookie,
  LucideMail,
  LucideShield,
  LucideUserRound,
  LucideUserRoundPlus,
  LucideUsers,
  LucideIcon,
} from '@lucide/angular';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { PrivacyCardComponent } from './components/privacy-card/privacy-card.component';
import { PrivacyNoticeComponent } from './components/privacy-notice/privacy-notice.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';

export interface PrivacyItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    HeaderComponent,
    PrivacyCardComponent,
    PrivacyNoticeComponent,
    MobileBottomNavComponent,
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicyComponent {
  readonly privacyItems: PrivacyItem[] = [
    {
      title: 'البيانات التي نجمعها',
      description:
        'نجمع معلوماتك مثل الاسم، رقم الهاتف، البريد الإلكتروني، وعنوان الشحن، ومعلومات الطلب والدفع.',
      icon: LucideUserRound,
    },
    {
      title: 'استخدام المعلومات',
      description:
        'نستخدم معلوماتك لتقديم خدماتنا، معالجة الطلبات، تحسين تجربة التسوق، والتواصل معك بشأن طلباتك والعروض.',
      icon: LucideClipboardCheck,
    },
    {
      title: 'حماية البيانات',
      description:
        'نطبق إجراءات أمنية حديثة لحماية بياناتك من الوصول غير المصرح به أو الاستخدام أو الإفصاح أو التعديل.',
      icon: LucideShield,
    },
    {
      title: 'مشاركة البيانات',
      description:
        'لا نشارك بياناتك الشخصية مع أي طرف ثالث إلا في الحالات الضرورية لتقديم الخدمة أو الامتثال للأنظمة.',
      icon: LucideUsers,
    },
    {
      title: 'ملفات تعريف الارتباط',
      description:
        'نستخدم ملفات تعريف الارتباط لتحسين تجربتك في التطبيق وتحليل الأداء وتخصيص المحتوى والعروض.',
      icon: LucideCookie,
    },
    {
      title: 'حقوق المستخدم',
      description:
        'لديك الحق في الوصول إلى بياناتك، تصحيحها، أو طلب حذفها في أي وقت من خلال التواصل معنا.',
      icon: LucideUserRoundPlus,
    },
    {
      title: 'التواصل معنا',
      description:
        'للاستفسارات أو طلبات الخصوصية، يرجى التواصل معنا عبر البريد الإلكتروني أو من خلال صفحة اتصل بنا في التطبيق.',
      icon: LucideMail,
    },
  ];
}
