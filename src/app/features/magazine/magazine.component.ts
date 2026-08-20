import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../../shared/components/layout/header/header.component';
import { MagazineTabsComponent } from './components/magazine-tabs/magazine-tabs.component';
import {
  FeaturedArticleComponent,
  FeaturedArticleData,
} from './components/featured-article/featured-article.component';
import { LatestArticlesComponent } from './components/latest-articles/latest-articles.component';
import { MobileBottomNavComponent } from '../../shared/components/navigation/mobile-bottom-nav/mobile-bottom-nav.component';

export const FEATURED_ARTICLE_DATA: FeaturedArticleData = {
  title: 'روتين العناية بالبشرة المتوهجة',
  description: 'خطوات بسيطة لبشرة صحية ومشرقة كل يوم.',
  image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248271/hayat-makeup/magazine/featured-skin.png',
};

@Component({
  selector: 'app-magazine',
  standalone: true,
  imports: [
    HeaderComponent,
    MagazineTabsComponent,
    FeaturedArticleComponent,
    LatestArticlesComponent,
    MobileBottomNavComponent,
  ],
  templateUrl: './magazine.component.html',
  styleUrl: './magazine.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MagazineComponent {
  activeTab = signal<string>('كل المقالات');
  readonly featuredArticle = signal<FeaturedArticleData>(FEATURED_ARTICLE_DATA);

  onTabChange(tab: string): void {
    this.activeTab.set(tab);
  }

  showAll(): void {
    this.activeTab.set('كل المقالات');
  }
}
