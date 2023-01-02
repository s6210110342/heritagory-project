import React from "react";
import { Helmet } from "react-helmet";
// import img1 from "../../../assets/islam/img-title/กฎหมายมรดก.png";
import "./posts-islam.css"

const อายัต= () => {
  const TITLE = "บทบัญญัติที่ถูกกล่าวถึงในกฎหมายมรดก";

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <div className="content">
        <br></br>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; บทบัญญัติที่ถูกกล่าวถึงในกฎหมายมรดกมีเป็นจำนวนมาก เนื่องจาก อัลลอฮฺ (ซ.บ.) ต้องการให้ความกระจ่างแก่มนุษย์ โดยมิปล่อยช่องว่างให้ผู้ใดผู้หนึ่งดำเนินการแบ่งมรดกด้วยตนเอง
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

export default อายัต;
