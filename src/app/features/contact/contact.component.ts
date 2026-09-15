import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { ContactSupportComponent } from './components/contact-support/contact-support.component';
import { ContactMethodsComponent } from './components/contact-methods/contact-methods.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MobileBottomNavComponent,
    ContactSupportComponent,
    ContactMethodsComponent,
    ContactFormComponent,
    TranslatePipe,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
