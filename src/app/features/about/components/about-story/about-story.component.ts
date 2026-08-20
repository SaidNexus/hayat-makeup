import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideUsersRound } from '@lucide/angular';

@Component({
  selector: 'app-about-story',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './about-story.component.html',
  styleUrl: './about-story.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutStoryComponent {
  readonly usersRoundIcon = LucideUsersRound;
}
