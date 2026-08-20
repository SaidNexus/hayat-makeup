const foundationImg = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248358/hayat-makeup/products/foundation.png";
const mascaraImg = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248362/hayat-makeup/products/maskara.png";
const avatarImg = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248077/hayat-makeup/avatar.png";

/** Reviews listing (Reviews page). */
export const reviews = [
  {
    id: 1,
    name: "سارة العتيبي",
    avatar: avatarImg,
    verified: true,
    skinType: "مختلطة",
    rating: 5,
    productId: 2,
    productName: "فاونديشن هيات مات بيرفكت",
    productImage: foundationImg,
    reviewImage: foundationImg,
    date: "12 مايو 2024",
    helpful: 24,
    text:
      "تغطية رائعة وخفيفة على البشرة، ما يسد المسام ويعطي لمعة طبيعية تدوم طوال اليوم. أنصح فيه!",
  },
  {
    id: 2,
    name: "نورة خالد",
    avatar: avatarImg,
    verified: true,
    skinType: "دهنية",
    rating: 4.6,
    productId: 3,
    productName: "ماسكارا هيات لرفع وتكثيف الرموش",
    productImage: mascaraImg,
    reviewImage: mascaraImg,
    date: "5 مايو 2024",
    helpful: 11,
    text:
      "أفضل ماسكارا جربتها! ما تتكتل وتعطي طول وكثافة بشكل طبيعي. ما أستغني عنها.",
  },
];

/** Rating distribution (RatingSummary). */
export const ratingDistribution = [
  { rating: 5, percent: 78 },
  { rating: 4, percent: 15 },
  { rating: 3, percent: 5 },
  { rating: 2, percent: 1 },
  { rating: 1, percent: 1 },
];

export const OVERALL_RATING = "4.8";
export const TOTAL_REVIEWS = "(1,256 تقييم)";

/** Review filter chips. */
export const reviewFilters = [
  "الكل (1,256)",
  "مع صور (632)",
  "5 نجوم (982)",
  "4 نجوم (189)",
  "الفلترة",
];