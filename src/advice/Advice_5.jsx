import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'; // เพิ่มการ import Button จาก react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // นำเข้า CSS ของ Bootstrap

function Advice_5() {
  const navi = useNavigate()
  return (
    <>
    <div>
    <h1>คำแนะนำค่าดัชนีมวลกาย (BMI)</h1>
    </div>
    <div className='abc'>
    <p>1. รับประทานอาหารในปริมาณที่เหมาะสม และหลีกเลี่ยงการบริโภคอาหารใน ปริมาณมากเกินไป</p>
    <p>2. ลดการบริโภคอาหารที่มีความสูงใน โปรตีนที่ไม่ดีเช่นอาหารหมักหรืออาหาร จางๆ และหลีกเลี่ยงอาหารหรือเครื่องดื่ม ที่มีความสูงในน้ำตาลและไขมัน</p>
    <p>3. ระบุเป้าหมายการลดน้ำหนักหรือควบคุมน้ำหนัก เพื่อลดความเสี่ยงต่อโรคร้าย ต่างๆ ควรทำการลดน้ำหนักอย่าง ช้าๆ และด้วยวิธีที่ยั่งยืน</p>
    <p>4. เลือกกินให้มากๆ ลดอาหารหวาน ของหวาน ขนม เครื่องดื่มที่มีน้ำตาล งด หรือหลีกเลี่ยงของทอด อาหารไขมันสูง</p>
    </div>
    <Button variant="primary" onClick={() => navi('/bmi_5')}>ย้อนกลับ</Button>
    </>
  )
}

export default Advice_5