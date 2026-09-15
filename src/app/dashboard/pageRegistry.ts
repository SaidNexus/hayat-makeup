export const pageRegistry = [
  { id: "home", label: "الرئيسية", path: "/", previewRoute: "/", configKey: "homePageConfig" },
  { id: "products", label: "المنتجات", path: "/products", previewRoute: "/products", configKey: "categoryPageConfig" },
  { id: "product-details", label: "تفاصيل المنتج", path: "/product/1", previewRoute: "/product/1", configKey: "productPageConfig" },
  { id: "cart", label: "السلة", path: "/cart", previewRoute: "/cart", configKey: "cartPageConfig" },
  { id: "checkout", label: "إتمام الطلب", path: "/checkout", previewRoute: "/checkout", configKey: "checkoutPageConfig" },
  { id: "faces", label: "الإطلالات", path: "/looks", previewRoute: "/looks", configKey: "facesPageConfig" },
  { id: "skin-types", label: "أنواع البشرة", path: "/skin-type", previewRoute: "/skin-type", configKey: "skinTypesPageConfig" },
  { id: "bundles", label: "الباقات", path: "/packages", previewRoute: "/packages", configKey: "bundlesPageConfig" },
  { id: "skin-quiz", label: "اختبار البشرة", path: "/skin-quiz", previewRoute: "/skin-quiz", configKey: "skinQuizPageConfig" },
  { id: "track-order", label: "تتبع الطلب", path: "/track-order", previewRoute: "/track-order", configKey: "trackOrderPageConfig" },
  { id: "wishlist", label: "المفضلة", path: "/wishlist", previewRoute: "/wishlist", configKey: "wishlistPageConfig" },
  { id: "faq", label: "الأسئلة الشائعة", path: "/faq", previewRoute: "/faq", configKey: "faqPageConfig" },
  { id: "account", label: "الحساب", path: "/account", previewRoute: "/account", configKey: "accountPageConfig" },
  { id: "offers", label: "العروض", path: "/offers", previewRoute: "/offers", configKey: "offersPageConfig" },
  { id: "categories", label: "التصنيفات", path: "/categories", previewRoute: "/categories", configKey: "categoriesPageConfig" },
  { id: "new-arrivals", label: "وصل حديثاً", path: "/new-arrivals", previewRoute: "/new-arrivals", configKey: "newArrivalsPageConfig" },
  { id: "best-sellers", label: "الأكثر مبيعاً", path: "/best-sellers", previewRoute: "/best-sellers", configKey: "bestSellersPageConfig" },
  { id: "search", label: "البحث", path: "/search", previewRoute: "/search", configKey: "searchPageConfig" },
  { id: "about", label: "من نحن", path: "/about", previewRoute: "/about", configKey: "aboutPageConfig" },
  { id: "contact", label: "اتصل بنا", path: "/contact", previewRoute: "/contact", configKey: "contactPageConfig" },
  { id: "notifications", label: "الإشعارات", path: "/notifications", previewRoute: "/notifications", configKey: "notificationsPageConfig" },
  { id: "policies", label: "السياسات والشروط", path: "/terms", previewRoute: "/terms", configKey: "policiesPageConfig" },
  { id: "order-confirmation", label: "تأكيد الطلب", path: "/order-success", previewRoute: "/order-success", configKey: "orderConfirmationPageConfig" }
];

export function findPageByRoute(rawRoute: string) {
  const route = rawRoute.split('?')[0];
  if (route === "/" || route === "") return pageRegistry.find(p => p.id === "home");
  if (route.startsWith("/product/") || route === "/product") return pageRegistry.find(p => p.id === "product-details");
  if (route.startsWith("/category/") || route.startsWith("/products")) return pageRegistry.find(p => p.id === "products");
  if (route.startsWith("/cart")) return pageRegistry.find(p => p.id === "cart");
  if (route.startsWith("/checkout")) return pageRegistry.find(p => p.id === "checkout");
  if (route.startsWith("/faces") || route.startsWith("/looks")) return pageRegistry.find(p => p.id === "faces");
  if (route.startsWith("/skin-types") || route.startsWith("/skin-type")) return pageRegistry.find(p => p.id === "skin-types");
  if (route.startsWith("/bundles") || route.startsWith("/packages")) return pageRegistry.find(p => p.id === "bundles");
  if (route.startsWith("/skin-quiz")) return pageRegistry.find(p => p.id === "skin-quiz");
  if (route.startsWith("/track-order")) return pageRegistry.find(p => p.id === "track-order");
  if (route.startsWith("/wishlist")) return pageRegistry.find(p => p.id === "wishlist");
  if (route.startsWith("/faq")) return pageRegistry.find(p => p.id === "faq");
  if (route.startsWith("/account")) return pageRegistry.find(p => p.id === "account");
  if (route.startsWith("/offers")) return pageRegistry.find(p => p.id === "offers");
  if (route.startsWith("/categories")) return pageRegistry.find(p => p.id === "categories");
  if (route.startsWith("/new-arrivals")) return pageRegistry.find(p => p.id === "new-arrivals");
  if (route.startsWith("/best-sellers")) return pageRegistry.find(p => p.id === "best-sellers");
  if (route.startsWith("/search")) return pageRegistry.find(p => p.id === "search");
  if (route.startsWith("/about")) return pageRegistry.find(p => p.id === "about");
  if (route.startsWith("/contact")) return pageRegistry.find(p => p.id === "contact");
  if (route.startsWith("/notifications")) return pageRegistry.find(p => p.id === "notifications");
  if (route.startsWith("/order-success")) return pageRegistry.find(p => p.id === "order-confirmation");
  if (route.startsWith("/terms") || route.startsWith("/privacy-policy") || route.startsWith("/shipping-policy") || route.startsWith("/return-policy") || route.startsWith("/legal-policies")) return pageRegistry.find(p => p.id === "policies");
  return null;
}
