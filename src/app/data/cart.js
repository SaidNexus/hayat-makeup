const perfumeImg = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248119/hayat-makeup/category-perfume.png";
const lipstickImg = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248360/hayat-makeup/products/lipstick.png";
const foundationImg = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248358/hayat-makeup/products/foundation.png";

/** Default cart seed items used by the cart store (mock/local data). */
export const defaultCartItems = [
  {
    id: 1,
    name: "عطر حياة الوردي",
    description: "الحجم: 100 مل",
    color: "وردي",
    colorCode: "#F28AB2",
    price: 129,
    quantity: 1,
    image: perfumeImg,
  },
  {
    id: 2,
    name: "أحمر شفاه مطفي",
    description: "الدرجة: 07 - وردي فوشيا",
    color: "فوشيا",
    colorCode: "#D4146A",
    price: 89,
    quantity: 1,
    image: lipstickImg,
  },
  {
    id: 3,
    name: "كريم أساس سائل",
    description: "الدرجة: 03 - بيج طبيعي",
    color: "بيج طبيعي",
    colorCode: "#EBD6C0",
    price: 119,
    quantity: 1,
    image: foundationImg,
  },
];