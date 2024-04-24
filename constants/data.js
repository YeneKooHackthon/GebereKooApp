import images from "./images";
const communityFourmData = [
  {
    id: "1",
    title: "ተባዮችዎን ይረዱ",
    author: "ዳግም ለገሰ",
    img: images.pests,
    content:
      "ማንኛውንም ፀረ-ተባይ ከመጠቀምዎ በፊት በሰብልዎ ላይ ጉዳት የሚያደርሱ ተባዮችን ይለዩ። ሁሉም ተባዮች ጎጂ አይደሉም, እና አንዳንዶቹም ጠቃሚ ሊሆኑ ይችላሉ.",
  },
  {
    id: "4",
    title: "እራስህን ጠብቅ",
    author: "ሰላም ፍቃደ",
    img: images.keepSafe,
    content: "ፀረ ተባይ መድሃኒቶችን ስትይዝ እና ስትተገብር ሁል ጊዜ ተገቢውን መከላከያ ልብስ እና መሳሪያ ይልበስ",
  },
  {
    id: "2",
    title: "መመሪያዎችን ይከተሉ",
    author: "ገመዳ መለሰ",
    img: images.instruction,
    content:
      "ሁልጊዜ ያንብቡ እና በፀረ-ተባይ ምልክት ላይ ያሉትን መመሪያዎች ይከተሉ። ከመጠን በላይ መጠቀም ወይም የተሳሳተ አጠቃቀም ውጤታማ ያልሆነ የተባይ መቆጣጠሪያ እና በአካባቢው ላይ ሊደርስ የሚችል ጉዳት ሊያስከትል ይችላል",
  },
  {
    id: "3",
    title: "ጊዜ ቁልፍ ነው",
    author: "ዳግም ለገሰ",
    img: images.seasons,
    content:
      "ለበለጠ ውጤታማነት ፀረ ተባይ መድኃኒቶችን በትክክለኛው ጊዜ ይተግብሩ፣ ለምሳሌ በተባዮች የሕይወት ዑደት ውስጥ በተወሰነ ደረጃ ወይም በተወሰነ ቀን",
  },

  {
    id: "5",
    title: "አማራጮችን አስቡ",
    author: "ገመዳ መለሰ",
    img: images.pesticideMan,
    content:
      "ተባዮችን ለመቆጣጠር ባዮሎጂካል፣ባህላዊ እና ኬሚካላዊ ዘዴዎችን በማጣመር የተቀናጁ የተባይ መቆጣጠሪያ ስልቶችን ተመልከት",
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
