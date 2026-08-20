import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import {
  LucideDynamicIcon,
  LucideDroplets,
  LucideFeather,
  LucideSparkles,
  LucideSplit,
  LucideWaves,
  LucideIcon,
} from '@lucide/angular';

export interface SkinTypeChoice {
  id: string;
  label: string;
  description: string;
}

const TYPE_ICONS: Record<string, LucideIcon> = {
  normal: LucideSparkles,
  dry: LucideDroplets,
  oily: LucideWaves,
  combination: LucideSplit,
  sensitive: LucideFeather,
};

@Component({
  selector: 'app-skin-type-option',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './skin-type-option.component.html',
  styleUrl: './skin-type-option.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkinTypeOptionComponent {
  @Input({ required: true }) type!: SkinTypeChoice;
  @Input() selected = false;
  @Output() selectType = new EventEmitter<void>();

  get icon(): LucideIcon {
    return TYPE_ICONS[this.type.id] || LucideSparkles;
  }

  onClick(): void {
    this.selectType.emit();
  }
}
