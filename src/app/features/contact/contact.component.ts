import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { ContactSupportComponent } from './components/contact-support/contact-support.component';
import { ContactMethodsComponent } from './components/contact-methods/contact-methods.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    ContactSupportComponent,
    ContactMethodsComponent,
    ContactFormComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
