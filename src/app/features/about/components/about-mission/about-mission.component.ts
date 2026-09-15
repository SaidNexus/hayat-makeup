import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideDynamicIcon, LucideHeart } from '@lucide/angular';
import { LocalizeFieldPipe } from '../../../../shared/pipes/localize-field.pipe';

@Component({
  selector: 'app-about-mission',
  standalone: true,
  imports: [CommonModule, LucideDynamicIcon, LocalizeFieldPipe],
  templateUrl: './about-mission.component.html',
  styleUrl: './about-mission.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMissionComponent {
  readonly heartIcon = LucideHeart;
}
