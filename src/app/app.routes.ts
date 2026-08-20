import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./features/menu/menu.component').then((m) => m.MenuComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/all-products/all-products.component').then(
        (m) => m.AllProductsComponent
      ),
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./features/categories/categories.component').then(
        (m) => m.CategoriesComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./features/checkout/checkout.component').then(
        (m) => m.CheckoutComponent
      ),
  },
  {
    path: 'order-success',
    loadComponent: () =>
      import('./features/order-success/order-success.component').then(
        (m) => m.OrderSuccessComponent
      ),
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./features/terms/terms-and-conditions.component').then(
        (m) => m.TermsAndConditionsComponent
      ),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./features/privacy-policy/privacy-policy.component').then(
        (m) => m.PrivacyPolicyComponent
      ),
  },
  {
    path: 'shipping-policy',
    loadComponent: () =>
      import('./features/shipping-policy/shipping-policy.component').then(
        (m) => m.ShippingPolicyComponent
      ),
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./features/wishlist/wishlist.component').then(
        (m) => m.WishlistComponent
      ),
  },
  {
    path: 'new-arrivals',
    loadComponent: () =>
      import('./features/new-arrivals/new-arrivals-page.component').then(
        (m) => m.NewArrivalsPageComponent
      ),
  },
  {
    path: 'best-sellers',
    loadComponent: () =>
      import('./features/best-sellers/best-sellers-page.component').then(
        (m) => m.BestSellersPageComponent
      ),
  },
  {
    path: 'offers',
    loadComponent: () =>
      import('./features/offers/offers.component').then(
        (m) => m.OffersComponent
      ),
  },
  {
    path: 'makeup-guide',
    loadComponent: () =>
      import('./features/makeup-guide/makeup-guide.component').then(
        (m) => m.MakeupGuideComponent
      ),
  },
  {
    path: 'legal-policies',
    loadComponent: () =>
      import('./features/legal-policies/legal-policies.component').then(
        (m) => m.LegalPoliciesComponent
      ),
  },
  {
    path: 'product-comparison',
    loadComponent: () =>
      import('./features/product-comparison/product-comparison.component').then(
        (m) => m.ProductComparisonComponent
      ),
  },
  {
    path: 'packages',
    loadComponent: () =>
      import('./features/packages/packages.component').then(
        (m) => m.PackagesComponent
      ),
  },
  {
    path: 'return-policy',
    loadComponent: () =>
      import('./features/return-policy/return-policy.component').then(
        (m) => m.ReturnPolicyComponent
      ),
  },
  {
    path: 'notifications',
    loadComponent: () =>
      import('./features/notifications/notifications.component').then(
        (m) => m.NotificationsComponent
      ),
  },
  {
    path: 'looks',
    loadComponent: () =>
      import('./features/looks/looks.component').then((m) => m.LooksComponent),
  },
  {
    path: 'magazine',
    loadComponent: () =>
      import('./features/magazine/magazine.component').then(
        (m) => m.MagazineComponent
      ),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./features/product-details/product-details.component').then(
        (m) => m.ProductDetailsComponent
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact.component').then(
        (m) => m.ContactComponent
      ),
  },
  {
    path: 'skin-quiz',
    loadComponent: () =>
      import('./features/skin-quiz/skin-quiz.component').then(
        (m) => m.SkinQuizComponent
      ),
  },
  {
    path: 'shop-by-color',
    loadComponent: () =>
      import('./features/shop-by-color/shop-by-color.component').then(
        (m) => m.ShopByColorComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'reviews',
    loadComponent: () =>
      import('./features/reviews/reviews.component').then(
        (m) => m.ReviewsComponent
      ),
  },
  {
    path: 'skin-type',
    loadComponent: () =>
      import('./features/skin-type/skin-type.component').then(
        (m) => m.SkinTypeComponent
      ),
  },
  {
    path: 'account',
    loadComponent: () =>
      import('./features/account/account.component').then(
        (m) => m.AccountComponent
      ),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./features/search/search.component').then(
        (m) => m.SearchComponent
      ),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./features/faq/faq.component').then((m) => m.FaqComponent),
  },
  {
    path: 'track-order',
    loadComponent: () =>
      import('./features/track-order/track-order.component').then(
        (m) => m.TrackOrderComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
