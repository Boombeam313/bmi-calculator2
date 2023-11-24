import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'; // เพิ่มการ import Button จาก react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // นำเข้า CSS ของ Bootstrap
function Advice_2() {
  const navi = useNavigate()
  return (
    
    <>
    <div>
    <h1>คำแนะนำค่าดัชนีมวลกาย (BMI)</h1>
    </div>
    <div className='abc'>
    <p>1. ระวังเรื่องคุณภาพของอาหารที่กินเข้าไปด้วย เลือกกินอาหารที่ดี มีประโยชน์ ลดหวาน มัน เค็ม </p>
    <p>2. เลือกกินอาหารให้หลากหลายครบ 5 หมู่ โดยเน้นอาหารที่มีโปรตีนเพื่อช่วยในการ เสริมสร้างกล้ามเนื้อ หากต้องการเพิ่ม น้ำหนัก ให้ไม่ผอมจนเกินไป ให้เพิ่ม ปริมาณการกินอาหารประมาณ 300-500 กิโลแคลอรี</p>
    <p>3. ออกกำลังกายสม่ำเสมอระดับความ หนักปานกลางโดยเลือกกิจกรรมการ ออกกำลังกายที่ชื่นชอบและ สนุกสนาน เพื่อส่งเสริมให้อยากออกกำลังกาย ลดความเบื่อหน่าย</p>
    </div>
    <Button variant="primary" onClick={() => navi('/bmi_2')}>ย้อนกลับ</Button>
    </>
  )
}

export default Advice_2