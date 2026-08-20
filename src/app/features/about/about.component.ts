import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { AboutHeroComponent } from './components/about-hero/about-hero.component';
import { AboutMissionComponent } from './components/about-mission/about-mission.component';
import { AboutValuesComponent } from './components/about-values/about-values.component';
import { AboutStoryComponent } from './components/about-story/about-story.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutHeroComponent,
    AboutMissionComponent,
    AboutValuesComponent,
    AboutStoryComponent,
    MobileBottomNavComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
