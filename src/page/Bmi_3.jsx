import React from 'react'
import { useNavigate } from 'react-router-dom'
function Bmi_3() {
  const navi = useNavigate()
  return (
    <div>
    <div>
    <h1>ค่าดัชนีมวลกาย (BMI)</h1>
    </div>
    <div>BMI  23 - 24.90</div>
    <div>อยู่ในเกณฑ์   อ้วน/อ้วนระดับ 1</div>
    <div>ภาวะเสี่ยงต่อโรค   อันตรายระดับ 1</div>
    <button onClick={() => navi("/advice_3")}>คำแนะนำ</button>
    <div><button>ถัดไป</button></div>
    </div>
  )
}

export default Bmi_3