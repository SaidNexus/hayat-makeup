import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideUserRound } from '@lucide/angular';
import { TranslatePipe } from '../../../../core/i18n/translate.pipe';

export interface UserProfile {
  name: string;
  email: string;
  joinedAt: string;
}

@Component({
  selector: 'app-account-profile-card',
  standalone: true,
  imports: [LucideDynamicIcon, TranslatePipe],
  templateUrl: './account-profile-card.component.html',
  styleUrl: './account-profile-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountProfileCardComponent {
  @Input({ required: true }) user!: UserProfile;

  readonly userRoundIcon = LucideUserRound;
}
