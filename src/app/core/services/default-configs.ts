export const homePageInitialConfig = {
  sections: [
    {
      id: 'sec-hero',
      type: 'hero',
      enabled: true,
      title: 'شد أقوى\nوقوام أفضل',
      image: ''
    },
    {
      id: 'sec-benefits',
      type: 'benefits',
      enabled: true,
      benefits: [
        { id: 'b1', text: 'دفع عند الاستلام\nادفع بعد الاستلام', icon: 'CreditCard', enabled: true },
        { id: 'b2', text: 'توصيل سريع\nلكافة المناطق', icon: 'Truck', enabled: true },
        { id: 'b3', text: 'استبدال سهل\nوسياسات مرنة', icon: 'RefreshCcw', enabled: true }
      ]
    },
    {
      id: 'sec-categories',
      type: 'categories',
      enabled: true,
      title: 'تسوق حسب الفئة',
      categories: []
    },
    {
      id: 'sec-bestsellers',
      type: 'bestsellers',
      enabled: true,
      title: 'الأكثر مبيعاً',
      products: []
    },
    {
      id: 'sec-promo',
      type: 'promo',
      enabled: true,
      eyebrow: 'وصل حديثاً',
      title: 'جديد الجمال بانتظارك',
      subtitle: 'اكتشفي أحدث المنتجات والعلامات',
      image: ''
    },
    {
      id: 'sec-shop-by-need',
      type: 'shopByNeed',
      enabled: true,
      title: 'تسوقي حسب احتياجك',
    },
    {
      id: 'sec-reviews',
      type: 'reviews',
      enabled: true,
      title: 'آراء عملائنا',
    }
  ]
};

export const cartPageInitialConfig = {
  headerTitle: "سلة التسوق",
  showProductImage: true,
  showQuantityControls: true,
  showRemoveButton: true,
  showOldPrice: true,
  showCouponSection: true,
  couponTitle: "كود الخصم",
  couponPlaceholder: "أدخل كود الخصم هنا",
  couponButtonText: "تطبيق",
  showSubtotal: true,
  showShipping: true,
  showDiscount: true,
  showTotal: true,
  checkoutButtonText: "إتمام الطلب",
  emptyCartIllustration: true,
  emptyCartText: "سلة التسوق فارغة",
  showTrustBadges: true,
  trustBadges: [
    { id: "t-1", icon: "BadgeCheck", title: "جودة أصلية", subtitle: "منتجات أصلية 100%" },
    { id: "t-2", icon: "Truck", title: "توصيل سريع", subtitle: "شحن لكافة المناطق" },
    { id: "t-3", icon: "ShieldCheck", title: "دفع آمن", subtitle: "تشفير آمن لبياناتك" }
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
    { id: 't1', icon: 'BadgeCheck', text: 'منتج أصلي ومضمون' },
    { id: 't2', icon: 'ShieldCheck', text: 'دفع إلكتروني آمن' }
  ],
  relatedProductsCount: 4,
  relatedProductsTitle: "قد يعجبك أيضاً"
};

export const categoryPageInitialConfig = {
  showFilterToggle: true,
  showSortDropdown: true
};

export const checkoutPageInitialConfig = {
  showOrderSummary: true,
  showDiscountField: true,
  showTrustBadges: true,
};

export const facesPageInitialConfig = {
  headerTitle: "تسوقي حسب شكل الوجه",
  description: "اكتشفي المنتجات الأنسب لشكل وجهك",
  faces: [
    { id: '2', name: 'مكياج ناعم', image: '/assets/faces/soft.png', icon: 'Flower2', iconColor: '#0B2E74', visible: true },
    { id: '1', name: 'مكياج يومي', image: '/assets/faces/daily.png', icon: 'Sun', iconColor: '#FF7F86', visible: true },
    { id: '4', name: 'إطلالة للعمل', image: '/assets/faces/work.png', icon: 'BriefcaseBusiness', iconColor: '#0B2E74', visible: true },
    { id: '3', name: 'مكياج سهرة', image: '/assets/faces/evening.png', icon: 'Moon', iconColor: '#0B2E74', visible: true },
    { id: '6', name: 'بدون مكياج', image: '/assets/faces/no-makeup.png', icon: 'Leaf', iconColor: '#0B2E74', visible: true },
    { id: '5', name: 'عيون قوية', image: '/assets/faces/strong-eyes.png', icon: 'Eye', iconColor: '#0B2E74', visible: true }
  ]
};

export const skinTypesPageInitialConfig = {
  headerTitle: "التسوق حسب نوع البشرة",
  description: "اختر نوع بشرتك لتكتشفي المنتجات المناسبة لك",
  types: [
    { id: 'oily', title: 'بشرة دهنية', description: 'منتجات تتحكم باللمعان وتدوم طوال اليوم', icon: 'Droplets', iconColor: '#7CA6D8', iconBg: '#F1F7FD', visible: true },
    { id: 'dry', title: 'بشرة جافة', description: 'مرطبات وتركيبات غنية لإشراقة ناعمة', icon: 'Droplets', iconColor: '#E6A6AA', iconBg: '#FFF5F5', visible: true },
    { id: 'combination', title: 'بشرة مختلطة', description: 'توازن بين الترطيب والثبات', icon: 'Sparkles', iconColor: '#719B8A', iconBg: '#F3F8F5', visible: true },
    { id: 'sensitive', title: 'بشرة حساسة', description: 'مكونات لطيفة وخالية من العطور', icon: 'Feather', iconColor: '#9B8DD0', iconBg: '#F8F5FD', visible: true },
    { id: 'acne', title: 'بشرة معرضة للحبوب', description: 'تركيبات خفيفة لا تسد المسام', icon: 'CircleDot', iconColor: '#D69C73', iconBg: '#FFF8F1', visible: true }
  ]
};

export const bundlesPageInitialConfig = {
  headerTitle: "المجموعات المتكاملة",
  showBundleSaving: true,
  showBundleItems: true,
  bundles: [
    {
      id: "bundle-1",
      title: "باقة الوجه الكامل",
      description: "كل ما تحتاجينه لبشرة مثالية مشرقة وطبيعية",
      productsCount: 5,
      price: "598",
      oldPrice: "798",
      discount: "وفري 25%",
      badge: "الأكثر مبيعاً",
      badgeIcon: "♛",
      image: "/assets/bundles/full-face.png",
    },
    {
      id: "bundle-2",
      title: "باقة العروس",
      description: "تألقي في يومك الخاص مع مجموعة فاخرة من الأساسيات",
      productsCount: 7,
      price: "1,240",
      oldPrice: "1,390",
      discount: "وفري 150 ر.س",
      badge: "وفري 150 ر.س",
      badgeIcon: "",
      image: "/assets/bundles/brushes.png",
    },
    {
      id: "bundle-3",
      title: "باقة الشفاه",
      description: "ألوان ساحرة وترطيب يدوم لشفاه جذابة كل يوم",
      productsCount: 4,
      price: "376",
      oldPrice: "470",
      discount: "وفري 20%",
      badge: "وفري 20%",
      badgeIcon: "",
      image: "/assets/bundles/lips.png",
    }
  ]
};

export const skinQuizPageInitialConfig = {
  showQuizHeader: true,
  quizTitle: "اكتشفي روتينك المثالي",
  quizDescription: "أجيبي على بعض الأسئلة لنرشح لك أفضل المنتجات"
};

export const trackOrderPageInitialConfig = {
  showTimeline: true,
  showSupportInfo: true
};

export const wishlistPageInitialConfig = {
  headerTitle: "المفضلة",
  subtitle: "منتجاتك المفضلة",
  emptyStateTitle: "قائمة المفضلة فارغة",
  emptyStateDescription: "تصفحي المنتجات وأضيفي ما يعجبك إلى المفضلة",
  emptyStateButtonText: "تسوقي الآن"
};

export const faqPageInitialConfig = {
  headerTitle: "الأسئلة الشائعة",
  subtitle: "إجابات سريعة على أكثر الأسئلة شيوعاً",
  searchPlaceholder: "إبحثي عن سؤالك",
  contactTitle: "لا تجدين إجابتك؟",
  contactSubtitle: "فريقنا جاهز لمساعدتك\nنحن هنا لخدمتك بكل حب",
  contactButtonText: "تواصلي معنا",
  faqs: [
    {
      id: "f1",
      question: "كيف أختار درجة الفاونديشن المناسبة؟",
      answer: "يمكنك اختيار الدرجة المناسبة من خلال تحديد لون بشرتك (فاتح، متوسط، داكن) ثم اختيار النغمة (دافئة، محايدة، باردة). كما نوفر أداة مطابقة الدرجات لمساعدتك في اختيار الدرجة الأنسب لك بسهولة.",
      visible: true
    },
    {
      id: "f2",
      question: "ما الفرق بين التغطية المتوسطة والكاملة؟",
      answer: "التغطية المتوسطة تمنحك مظهراً طبيعياً مع توحيد لون البشرة وإخفاء العيوب الخفيفة، بينما التغطية الكاملة تخفي العيوب بشكل أكبر وتمنحك مظهراً أكثر تغطية وثباتاً.",
      visible: true
    },
    {
      id: "f3",
      question: "هل المنتجات أصلية؟",
      answer: "نعم، جميع المنتجات المتوفرة لدينا أصلية ومختارة بعناية من مصادر موثوقة لضمان أفضل جودة.",
      visible: true
    },
    {
      id: "f4",
      question: "هل يمكن تبديل درجة اللون؟",
      answer: "نعم، يمكنك طلب تبديل درجة اللون وفقاً لسياسة الاستبدال الخاصة بالمنتج، بشرط أن يكون المنتج بحالته الأصلية.",
      visible: true
    },
    {
      id: "f5",
      question: "كم مدة التوصيل؟",
      answer: "عادةً يستغرق التوصيل من 2 إلى 5 أيام عمل حسب موقعك وطريقة الشحن المختارة.",
      visible: true
    },
    {
      id: "f6",
      question: "هل الدفع عند الاستلام متوفر؟",
      answer: "نعم، الدفع عند الاستلام متوفر في المناطق التي تدعم هذه الخدمة.",
      visible: true
    },
    {
      id: "f7",
      question: "كيف أعرف المنتج المناسب لنوع بشرتي؟",
      answer: "يمكنك معرفة المنتجات المناسبة لك من خلال قسم نوع البشرة واختيار نوع بشرتك للحصول على المنتجات المقترحة.",
      visible: true
    },
    {
      id: "f8",
      question: "كيف أحافظ على المنتج بعد فتحه؟",
      answer: "احفظي المنتجات في مكان جاف وبعيد عن أشعة الشمس المباشرة والحرارة، واحرصي على إغلاق العبوة جيداً بعد كل استخدام.",
      visible: true
    }
  ]
};

export const accountPageInitialConfig = {
  headerTitle: "الحساب",
  greetingText: "مرحباً",
  showProfileCard: true,
  menuItems: [
    { id: "orders", label: "طلباتي", icon: "Package", visible: true },
    { id: "addresses", label: "عناويني", icon: "MapPin", visible: true },
    { id: "wishlist", label: "المفضلة", icon: "Heart", visible: true },
    { id: "settings", label: "الإعدادات", icon: "Settings", visible: true }
  ],
  logoutText: "تسجيل الخروج"
};

export const offersPageInitialConfig = {
  headerTitle: "العروض",
  showHero: true,
  heroImage: "/assets/offers.png",
  discountsTitle: "التخفيضات الحالية",
  showDiscounts: true,
  bundlesTitle: "الباقات",
  showBundles: true,
  buyMoreTitle: "عروض شراء أكثر من قطعة",
  showBuyMore: true,
  buyMoreNote: "يُطبق الخصم تلقائيًا في سلة التسوق",
  limitedOffersTitle: "العروض محدودة المدة",
  showLimitedOffers: true,
  limitedOfferDiscountLabel: "خصم حتى",
  limitedOfferButtonText: "تسوقي الآن",
  limitedOfferMarketingTitle: "!عرض خاص لفترة محدودة",
  limitedOfferMarketingSubtitle: "خصومات حصرية لا تفوتيها",
};

export const categoriesPageInitialConfig = {
  headerTitle: "التصنيفات",
  mainCategoriesTitle: "التصنيفات الرئيسية",
  browseCategoriesTitle: "تصفح حسب التصنيف",
  promoBannerVisible: true,
  promoBannerTitle: "كل ما تحتاجينه لجمالك",
  promoBannerSubtitle: "اكتشفي جميع التصنيفات ومنتجاتك المفضلة",
  promoBannerButtonText: "تسوقي الآن",
  promoBannerImage: "/assets/shop-now.png"
};

export const newArrivalsPageInitialConfig = {
  headerTitle: "وصل حديثًا",
  subtitle: "اكتشفي أحدث المنتجات والإصدارات",
  showMoreButtonText: "عرض المزيد"
};

export const bestSellersPageInitialConfig = {
  headerTitle: "الأكثر مبيعًا",
  subtitle: "اكتشفي المنتجات الأكثر حبًا من عملائنا"
};

export const searchPageInitialConfig = {
  trendingSearchesTitle: "عمليات بحث شائعة",
  recentSearchesTitle: "آخر عمليات البحث",
  emptyStateTitle: "لا توجد نتائج",
  emptyStateSubtitle: "جرّب البحث بكلمة أخرى"
};

export const menuPageInitialConfig = {
  menuItems: [
    { id: "home", label: "الرئيسية", path: "/", visible: true },
    { id: "products", label: "المنتجات", path: "/products", visible: true },
    { id: "categories", label: "التصنيفات", path: "/categories", visible: true },
    { id: "offers", label: "العروض", path: "/offers", visible: true },
    { id: "new-arrivals", label: "وصل حديثاً", path: "/new-arrivals", visible: true },
    { id: "best-sellers", label: "الأكثر مبيعاً", path: "/best-sellers", visible: true },
    { id: "faces", label: "تسوقي حسب شكل الوجه", path: "/faces", visible: true },
    { id: "skin-types", label: "تسوقي حسب نوع البشرة", path: "/skin-types", visible: true },
    { id: "bundles", label: "المجموعات المتكاملة", path: "/bundles", visible: true },
    { id: "skin-quiz", label: "اختبار نوع البشرة", path: "/skin-quiz", visible: true },
    { id: "faq", label: "الأسئلة الشائعة", path: "/faq", visible: true }
  ]
};
