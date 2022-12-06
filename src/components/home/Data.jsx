import React from "react";
import './home.css'

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        เว็บไซต์ให้ความรู้เกี่ยวกับกฎหมายมรดก
      </h1>

      <h3 className="home__subtitle">ไทย & อิสลาม</h3>
      <p className="home__description">
        HeritageLaws เป็นเว็บไซต์ที่ให้ความรู้แก่ผู้ที่สนใจในกฎหมายมรดกไทย
        หรือกฎหมายมรดกอิสลาม เพื่อความสะดวกทางเราได้มีการคิดค้นเครื่องมือคำนวณส่วนแบ่งมรดกในศาสนาอิสลาม
        และ Line Official ที่คุณสามารถเพิ่มเพื่อนกับเราได้เพียง "คลิก" เดียว...
      </p>

      <a href="thai" className="button home__button mr-2 mb-2">ไทย</a>
      <a href="islam" className="button home__button mr-2">อิสลาม</a>
      <a href="islam" className="button home__button">คำนวณมรดกอิสลาม</a>  
    </div>
  );
};

export default Data;
