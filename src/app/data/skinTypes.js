const skin1 = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248372/hayat-makeup/skin/1.png";
const skin2 = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248374/hayat-makeup/skin/2.png";
const skin3 = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248376/hayat-makeup/skin/3.png";
const skin4 = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248379/hayat-makeup/skin/4.png";
const skin5 = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248381/hayat-makeup/skin/5.png";

const foundationImg = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248358/hayat-makeup/products/foundation.png";
const mascaraImg = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248362/hayat-makeup/products/maskara.png";
const eyeShadowImg = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248356/hayat-makeup/products/eye-shadow.png";
const lipstickImg = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248360/hayat-makeup/products/lipstick.png";

/** Skin type cards (SkinType page). */
export const skinTypes = [
  {
    id: "oily",
    title: "دهنية",
    description:
      "تركيبات خفيفة تتحكم بالمعان وتحافظ على توازن بشرتك.",
    image: skin1,
    products: [
      foundationImg,
      eyeShadowImg,
      mascaraImg,
    ],
  },
  {
    id: "dry",
    title: "جافة",
    description:
      "تركيبات مرطبة تغذي البشرة وتمنحها نعومة وإشراقة.",
    image: skin2,
    products: [
      lipstickImg,
      foundationImg,
      eyeShadowImg,
    ],
  },
  {
    id: "combination",
    title: "مختلطة",
    description:
      "توازن مثالي للعناية والمظهر المثالي في كل منطقة.",
    image: skin3,
    products: [
      foundationImg,
      mascaraImg,
      eyeShadowImg,
    ],
  },
  {
    id: "sensitive",
    title: "حساسة",
    description:
      "تركيبات لطيفة تهدئ البشرة وتقلل من التهيج والاحمرار.",
    image: skin4,
    products: [
      foundationImg,
      lipstickImg,
      mascaraImg,
    ],
  },
  {
    id: "acne",
    title: "معرضة للحبوب",
    description:
      "تركيبات تساعد على تنقية البشرة والحد من ظهور الحبوب.",
    image: skin5,
    products: [
      foundationImg,
      mascaraImg,
      lipstickImg,
    ],
  },
];
