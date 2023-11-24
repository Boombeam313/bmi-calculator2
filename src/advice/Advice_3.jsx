import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'; // เพิ่มการ import Button จาก react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // นำเข้า CSS ของ Bootstrap
function Advice_3() {
  const navi = useNavigate()
  return (
    <>
    <div>
    <h1>คำแนะนำค่าดัชนีมวลกาย (BMI)</h1>
    </div >
    <div className='abc'>
    <p>1. รับประทานอาหารในปริมาณที่เหมาะสม และหลีกเลี่ยงการบริโภคอาหารใน ปริมาณมากเกินไป</p>
    <p>2. ออกกำลังกายอย่างสม่ำเสมอ อาจช่วย ลดน้ำหนักสร้างกล้ามเนื้อ และเพิ่มระดับ พลังงานในร่างกาย</p>
    <p>3. ระบุเป้าหมายการลดน้ำหนักหรือควบคุมน้ำหนักเพื่อ ลดความเสี่ยงต่อโรคร้าย ต่างๆ ควรทำการลดน้ำหนักอย่าง ช้าๆ และด้วยวิธีที่ยั่งยืน</p>
    <p>4. การปรึกษากับหมอหรือโภชนาการจะ ช่วยในการกำหนดแผนการรักษาและการดูแลสุขภาพที่เหมาะสมสำหรับคุณ</p>
    <p>5. ความเครียดและข้อกังวลอาจมีผลต่อการควบคุมน้ำหนักและสุขภาพดังนั้นควร รักษาสุขภาพใจด้วยการปฏิบัติสิ่งที่ ทำให้คุณรู้สึกผ่อนคลาย</p>
    </div>
    <Button variant="primary" onClick={() => navi('/bmi_3')}>ย้อนกลับ</Button>
    </>
 
  )
}

export default Advice_3