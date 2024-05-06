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

const seeds = [
  {
    id: "1",
    desc: "Ethiopia",
    name: "Corn",
    uses: ["Purity 98.5% min", "Admixture	1% max", "Moisture	12% max"],
    img: images.cornImg,
  },
  {
    id: "2",
    desc: "Ethiopia",
    name: "Coffe",
    uses: ["Purity 92.5% min", "Admixture 2% max", "Moisture 14.5% Max"],
    img: images.coffeeImg,
  },
  {
    id: "3",
    desc: "Ethiopia",
    name: "Sorghum",
    uses: ["Purity 95.5% min", "Admixture	3% max", "Moisture	12% max"],
    img: images.tefImg,
  },
  {
    id: "4",
    desc: "Ethiopia",
    name: "Wheat",
    uses: ["Purity 94.5% min", "Admixture	2% max", "Moisture	20% max"],
    img: images.wheatImg,
  },
];

const pesticides = [
  {
    id: "1",
    name: "Malathion",
    desc: "Diethyl 2-[(dimethoxyphosphorothioyl)sulfanyl]butanedioate",
    img: images.pestcide1,
    uses: [
      "Insecticide",
      "Agricultural Crop Protection",
      "Mosquito Control",
      "Garden and Lawn Care",
    ],
    price: "150",
  },
  {
    id: "2",
    name: "Dimethoate",
    desc: "O,O-Dimethyl S-methylcarbamoylmethyl phosphorodithioate",
    uses: [
      "Pest Control",
      "Agricultural Use",
      "Foliar Sprays",
      "Systemic Insecticide",
    ],
    img: images.pestcide2,
    price: "220",
  },
  {
    id: "3",
    name: "Carbaryl",
    desc: "Naphthalen-1-yl methylcarbamate",
    uses: [
      "Agriculture",
      "Orchard Management",
      "Veterinary Use",
      "Environmental Protection",
    ],
    img: images.pestcide3,
    price: "265",
  },
  {
    id: "4",
    name: "Propiconazole",
    desc: "Naphthalen-1-yl methylcarbamate",
    uses: [
      "Agriculture",
      "Orchard Management",
      "Veterinary Use",
      "Environmental Protection",
    ],
    img: images.pestcide4,
    price: "220",
  },
  {
    id: "5",
    name: "Tebuconazole",
    desc: "Naphthalen-1-yl methylcarbamate",
    uses: ["Wood Preservation", "Agricultural Use", "Anti-feeding properties"],
    img: images.pestcide2,
    price: "220",
  },
];

const weather = [
  {
    date: "4/May/2024",
    id: 1,
    status: 19,
    condition: "Rainy",
  },
  {
    date: "5/May/2024",
    id: 2,
    status: 22,
    condition: "suny",
  },
  {
    date: "6/May/2024",
    id: 3,
    status: 20,
    condition: "cloudy",
  },
  {
    date: "7/May/2024",
    id: 4,
    status: 21,
    condition: "Rainy",
  },
  {
    date: "8/May/2024",
    id: 5,
    status: 18,
    condition: "Rainy",
  },
  // ... add more objects as needed
];

export default {
  communityFourmData,
  seeds,
  pesticides,
  weather,
  // services,
};
