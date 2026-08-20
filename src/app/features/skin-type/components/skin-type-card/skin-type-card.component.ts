import { Component, Input, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import {
  LucideDynamicIcon,
  LucideChevronLeft,
  LucideDroplets,
  LucideFeather,
  LucideSparkles,
  LucideWaves,
  LucideIcon,
} from '@lucide/angular';

export interface SkinTypeItem {
  id: string;
  title: string;
  description: string;
  image: string;
  products: string[];
}

const TYPE_ICONS: Record<string, LucideIcon> = {
  oily: LucideDroplets,
  dry: LucideDroplets,
  combination: LucideSparkles,
  sensitive: LucideFeather,
  acne: LucideWaves,
};

@Component({
  selector: 'app-skin-type-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './skin-type-card.component.html',
  styleUrl: './skin-type-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkinTypeCardComponent {
  @Input({ required: true }) item!: SkinTypeItem;

  private readonly router = inject(Router);

  readonly chevronLeftIcon = LucideChevronLeft;

  get icon(): LucideIcon {
    return TYPE_ICONS[this.item.id] || LucideSparkles;
  }

  navigateToCategory(): void {
    this.router.navigate(['/products'], { queryParams: { category: 'skin' } });
  }
}
