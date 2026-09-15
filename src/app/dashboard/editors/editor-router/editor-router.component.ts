import { Component, Input, OnChanges, SimpleChanges, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// Group 1
import { HomePageEditorComponent } from '../home-page-editor/home-page-editor.component';
import { BestSellersPageEditorComponent } from '../best-sellers-page-editor/best-sellers-page-editor.component';
import { NewArrivalsPageEditorComponent } from '../new-arrivals-page-editor/new-arrivals-page-editor.component';
import { CategoriesPageEditorComponent } from '../categories-page-editor/categories-page-editor.component';

// Group 2
import { SkinQuizPageEditorComponent } from '../skin-quiz-page-editor/skin-quiz-page-editor.component';
import { SkinTypesPageEditorComponent } from '../skin-types-page-editor/skin-types-page-editor.component';
import { FacesPageEditorComponent } from '../faces-page-editor/faces-page-editor.component';
import { BundlesPageEditorComponent } from '../bundles-page-editor/bundles-page-editor.component';

// Group 3
import { ProductPageEditorComponent } from '../product-page-editor/product-page-editor.component';
import { CartPageEditorComponent } from '../cart-page-editor/cart-page-editor.component';
import { CheckoutPageEditorComponent } from '../checkout-page-editor/checkout-page-editor.component';
import { WishlistPageEditorComponent } from '../wishlist-page-editor/wishlist-page-editor.component';

// Group 4
import { FaqPageEditorComponent } from '../faq-page-editor/faq-page-editor.component';
import { AccountPageEditorComponent } from '../account-page-editor/account-page-editor.component';
import { OffersPageEditorComponent } from '../offers-page-editor/offers-page-editor.component';

// Group 5
import { SearchPageEditorComponent } from '../search-page-editor/search-page-editor.component';
import { TrackOrderPageEditorComponent } from '../track-order-page-editor/track-order-page-editor.component';
import { CategoryPageEditorComponent } from '../category-page-editor/category-page-editor.component';
import { PoliciesPageEditorComponent } from '../policies-page-editor/policies-page-editor.component';

// Group 6
import { AboutPageEditorComponent } from '../about-page-editor/about-page-editor.component';
import { AllShapersPageEditorComponent } from '../all-shapers-page-editor/all-shapers-page-editor.component';
import { ContactPageEditorComponent } from '../contact-page-editor/contact-page-editor.component';
import { FavoritesPageEditorComponent } from '../favorites-page-editor/favorites-page-editor.component';

// Group 7
import { LoginPageEditorComponent } from '../login-page-editor/login-page-editor.component';
import { MyOrdersPageEditorComponent } from '../my-orders-page-editor/my-orders-page-editor.component';
import { NotificationsPageEditorComponent } from '../notifications-page-editor/notifications-page-editor.component';
import { OrderConfirmationPageEditorComponent } from '../order-confirmation-page-editor/order-confirmation-page-editor.component';

// Group 8
import { ProfilePageEditorComponent } from '../profile-page-editor/profile-page-editor.component';
import { SizeGuidePageEditorComponent } from '../size-guide-page-editor/size-guide-page-editor.component';

@Component({
  selector: 'app-editor-router',
  standalone: true,
  imports: [
    CommonModule, 
    HomePageEditorComponent, BestSellersPageEditorComponent, NewArrivalsPageEditorComponent, CategoriesPageEditorComponent,
    SkinQuizPageEditorComponent, SkinTypesPageEditorComponent, FacesPageEditorComponent, BundlesPageEditorComponent,
    ProductPageEditorComponent, CartPageEditorComponent, CheckoutPageEditorComponent, WishlistPageEditorComponent,
    FaqPageEditorComponent, AccountPageEditorComponent, OffersPageEditorComponent,
    SearchPageEditorComponent, TrackOrderPageEditorComponent, CategoryPageEditorComponent, PoliciesPageEditorComponent,
    AboutPageEditorComponent, AllShapersPageEditorComponent, ContactPageEditorComponent, FavoritesPageEditorComponent,
    LoginPageEditorComponent, MyOrdersPageEditorComponent, NotificationsPageEditorComponent, OrderConfirmationPageEditorComponent,
    ProfilePageEditorComponent, SizeGuidePageEditorComponent
  ],
  templateUrl: './editor-router.component.html',
  styleUrls: ['./editor-router.component.css']
})
export class EditorRouterComponent implements OnChanges {
  @Input() selectedPageId: string = '';

  isTransitioning = false;
  private cdr = inject(ChangeDetectorRef);

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedPageId'] && !changes['selectedPageId'].isFirstChange()) {
      this.isTransitioning = true;
      this.cdr.markForCheck();
      setTimeout(() => {
        this.isTransitioning = false;
        this.cdr.markForCheck();
      }, 150);
    }
  }
}
