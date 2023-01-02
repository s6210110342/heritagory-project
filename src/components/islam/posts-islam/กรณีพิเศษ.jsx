import React from "react";
import { Helmet } from "react-helmet";
// import img1 from "../../../assets/islam/img-title/กฎหมายมรดก.png";
import "./posts-islam.css"

const กรณีพิเศษ = () => {
  const TITLE = "วิธีการคำนวณมรดกอิสลาม";

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <div className="content">
        <br></br>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; การแบ่งมรดกกรณีพิเศษ ทางผู้จัดทำได้แบ่งออกเป็น 9 หัวข้อ ตามแหล่งอ้างอิงที่ได้ศึกษาไว้ ดังต่อไปนี้
        </p>
      </div>

      <div>
        <h1 className="ml-4">แนะนำสำหรับคุณ</h1>
        <ul className="list__post">
          <li>
            <a className="text-indigo-700 underline" href="/islam/2">
              ทายาทที่มีสิทธิและเสียสิทธิรับมรดก
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default กรณีพิเศษ;
