import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideHeart } from '@lucide/angular';

@Component({
  selector: 'app-about-mission',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './about-mission.component.html',
  styleUrl: './about-mission.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMissionComponent {
  readonly heartIcon = LucideHeart;
}
