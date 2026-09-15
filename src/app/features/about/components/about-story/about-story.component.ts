import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideDynamicIcon, LucideUsersRound } from '@lucide/angular';
import { LocalizeFieldPipe } from '../../../../shared/pipes/localize-field.pipe';

@Component({
  selector: 'app-about-story',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon, LocalizeFieldPipe],
  templateUrl: './about-story.component.html',
  styleUrl: './about-story.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutStoryComponent {
  readonly usersRoundIcon = LucideUsersRound;
}
