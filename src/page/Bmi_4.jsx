import React from 'react'
import { useNavigate } from 'react-router-dom'
function Bmi_4() {
  const navi = useNavigate()
  return (
    <div>
    <div>
    <h1>ค่าดัชนีมวลกาย (BMI)</h1>
    </div>
    <div>BMI  25 - 29.90</div>
    <div>อยู่ในเกณฑ์   อ้วน/อ้วนระดับ 2 </div>
    <div>ภาวะเสี่ยงต่อโรค   อันตรายระดับ 2</div>
    <button onClick={() => navi("/advice_4")}>คำแนะนำ</button>
    <div><button>ถัดไป</button></div>
    </div>
  )
}

export default Bmi_4