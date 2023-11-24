import React from 'react'
import { useNavigate } from 'react-router-dom'
function Bmi_5() {
  const navi = useNavigate()
  return (
    <div>
    <div>
    <h1>ค่าดัชนีมวลกาย (BMI)</h1>
    </div>
    <div>BMI  มากกว่า 30</div>
    <div>อยู่ในเกณฑ์   อ้วน/อ้วนระดับ 3</div>
    <div>ภาวะเสี่ยงต่อโรค   อันตรายระดับ 3</div>
    <button onClick={() => navi("/advice_5")}>คำแนะนำ</button>
    <div><button>ถัดไป</button></div>
    </div>
  )
}

export default Bmi_5