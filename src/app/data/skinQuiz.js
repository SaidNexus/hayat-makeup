const skin5 = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248372/hayat-makeup/skin/1.png";
const skin4 = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248374/hayat-makeup/skin/2.png";
const skin3 = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248376/hayat-makeup/skin/3.png";
const skin2 = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248379/hayat-makeup/skin/4.png";
const skin1 = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248381/hayat-makeup/skin/5.png";

const cool = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248383/hayat-makeup/skin/cool.png";
const neutral = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248388/hayat-makeup/skin/neutral.png";
const warm = "https://res.cloudinary.com/ddzk9wuye/image/upload/v1787248389/hayat-makeup/skin/warm.png";

/** Skin tone options (SkinQuiz Q1). */
export const quizTones = [
  {
    id: "5",
    label: "فاتح",
    image: skin5,
  },
  {
    id: "4",
    label: "متوسط فاتح",
    image: skin4,
  },
  {
    id: "3",
    label: "متوسط",
    image: skin3,
  },
  {
    id: "2",
    label: "قمحي",
    image: skin2,
  },
  {
    id: "1",
    label: "داكن",
    image: skin1,
  },
];

/** Undertone options (SkinQuiz Q2). */
export const quizUndertones = [
  {
    id: "neutral",
    label: "محايد",
    description: "مزيج من الذهبي والوردي",
    image: neutral,
  },
  {
    id: "warm",
    label: "دافئ",
    description: "ذهبي أو خوخي",
    image: warm,
  },
  {
    id: "cool",
    label: "بارد",
    description: "وردي أو وردي مزرق",
    image: cool,
  },
];

/** Skin type options (SkinQuiz Q3). */
export const quizSkinTypes = [
  {
    id: "normal",
    label: "عادية",
    description: "متوازنة",
  },
  {
    id: "dry",
    label: "جافة",
    description: "تشرين بالجفاف",
  },
  {
    id: "oily",
    label: "دهنية",
    description: "لامعة في المنطقة T",
  },
  {
    id: "combination",
    label: "مختلطة",
    description: "دهنية في T وجافة",
  },
  {
    id: "sensitive",
    label: "حساسة",
    description: "تتأثر بسهولة",
  },
];
