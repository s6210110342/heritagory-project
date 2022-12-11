import "./post_thai.css";

const DummyText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const MainContent = () => {
  return (
    <div className="content">
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ประมวลกฎหมายแพ่งและพาณิชย์ มาตรา 1599
        วรรคแรก บัญญัติว่า "เมื่อบุคคลใดตาย มรดกของบุคคลนั้นตกทอดแก่ทายาท" และ
        มาตรา 1755 บัญญัติว่า "อายุความหนึ่งปีนั้น
        จะยกขึ้นต่อสู้ได้ก็แต่โดยบุคคลซึ่งเป็นทายาท
        หรือบุคคลซึ่งชอบที่จะใช้สิทธิของทายาท หรือโดยผู้จัดการมรดก" ดังนั้น
        ปัญหาที่ต้องพิจารณาในเบื่องต้นคือ <b>"ทายาท" หมายถึงบุคคลประเภทใด</b>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ประมาลกฎหมายแพ่งและพาณิชย์ มาตรา 1603
        "กองมรดกย่อมตกทอดแก่ทายาทโดยสิทธิตามกฎหมายหรือโดยพินัยกรรม"
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>
          ทายาทที่มีสิทธิตามกฎหมาย เรียกว่า "<u>ทายาทโดยธรรม</u>"
        </b>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>
          ทายาทที่มีสิทธิตามพินัยกรรม เรียกว่า "<u>ผู้รับพินัยกรรม</u>"
        </b>
      </p>

      {/* 1. ทายาทโดยธรรม */}
      <h2 id="initial-header">1. ทายาทโดยธรรม</h2>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;บุคคลที่กฎหมายกำหนดให้มีสิทธิได้รับมรดกของผู้ตาย
        เมื่อเจ้ามรดกถึงแก่ความตายโดยไม่ได้ทำพินัยกรรมไว้
        มรดกจะตกทอดแก่ใครก่อนหลังนั้น
        กฎหมายได้กำหนดไว้ตามลำดับญาติใกล้ชิดในมาตรา 1629 ประกอบมาตรา 1630
        ที่ว่าทายาทโดยธรรมที่เป็นญาติมีเพียง 6 ลำดับเท่านั้น
        ซึ่งถ้าไม่มีทายาทโดยธรรมที่เป็นญาติตามที่ระบุไว้ใน 6 ลำดับ
        และไม่มีคู่สมรส มรดกจะตกแก่แผ่นดินตาม มาตรา 1753
      </p>

      {/* 2. ผู่รับพินัยกรรม */}
      <h2 id="second-header">2. ผู้รับพินัยกรรม</h2>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ได้แก่ "บุคคลธรรมดา" หรือ
        "นิติบุคคล" ที่เจ้ามรดกกำหนดไว้ในพินัยกรรมให้เป็นผู้รับมรดก
        ผู้รับพินัยกรรมไม่จำเป็นต้องเป็นญาติหรือทายาทในกองมรดกอยู่ก่อน
        เมื่อเจ้ามรดกทำพินัยกรรมยกทรัพย์มรดกส่วนใดให้ผู้รับพินัยกรรมแล้ว
        ทายาทโดยธรรมก็ไม่มีสิทธิในทรัพย์สินมรดกส่วนนั้น
        แต่ทายาทโดยธรรมทุกประเภทอาจเป็นผู้รับพินัยกรรมได้
        นั้นหมายความว่าทายาทจะมีสิทธิรับมรดกได้สองทาง
        เว้นแต่เจ้ามรดกจะแสดงเจตนาไว้ในพินัยกรรม เช่น ระบุไว้ในพินัยกรรมว่า
        ไม่ให้มีสิทธิ์ได้รับมรดกอย่างอื่นอีก เป็นต้น
      </p>

      <h3 id="third-header">2.1 บุคคลธรรมดา</h3>
      <p className="ml-4">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;บุคคลธรรมดา{" "}
        <b>เป็นได้ทั้ง "ทายาทโดยธรรม" และ "ผู้รับพินัยกรรม"</b>{" "}
        ซึ่งจะเป็นได้นั้น{" "}
        <u>จะต้องเป็นผู้มีความสามารถเป็นทายาทได้ในขณะที่เจ้ามรดกตาย</u>
        ได้แก่ ผู้มีสภาพบุคคล หรือผู้ที่สามารถมีสิทธิได้ในเวลาที่เจ้ามรดกตาย
        ตามมาตรา 15 บัญญัติว่า
        "สภาพบุคคลเมื่อคลอดออกมาแล้วอยู่รอดเป็นทารกจึงมีสิทธิในความเป็นทายาทได้
        ถ้าคลอดแต่ตายในระหว่างคลอดไม่ถือว่ามีสภาพบุคคลจึงไม่มีสิทธิในความเป็นทายาท"
        และ มาตรา 1604 บัญญัติว่า
        "บุคคลธรรมดาจะมีสิทธิในความเป็นทายาทได้ต้องเกิดแล้วอยู่รอดภายใน 310 วัน
        นับแต่เจ้ามรดกถึงแก่ความตาย"
      </p>

      <h4 id="fourth-header">ตัวอย่างคดี</h4>
      <p className="ml-8">
        <b>คำพิพากษาฎีกาที่ 210/2491</b>
      </p>

      <h3 id="fifth-header">2.2 นิติบุคคล</h3>
      <p className="ml-4">
        นิติบุคลจะเป็นทายาทได้ก็ต่อเมื่อ <b>เป็นผู้รับพินัยกรรมเท่านั้น</b>{" "}
        ซึ่งนิติบุคคลก็เช่นเดียวกับบุคคลธรรมดา
        คือต้องมีสภาพเป็นนิติบุคคลอยู่ในเวลาที่เจ้ามรดกถึงแก่ความตาย เพราะเมื่อเจ้ามรดกตาย มรดกจะตกทอดแก่ผู้รับพินัยกรรมทันที 
      </p>

      <h3 id="sixth-header">2.3 Listing all found heading</h3>
      <p className="ml-4">{DummyText}</p>
      <p className="ml-4">{DummyText}</p>

      <h3 id="seventh-header">
        2.4 Linking heading to there respective sections
      </h3>
      <p className="ml-4">{DummyText}</p>
      <p className="ml-4">{DummyText}</p>

      <h3 id="find-highlight">
        2.5 Find and highlight the currently active heading
      </h3>
      <p className="ml-4">{DummyText}</p>
      <p className="ml-4">{DummyText}</p>

      <h2 id="conclusion">3. Conclusion</h2>
      <p>{DummyText}</p>
    </div>
  );
};

export default MainContent;
