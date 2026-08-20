import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideUserRound } from '@lucide/angular';

export interface UserProfile {
  name: string;
  email: string;
  joinedAt: string;
}

@Component({
  selector: 'app-account-profile-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './account-profile-card.component.html',
  styleUrl: './account-profile-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountProfileCardComponent {
  @Input({ required: true }) user!: UserProfile;

  readonly userRoundIcon = LucideUserRound;
}
