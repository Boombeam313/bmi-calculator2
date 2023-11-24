import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'; // เพิ่มการ import Button จาก react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // นำเข้า CSS ของ Bootstrap

function Advice_1() {
  const navi = useNavigate();
  return (
    <>
      <div>
        <h1>คำแนะนำค่าดัชนีมวลกาย (BMI)</h1>
      </div>
      <div className='abc'>
        <p>1. ระวังเรื่องคุณภาพของอาหารที่กินเข้าไปด้วย เลือกกินอาหารที่ดี มีประโยชน์ ลดหวาน มัน เค็ม</p>
        <p>2. เลือกกินอาหารให้หลากหลายครบ 5 หมู่ โดยเน้นอาหารที่มีโปรตีนเพื่อช่วยใน การเสริมสร้างกล้าม เนื้อหากต้องการ เพิ่มน้ำหนัก ให้ไม่ผอมจนเกินไปให้เพิ่ม ปริมาณการกินอาหารประมาณ 300-500 กิโลแคลอรี</p>
        <p>3. ออกกำลังกายสม่ำเสมอระดับความ หนักปานกลางโดยเลือกกิจกรรมการ ออกกำลังกายที่ชื่นชอบและ สนุกสนาน เพื่อส่งเสริมให้อยากออกกำลังกาย ลดความเบื่อหน่าย</p>
      </div>
      <div>
        {/* ใช้ Button จาก react-bootstrap แทน button ธรรมดา */}
        <Button variant="primary" onClick={() => navi('/bmi_1')}>ย้อนกลับ</Button>
      </div>
    </>
  );
}

export default Advice_1;
