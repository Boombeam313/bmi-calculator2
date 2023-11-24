import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'; // เพิ่มการ import Button จาก react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // นำเข้า CSS ของ Bootstrap

function Advice_4() {
  const navi = useNavigate()
  return (
    <>
    <div>
    <h1>คำแนะนำค่าดัชนีมวลกาย (BMI)</h1>
    </div>
    <div className='abc'>
    <p>1. ควบคุมปริมาณแคลอรี่ที่คุณบริโภคและ รับประทานอาหารที่มีสารอาหารครบถ้วน,รวมถึงผักผลไม้, โปรตีนคุณภาพสูง</p>
    <p>2. เพิ่มการออกกำลังกายในชีวิตประจำวัน เช่น การเดิน, วิ่ง,หรือการออกกำลังกาย อื่นๆ เพื่อช่วยเสริมสร้างกล้ามเนื้อ และเสริมสุขภาพทั่วไป</p>
    <p>3. รับประทานอาหารที่มีค่าโภชนาการ สมดุลเพิ่มการบริโภค ผักผลไม้, แป้งธัญพืชเต็มเม็ด, โปรตีนคุณภาพ และลดการบริโภคอาหารที่มีปริมาณ น้ำตาลและไขมันสูง</p>
    <p>4. สุขภาพจิตมีผลต่อสุขภาพร่างกายดังนั้นควรดูแลสุขภาพ จิตอย่างดี</p>
    <p>5. ควบคุมน้ำหนักอย่างรอบคอบให้ทำไป อย่างรอบคอบและทำตามคำแนะนำ จากนักโภชนาการหรือหมอ</p>
    </div>
    <Button variant="primary" onClick={() => navi('/bmi_4')}>ย้อนกลับ</Button>
    </>
  )
}

export default Advice_4