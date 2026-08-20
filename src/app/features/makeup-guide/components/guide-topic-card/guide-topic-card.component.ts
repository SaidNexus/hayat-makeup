import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { LucideDynamicIcon, LucideChevronLeft, LucideIcon } from '@lucide/angular';

export interface GuideTopic {
  id: number | string;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

@Component({
  selector: 'app-guide-topic-card',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './guide-topic-card.component.html',
  styleUrl: './guide-topic-card.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuideTopicCardComponent {
  @Input({ required: true }) topic!: GuideTopic;

  readonly chevronLeftIcon = LucideChevronLeft;
}
