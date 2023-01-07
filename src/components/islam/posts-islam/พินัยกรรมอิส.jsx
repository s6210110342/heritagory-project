import React from "react";
import { Helmet } from "react-helmet";
// import img1 from "../../../assets/islam/img-title/กฎหมายมรดก.png";
import "./posts-islam.css"

const พินัยกรรมอิส = () => {
  const TITLE = "พินัยกรรมอิส";

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <div className="content">
        <br></br>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;พินัยกรรม (วะศิยะฮฺ) ตามคำนิยามของนักกฎหมายอิสลามหมายถึง การยกกรรมสิทธิ์ให้กับผู้อื่นทีมีผลภายหลังจากการตายโดยความเสน่หา ไม่ว่าจะเป็นจะเป็นวัตถุหรือผลประโยชน์ก็ตาม 
          โดยพินัยกรรมเริ่มมีผลบังคับใช้ตามกฎหมายอิสลามทันทีเมื่อผู้ทำพินัยกรรมเสียชีวิตลงและไม่มีผู้ใดสามารถที่จะเพิกถอนพินัยกรรมได้ แม้จะเป็นทายาทโดยธรรมของผู้ทำพินัยกรรมก็ตาม แต่ต้องได้หลังจากที่ได้มีการใช้จ่ายในการจัดการศพและชำระหนี้สินเรียบร้อยแล้ว 
          และถ้าหากหนี้สินนั้นมีมากจนคลุมไปถึงทรัพย์สินทั้งหมด ผู้รับพินัยกรรมก็ไม่มีสิทธิแต่ประการใด ดังที่ได้ตรัสไว้ในอัลกุรอานซูเราะฮฺ อันนิซาอฺ อายัตที่ 11 ความว่า “ภายหลังจากจัดการตามพินัยกรรมที่กระทำไว้ และจัดการหนี้สินแล้ว” (สมาคมนักเรียนเก่าอาหรับประเทศไทย, ม.ป.ป.)
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
            <a className="text-indigo-700 underline" href="/islam/3">
            วิธีการคำนวณมรดกอิสลาม
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
        </ul>
      </div>
    </>
  );
};

export default พินัยกรรมอิส;
