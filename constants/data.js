import images from "./images";
const communityFourmData = [
  {
    id: "1",
    title: "Understand Your Pests",
    author: "Dagim debebe",
    img: images.pests,
    content:
      "Before using any pesticides, identify the pests that are harming your crops. Not all pests are harmful, and some can be beneficial.",
  },
  {
    id: "4",
    title: "Take care of yourself",
    author: "Abdisa lemesa",
    img: images.keepSafe,
    content:
      "Always wear appropriate protective clothing and equipment when handling and applying pesticides.",
  },
  {
    id: "2",
    title: "Follow the instructions",
    author: "Selam fikru",
    img: images.instruction,
    content:
      "Always read and follow the directions on the pesticide label. Overuse or misuse can result in ineffective pest control and potential damage to the environment.",
  },
  {
    id: "3",
    title: "Time is key",
    author: "Abdisa lemesa",
    img: images.seasons,
    content:
      "Apply pesticides at the right time for maximum effectiveness, such as at a specific stage or date in the pest's life cycle,",
  },

  {
    id: "5",
    title: "Consider the Options",
    author: "Selam fikru",
    img: images.pesticideMan,
    content:
      "See Integrated Pest Management Strategies Combining Biological, Cultural and Chemical Methods to Control Pests",
  },
];

const chemicals = [
  {
    id: "1",
    name: "name1",
    price: "25birr",
  },
  {
    id: "2",
    name: "name2",
    price: "25birr",
  },
  {
    id: "3",
    name: "name3",
    price: "25birr",
  },
  {
    id: "4",
    name: "name4",
    price: "25birr",
  },
  {
    id: "5",
    name: "name5",
    price: "25birr",
  },
  {
    id: "6",
    name: "name6",
    price: "25birr",
  },
];

const seeds = [
  {
    id: "1",
    name: "በቆሎ",
    img: images.cornImg,
    price: "150",
  },
  {
    id: "2",
    name: "ስንዴ",
    img: images.coffeeImg,
    price: "220",
  },
  {
    id: "3",
    name: "ቴፍ",
    img: images.tefImg,
    price: "265",
  },
  {
    id: "4",
    name: "ስንዴ",
    img: images.wheatImg,
    price: "220",
  },
];

const pesticides = [
  {
    id: "1",
    name: "pestcide1",
    img: images.pestcide1,
    price: "150",
  },
  {
    id: "2",
    name: "pestcide2",
    img: images.pestcide2,
    price: "220",
  },
  {
    id: "3",
    name: "pestcide3",
    img: images.pestcide3,
    price: "265",
  },
  {
    id: "4",
    name: "pestcide5",
    img: images.pestcide4,
    price: "220",
  },
];

export default {
  communityFourmData,
  chemicals,
  seeds,
  pesticides,
};
