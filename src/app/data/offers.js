const perfumeImg = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248318/hayat-makeup/offers/featured-perfume.png";
const makeupImg = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248316/hayat-makeup/offers/featured-makeup.png";
const skincareImg = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248321/hayat-makeup/offers/featured-skincare.png";

const careBundleImg = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248310/hayat-makeup/offers/bundle-care.png";
const beautyBundleImg = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248307/hayat-makeup/offers/bundle-beauty.png";
const completeBundleImg = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248312/hayat-makeup/offers/bundle-complete.png";

/** Featured offers (mock). */
export const featuredOffers = [
  {
    id: 1,
    title: "عطور مختارة",
    discount: 20,
    image: perfumeImg,
  },
  {
    id: 2,
    title: "خصم على المكياج",
    discount: 30,
    image: makeupImg,
  },
  {
    id: 3,
    title: "خصم على منتجات العناية",
    discount: 25,
    image: skincareImg,
  },
];

/** Offer bundles (mock). */
export const offerBundles = [
  {
    id: 1,
    name: "باقة العناية الفاخرة",
    description: "عناية متكاملة",
    price: 199,
    oldPrice: 329,
    saving: 130,
    image: careBundleImg,
  },
  {
    id: 2,
    name: "باقة الجمال اليومية",
    description: "عطر + مكياج",
    price: 159,
    oldPrice: 279,
    saving: 120,
    image: beautyBundleImg,
  },
  {
    id: 3,
    name: "باقة الإطلالة الكاملة",
    description: "مكياج + عناية + عطر",
    price: 219,
    oldPrice: 399,
    saving: 180,
    image: completeBundleImg,
    featured: true,
  },
];

/** Static countdown boxes on the LimitedOffer banner. */
export const limitedOfferTime = [
  { value: "27", label: "ثواني" },
  { value: "38", label: "دقائق" },
  { value: "14", label: "ساعات" },
  { value: "02", label: "أيام" },
];