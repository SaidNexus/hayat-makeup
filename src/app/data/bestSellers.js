const product1 = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248089/hayat-makeup/best-seller/lipstick.png";
const product2 = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248087/hayat-makeup/best-seller/foundation.png";
const product3 = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248084/hayat-makeup/best-seller/bullet-shadow.png";
const product4 = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248091/hayat-makeup/best-seller/mascara.png";
const product5 = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248081/hayat-makeup/best-seller/blushs.png";

/** Best sellers page ranking (5 products). */
export const bestSellerProducts = [
  {
    id: 1,
    rank: 1,
    name: "أحمر شفاه مات رويال",
    variant: "روز غامق",
    price: 75,
    rating: 4.8,
    reviews: "1,250",
    image: product1,
  },
  {
    id: 2,
    rank: 2,
    name: "كريم أساس بيرفكت كفر",
    variant: "بيج طبيعي",
    price: 105,
    rating: 4.7,
    reviews: "980",
    image: product2,
  },
  {
    id: 3,
    rank: 3,
    name: "باليت ظلال 12 لون",
    variant: "روز كلاسيك",
    price: 129,
    rating: 4.9,
    reviews: "860",
    image: product3,
  },
  {
    id: 4,
    rank: 4,
    name: "ماسكارا فوليوم أند ليفت",
    variant: "أسود كثيف",
    price: 65,
    rating: 4.6,
    reviews: "750",
    image: product4,
  },
  {
    id: 5,
    rank: 5,
    name: "مجموعة فرش مكياج 5 قطع",
    variant: "احترافية",
    price: 115,
    rating: 4.9,
    reviews: "620",
    image: product5,
  },
];

/** Display order used by the BestSellers grid (keeps 3 + last two swapped). */
export const bestSellerDisplayOrder = [
  ...bestSellerProducts.slice(0, 3),
  bestSellerProducts[4],
  bestSellerProducts[3],
];