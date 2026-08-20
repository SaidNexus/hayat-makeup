import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';
import { MakeupGuideHeroComponent } from './components/makeup-guide-hero/makeup-guide-hero.component';
import { GuideTopicsComponent } from './components/guide-topics/guide-topics.component';
import { MostReadComponent } from './components/most-read/most-read.component';

@Component({
  selector: 'app-makeup-guide',
  standalone: true,
  imports: [
    HeaderComponent,
    MobileBottomNavComponent,
    MakeupGuideHeroComponent,
    GuideTopicsComponent,
    MostReadComponent,
  ],
  templateUrl: './makeup-guide.component.html',
  styleUrl: './makeup-guide.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MakeupGuideComponent {}
