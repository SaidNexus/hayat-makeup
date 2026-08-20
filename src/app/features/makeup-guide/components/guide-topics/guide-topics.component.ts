import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  GuideTopicCardComponent,
  GuideTopic,
} from '../guide-topic-card/guide-topic-card.component';
import {
  LucideBrush,
  LucideWine,
  LucideEye,
  LucideSprayCan,
  LucideSparkles,
  LucideCalculator,
} from '@lucide/angular';

export const GUIDE_TOPICS_DATA: GuideTopic[] = [
  {
    id: 1,
    title: 'ترتيب خطوات المكياج',
    description: 'دليل شامل لخطوات مكياج مثالية تدوم طوال اليوم',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248200/hayat-makeup/guide/makeup-steps.png',
    icon: LucideBrush,
  },
  {
    id: 2,
    title: 'اختيار الفاونديشن',
    description: 'كيف تختارين درجة الفاونديشن المناسبة لبشرتك',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248182/hayat-makeup/guide/foundation.png',
    icon: LucideWine,
  },
  {
    id: 3,
    title: 'رسم الآيلاينر',
    description: 'تقنيات سهلة لرسم آيلاينر مثالي للمبتدئين',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248177/hayat-makeup/guide/eyeliner.png',
    icon: LucideEye,
  },
  {
    id: 4,
    title: 'تثبيت المكياج',
    description: 'أفضل طرق تثبيت المكياج ليبقى ثابتًا لساعات',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248203/hayat-makeup/guide/setting.png',
    icon: LucideSprayCan,
  },
  {
    id: 5,
    title: 'تنظيف الفرش',
    description: 'خطوات بسيطة للحفاظ على نظافة الفرش وأدواتك',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248152/hayat-makeup/guide/brushes.png',
    icon: LucideSparkles,
  },
  {
    id: 6,
    title: 'اختيار الألوان المناسبة',
    description: 'دليلك لاختيار الألوان التي تبرز جمالك وتناسبك',
    image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248159/hayat-makeup/guide/colors.png',
    icon: LucideCalculator,
  },
];

@Component({
  selector: 'app-guide-topics',
  standalone: true,
  imports: [GuideTopicCardComponent],
  templateUrl: './guide-topics.component.html',
  styleUrl: './guide-topics.component.css',
changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuideTopicsComponent {
  readonly topics = GUIDE_TOPICS_DATA;
}
