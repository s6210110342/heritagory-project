import React from "react";
import { Helmet } from "react-helmet";
// import img1 from "../../../assets/islam/img-title/กฎหมายมรดก.png";
import "./posts-islam.css"

const คำนวณ = () => {
  const TITLE = "วิธีการคำนวณมรดกอิสลาม";

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <div className="content">
        <br></br>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;วิธีการคำนวณมรดกอิสลาม มีความสำคัญและจำเป็นอย่างมาก เนื่องจากมีเงื่อนไขและกฎเกณฑ์ของทายาทแต่ละรายแตกต่างกันออกไป 
          และยังมีตัวเลขเศษส่วน และการบวกเศษส่วนเข้ามาเกี่ยวข้องด้วย
        </p>
      </div>

      <div>
        <h1 className="ml-4">แนะนำสำหรับคุณ</h1>
        <ul className="list__post">
        <li>
            <a className="text-indigo-700 underline" href="/islam/1">
            ความรู้ทั่วไปของกฎหมายมรดกอิสลาม
            </a>
          </li>
          <li>
            <a className="text-indigo-700 underline" href="/islam/2">
              ทายาทที่มีสิทธิและเสียสิทธิรับมรดก
            </a>
          </li>
          <li>
            <a className="text-indigo-700 underline" href="/islam/4">
              การแบ่งมรดกกรณีพิเศษ
            </a>
          </li>
          <li>
            <a className="text-indigo-700 underline" href="/islam/5">
              บทบัญญัติที่ถูกกล่าวถึงในกฎหมายมรดก
            </a>
          </li>
          <li>
            <a className="text-indigo-700 underline" href="/islam/6">
              พินัยกรรม
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default คำนวณ;
