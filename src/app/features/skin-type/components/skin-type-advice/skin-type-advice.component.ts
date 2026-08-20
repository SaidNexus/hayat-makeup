import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideLightbulb,
  LucidePackageOpen,
} from '@lucide/angular';

@Component({
  selector: 'app-skin-type-advice',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './skin-type-advice.component.html',
  styleUrl: './skin-type-advice.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkinTypeAdviceComponent {
  readonly packageIcon = LucidePackageOpen;
  readonly lightbulbIcon = LucideLightbulb;
}
