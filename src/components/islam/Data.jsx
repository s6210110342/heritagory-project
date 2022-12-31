import มรดก from "./posts-islam/มรดก";
import ทายาทอิส from "./posts-islam/ทายาทอิส";
// import พินัยกรรม from "./posts-thai/พินัยกรรม";
// import การรับมรดกแทนที่ from "./posts-thai/การรับมรดกแทนที่";
// import พระภิกษุ from './posts-thai/พระภิกษุ'
// import การเสียสิทธิรับมรดก from './posts-thai/การเสียสิทธิในมรดก'
import img1 from "../../assets/islam/img-title/กฎหมายมรดก.png";
import img2 from "../../assets/islam/img-title/ทายาท.png";
import img3 from "../../assets/islam/img-title/คำนวณ.png";
import img4 from "../../assets/thai/img_title/พระภิกษุ.png";
import img5 from "../../assets/islam/img-title/พินัยกรรม.png";
import imgุ6 from "../../assets/islam/img-title/อายัต.png";

export const islamData = [
  {
    id: 1,
    title: "ความรู้ทั่วไปของกฎหมายมรดกอิสลาม",
    category: "ความรู้ทั่วไป",
    subCategory: ["ข้อมูลทั่วไป"],
    description:
      "กฎหมายมรดก ( الفرائض) ในศาสนาอิสลามได้กำหนดให้ทั้งชายและหญิงสามารถถือกรรมสิทธิ์ได้ ภายใต้ข้อกำหนดและกฎเกณฑ์ของอิสลาม ซึ่งพระมหาคัมภีร์อัลกุรอานได้อธิบายถึงเกณฑ์ต่างๆ ของการแบ่งมรดก สถานะภาพของผู้รับมรดกอย่างครบถ้วนสมบูรณ์ โดยมิได้ปล่อยช่องว่างไว้ให้ผู้หนึ่งผู้ใดทำการกำหนดการแบ่งมรดกได้ด้วยตนเอง",
    content: <มรดก />,
    cover: img1,
  },
  {
    id: 2,
    title: "ทายาทที่มีสิทธิและเสียสิทธิรับมรดก",
    category: "ทายาทที่มีสิทธิและเสียสิทธิ",
    subCategory: ["ทายาทที่มีสิทธิ", "ทายาทที่เสียสิทธิ"],
    description:
      "ทายาท หมายถึง บุคคลที่มีสิทธิรับมรดกของผู้ตาย แต่ไม่รวมถึงผู้รับพินัยกรรม โดยผู้ที่เป็นทายาทของผู้ตายจะต้องมีคุณสมบัติที่ถูกกำหนดไว้",
    content: <ทายาทอิส />,
    cover: img2,
  },
  {
    id: 3,
    title: "กรณีใดบ้างที่สามารถรับมรดกแทนที่กันได้",
    category: "ผู้มีสิทธิรับมรดก",
    subCategory: ["การรับมรดกแทนที่", "ทายาท"],
    description:
      "szdfsafsa",
    // content: <การรับมรดกแทนที่ />,
    cover: img3,
  },
  {
    id: 4,
    title: "dsfdsfds",
    category: "dfdsfds",
    subCategory: [ "ทายาท", "เจ้ามรดก"],
    description:
      "dfsdfdsf",
    // content: <พระภิกษุ />,
    cover: img4,
  },
  {
    id: 5,
    title: "fdgfdg",
    category: "fgfdgd",
    subCategory: ["มรดก", "การเสียสิทธิในมรดก"],
    description:
      "fgfdgfdgfdgม",
    // content: <การเสียสิทธิรับมรดก />,
    cover: imgุ6,
  },
  {
    id: 6,
    title: "รูปแบบพินัยกรรม ใครสามารถทำพินัยกรรมได้บ้าง ?",
    category: "พินัยกรรม",
    subCategory: ["พินัยกรรม"],
    description: "ดดดลำดับ",
    // content: <พินัยกรรม />,
    cover: img5,
  },
];
