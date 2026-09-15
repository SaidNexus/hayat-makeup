export const homePageInitialConfig = {
  sections: [
    {
      id: 'sec-hero',
      type: 'hero',
      enabled: true,
      title: 'جمالكِ يتألق مع حياة\nأرقى تشكيلة مكياج',
      titleAr: 'جمالكِ يتألق مع حياة\nأرقى تشكيلة مكياج',
      titleEn: 'Your Beauty Shines with Hayat\nFinest Makeup Collection',
      image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/f_auto,q_auto,w_1200/v1787248204/hayat-makeup/hero-Banner.jpg',
      slides: [
        {
          id: 'slide-1',
          image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/f_auto,q_auto,w_1200/v1787248204/hayat-makeup/hero-Banner.jpg',
          title: 'جمالكِ يتألق مع حياة\nأرقى تشكيلة مكياج',
          titleAr: 'جمالكِ يتألق مع حياة\nأرقى تشكيلة مكياج',
          titleEn: 'Your Beauty Shines with Hayat\nFinest Makeup Collection'
        }
      ]
    },
    {
      id: 'sec-benefits',
      type: 'benefits',
      enabled: true,
      benefits: [
        { id: 'b1', text: 'دفع آمن وسريع\nخيارات دفع متعددة', textAr: 'دفع آمن وسريع\nخيارات دفع متعددة', textEn: 'Secure Payment\nMultiple Options', icon: 'CreditCard', enabled: true },
        { id: 'b2', text: 'توصيل سريع\nلكافة المناطق', textAr: 'توصيل سريع\nلكافة المناطق', textEn: 'Fast Delivery\nAll Regions', icon: 'Truck', enabled: true },
        { id: 'b3', text: 'منتجات أصلية 100%\nمعتمدة ومضمونة', textAr: 'منتجات أصلية 100%\nمعتمدة ومضمونة', textEn: '100% Original\nGuaranteed', icon: 'BadgeCheck', enabled: true }
      ]
    },
    {
      id: 'sec-categories',
      type: 'categories',
      enabled: true,
      title: 'تسوقي حسب الفئة',
      titleAr: 'تسوقي حسب الفئة',
      titleEn: 'Shop by Category',
      categories: [
        { id: 'makeup', name: 'المكياج', nameAr: 'المكياج', nameEn: 'Makeup', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/f_auto,q_auto,w_300/v1787248101/hayat-makeup/category-eyes.png' },
        { id: 'skincare', name: 'العناية بالبشرة', nameAr: 'العناية بالبشرة', nameEn: 'Skincare', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/f_auto,q_auto,w_300/v1787248125/hayat-makeup/category-skin.png' },
        { id: 'perfumes', name: 'العطور', nameAr: 'العطور', nameEn: 'Perfumes', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/f_auto,q_auto,w_300/v1787248119/hayat-makeup/category-perfume.png' },
        { id: 'tools', name: 'الأدوات', nameAr: 'الأدوات', nameEn: 'Tools & Brushes', image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/f_auto,q_auto,w_300/v1787248133/hayat-makeup/category-tools.png' }
      ]
    },
    {
      id: 'sec-bestsellers',
      type: 'bestsellers',
      enabled: true,
      title: 'الأكثر مبيعاً',
      titleAr: 'الأكثر مبيعاً',
      titleEn: 'Best Sellers',
      products: [
        { id: '1', name: 'أحمر شفاه مطفي درجة 07 - وردي فوشيا', nameAr: 'أحمر شفاه مطفي درجة 07 - وردي فوشيا', nameEn: 'Matte Lipstick Shade 07 - Fuchsia Pink', price: 89, oldPrice: 115, image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/f_auto,q_auto,w_500/v1787248360/hayat-makeup/products/lipstick.png', rating: 4.9, reviews: 98 },
        { id: '5', name: 'باليت ظلال العيون 12 لون - روز غولد', nameAr: 'باليت ظلال العيون 12 لون - روز غولد', nameEn: 'Eyeshadow Palette 12 Colors - Rose Gold', price: 129, oldPrice: 160, image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/f_auto,q_auto,w_500/v1787248356/hayat-makeup/products/eye-shadow.png', rating: 4.8, reviews: 124 },
        { id: '2', name: 'كريم أساس سائل تغطية عالية - طبيعي', nameAr: 'كريم أساس سائل تغطية عالية - طبيعي', nameEn: 'Liquid Foundation High Coverage - Natural', price: 119, oldPrice: 145, image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/f_auto,q_auto,w_500/v1787248358/hayat-makeup/products/foundation.png', rating: 4.7, reviews: 156 },
        { id: '4', name: 'ماسكارا مقاومة للماء تطويل وتكثيف', nameAr: 'ماسكارا مقاومة للماء تطويل وتكثيف', nameEn: 'Waterproof Mascara Lengthening & Volumizing', price: 99, oldPrice: 120, image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/f_auto,q_auto,w_500/v1787248362/hayat-makeup/products/maskara.png', rating: 4.9, reviews: 89 }
      ]
    },
    {
      id: 'sec-promo',
      type: 'promo',
      enabled: true,
      eyebrow: 'وصل حديثاً',
      eyebrowAr: 'وصل حديثاً',
      eyebrowEn: 'New Arrival',
      title: 'جديد الجمال بانتظارك',
      titleAr: 'جديد الجمال بانتظارك',
      titleEn: 'New Beauty Awaits You',
      subtitle: 'اكتشفي أحدث المنتجات والعلامات الحصرية',
      subtitleAr: 'اكتشفي أحدث المنتجات والعلامات الحصرية',
      subtitleEn: 'Discover the latest exclusive products & brands',
      image: 'https://res.cloudinary.com/ddzk9wuye/image/upload/f_auto,q_auto,w_600/v1787248206/hayat-makeup/hero.png'
    },
    {
      id: 'sec-looks',
      type: 'looks',
      enabled: true,
      title: 'إطلالات مكياج ساحرة',
      titleAr: 'إطلالات مكياج ساحرة',
      titleEn: 'Charming Makeup Looks'
    }
  ]
};

export const cartPageInitialConfig = {
  headerTitle: "سلة التسوق",
  headerTitleAr: "سلة التسوق",
  headerTitleEn: "Shopping Cart",
  showProductImage: true,
  showQuantityControls: true,
  showRemoveButton: true,
  showOldPrice: true,
  showCouponSection: true,
  couponTitle: "كود الخصم",
  couponTitleAr: "كود الخصم",
  couponTitleEn: "Discount Code",
  couponPlaceholder: "أدخل كود الخصم هنا",
  couponPlaceholderAr: "أدخل كود الخصم هنا",
  couponPlaceholderEn: "Enter discount code here",
  couponButtonText: "تطبيق",
  couponButtonTextAr: "تطبيق",
  couponButtonTextEn: "Apply",
  showSubtotal: true,
  showShipping: true,
  showDiscount: true,
  showTotal: true,
  checkoutButtonText: "إتمام الطلب",
  checkoutButtonTextAr: "إتمام الطلب",
  checkoutButtonTextEn: "Proceed to Checkout",
  emptyCartIllustration: true,
  emptyCartText: "سلة التسوق فارغة",
  emptyCartTextAr: "سلة التسوق فارغة",
  emptyCartTextEn: "Your shopping cart is empty",
  showTrustBadges: true,
  trustBadges: [
    { id: "t-1", icon: "BadgeCheck", title: "جودة أصلية", titleAr: "جودة أصلية", titleEn: "100% Original", subtitle: "مستحضرات أصلية 100%", subtitleAr: "مستحضرات أصلية 100%", subtitleEn: "Authentic Cosmetics" },
    { id: "t-2", icon: "Truck", title: "توصيل سريع", titleAr: "توصيل سريع", titleEn: "Fast Delivery", subtitle: "شحن لكافة المناطق", subtitleAr: "شحن لكافة المناطق", subtitleEn: "Shipping to all areas" },
    { id: "t-3", icon: "ShieldCheck", title: "دفع آمن", titleAr: "دفع آمن", titleEn: "Secure Payment", subtitle: "تشفير آمن لبياناتك", subtitleAr: "تشفير آمن لبياناتك", subtitleEn: "Full data encryption" }
  ]
};

export const productPageInitialConfig = {
  showBreadcrumbs: true,
  showWishlistBtn: true,
  showShareBtn: true,
  showTrustBadges: true,
  showShippingBanner: true,
  showRelatedProducts: true,
  showReviews: true,
  trustBadges: [
    { id: 't1', icon: 'BadgeCheck', text: 'منتج أصلي ومضمون', textAr: 'منتج أصلي ومضمون', textEn: '100% Authentic Product' },
    { id: 't2', icon: 'ShieldCheck', text: 'دفع إلكتروني آمن', textAr: 'دفع إلكتروني آمن', textEn: 'Secure Online Payment' }
  ],
  relatedProductsCount: 4,
  relatedProductsTitle: "قد يعجبك أيضاً",
  relatedProductsTitleAr: "قد يعجبك أيضاً",
  relatedProductsTitleEn: "You May Also Like"
};

export const categoryPageInitialConfig = {
  showFilterToggle: true,
  showSearch: true,
  titleAr: "جميع المنتجات",
  titleEn: "All Products"
};

export const facesPageInitialConfig = {
  titleAr: "الإطلالات العصرية",
  titleEn: "Modern Looks",
  subtitleAr: "استلهمي إطلالتك القادمة من أحدث صيحات المكياج",
  subtitleEn: "Get inspired by the latest makeup trends"
};

export const skinTypesPageInitialConfig = {
  titleAr: "تسوقي حسب نوع البشرة",
  titleEn: "Shop by Skin Type",
  subtitleAr: "منتجات مصممة خصيصاً لتناسب احتياجات بشرتك",
  subtitleEn: "Products tailored to your skin needs"
};

export const bundlesPageInitialConfig = {
  titleAr: "باقات المكياج التوفيرية",
  titleEn: "Value Makeup Bundles",
  subtitleAr: "مجموعات متكاملة بأسعار مميزة",
  subtitleEn: "Complete sets with special prices"
};

export const skinQuizPageInitialConfig = {
  titleAr: "اختبار البشرة المخصص",
  titleEn: "Personalized Skin Quiz",
  subtitleAr: "أجيبي عن بضعة أسئلة لنرشح لكِ أفضل المستحضرات",
  subtitleEn: "Answer a few questions to get tailored recommendations"
};

export const trackOrderPageInitialConfig = {
  titleAr: "تتبع حالة الطلب",
  titleEn: "Track Order Status",
  placeholderAr: "أدخل رقم الطلب أو رقم الهاتف",
  placeholderEn: "Enter order number or phone number",
  buttonTextAr: "تتبع الآن",
  buttonTextEn: "Track Now"
};

export const wishlistPageInitialConfig = {
  titleAr: "قائمة أمنياتي",
  titleEn: "My Wishlist",
  emptyTextAr: "قائمة أمنياتك فارغة حالياً",
  emptyTextEn: "Your wishlist is currently empty"
};

export const faqPageInitialConfig = {
  titleAr: "الأسئلة الشائعة",
  titleEn: "Frequently Asked Questions",
  subtitleAr: "إجابات على أكثر الاستفسارات شيوعاً",
  subtitleEn: "Answers to the most common inquiries"
};

export const accountPageInitialConfig = {
  titleAr: "حسابي",
  titleEn: "My Account"
};

export const offersPageInitialConfig = {
  titleAr: "العروض الحصرية والتخفيضات",
  titleEn: "Exclusive Offers & Discounts",
  subtitleAr: "اكتشفي أقوى العروض على أشهر مستحضرات التجميل",
  subtitleEn: "Discover top discounts on popular cosmetics"
};

export const categoriesPageInitialConfig = {
  titleAr: "جميع الأقسام والتصنيفات",
  titleEn: "All Categories & Collections"
};

export const newArrivalsPageInitialConfig = {
  titleAr: "وصل حديثاً",
  titleEn: "New Arrivals",
  subtitleAr: "أحدث إضافات المكياج والعناية بالجمال",
  subtitleEn: "Latest additions in makeup & beauty care"
};

export const bestSellersPageInitialConfig = {
  titleAr: "الأكثر مبيعاً ورواجاً",
  titleEn: "Best Sellers & Trends",
  subtitleAr: "المنتجات الأكثر طلباً وإعجاباً من عميلاتنا",
  subtitleEn: "The most requested & loved products by our customers"
};

export const searchPageInitialConfig = {
  titleAr: "بحث في المتجر",
  titleEn: "Search Store",
  placeholderAr: "ابحثي عن منتج، ماركة، أو تصنيف...",
  placeholderEn: "Search for product, brand, or category..."
};

export const checkoutPageInitialConfig = {
  titleAr: "إتمام الطلب والدفع",
  titleEn: "Checkout & Payment",
  buttonTextAr: "تأكيد الطلب الآن",
  buttonTextEn: "Confirm Order Now"
};
