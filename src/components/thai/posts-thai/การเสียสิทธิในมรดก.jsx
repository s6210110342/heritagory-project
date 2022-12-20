import React from "react";
import { Helmet } from "react-helmet";

const การเสียสิทธิในมรดก = () => {
  const TITLE = "ลักษณะแบบไหน ? ถึงเรียกว่าเสียสิทธิในการรับมรดก";

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <div className="content">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;การเสียสิทธิในการรับมรดก
          คือเหตุการณ์ที่ทำให้ผู้ที่มีสิทธิรับมรดก
          ไม่ว่าจะอยู่ในฐานะทายาทโดยธรรม
          หรือผู้รับพินัยกรรมก็ตามได้เสียไปซึ่งสิทธิในมรดก ซึ่งมีด้วยกัน 4
          ประการ คือ
          <ul className=" list-decimal ml-16 mt-3">
            <li>การถูกกำจัดมิให้รับมรดก</li>
            <li>การตัดมิให้รับมรดก</li>
            <li>การสละมรดก</li>
            <li>การสูญเสียมรดกโดยอายุความ</li>
          </ul>
        </p>

        {/* 1. การถูกกำจัดมิให้รับมรดก */}
        <h2 id="initial-header">1. การถูกกำจัดมิให้รับมรดก</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;การถูกกำจัดมิให้รับมรดกเป็นผลจากบทบัญญัติของกฎหมายที่ทำให้ทายาทเสียสิทธิในมรดก
          การถูกกำจัดมิให้รับมรดกมี 2 กรณี คือ{" "}
          <mark className=" bg-[#fee9b2] rounded-xl">
            การถูกกำจัดมิให้รับมรดกฐานยักยอกหรือปิดบังทรัพย์มรดก
          </mark>{" "}
          และ
          <mark className=" bg-[#fee9b2] rounded-xl">
            การถูกกำจัดมิให้รับมรดกฐานเป็นผู้ไม่สมควร
          </mark>
        </p>

        <h3 id="second-header">
          1.1 การถูกกำจัดมิให้รับมรดกฐานยักยอกหรือปิดบังทรัพย์มรดก
        </h3>
        <p className="ml-4">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;การถูกกำจัดมิให้รับมรดกฐานยักยอกหรือปิดบังทรัพย์มรดก
          หมายความว่า เมื่อเจ้ามรดกตายแล้วทายาทได้ปิดบังยักย้ายทรัพย์มรดก
          โดยทำให้ทายาทคนอื่นเสื่อมประโยชน์ ทายาทผู้นั้นจะถูกกำจัดมิให้รับมรดก
          ซึ่งการถูกกำจัดมิให้รับมรดกนี้เป็นการถูกกำจัดหลังเจ้ามรดกตาย
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ประมวลกฎหมายแพ่งและพาณิชย์
          มาตรา 1605 บัญญัติว่า{" "}
          <mark className=" bg-[#fee9b2] rounded-xl">
            "ทายาทคนใดยักย้ายหรือปิดบังทรัพย์มรดกเท่าส่วนที่ตนได้
            หรือมากกว่านั้นโดยฉ้อฉล หรือรู้อยู่ว่าตน{" "}
            <u>ทำให้เสื่อมประโยชน์ของทายาทอื่น</u>{" "}
            ทายาทคนนั้นต้องถูกกำจัดมิให้รับมรดกเลย
            แต่ถ้าได้ยักย้ายหรือปิดบังทรัพย์มรดกน้อยกว่าส่วนที่ตนจะได้
            ทายาทคนนั้นต้องถูกกำจัดมิให้ได้มรดกเฉพาะส่วนที่ได้ยักย้ายหรือปิดบังไว้นั้น"
          </mark>
          มาตรา 1605 นี้จะไม่ใช้บังคับทายาทในฐานะผู้รับพินัยกรรม
          เพราะผู้ตายได้ทำพินัยกรรมยกทรัพย์สินให้เป็นเฉพาะแล้ว
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;คำว่า{" "}
          <b>"ทำให้เสื่อมประโยชน์"</b> นั้นต้องดูว่าถ้าได้ทรัพย์มรดกคืนมาแล้วจะเสื่อมประโยชน์
        </p>
      </div>
    </>
  );
};

export default การเสียสิทธิในมรดก;
