import React from 'react'
import { useNavigate } from 'react-router-dom'
function Bmi_2() {
  const navi = useNavigate()
  return (
    <div>
    <div>
    <h1>ค่าดัชนีมวลกาย (BMI)</h1>
    </div>
    <div>BMI  18.50 - 22.90</div>
    <div>อยู่ในเกณฑ์   น้ำหนักปกติ</div>
    <div>ภาวะเสี่ยงต่อโรค   เท่ากับคนปกติ</div>
    <button onClick={() => navi("/advice_2")}>คำแนะนำ</button>
    <div><button>ถัดไป</button></div>

    </div>
  )
}

export default Bmi_2