import React from 'react'

function Target() {
  return (
    <div>
        <h1>น้ำหนักเป้าหมายของคุณเท่าไหร่</h1>
        <input type="number" />
        <label htmlFor="target"> กก.</label>
        <p>โปรดป้อนค่าตั้งต้นตังแต่ 25 กก. ถึง 300 กก.</p>
        <button>หน้าถัดไป</button>
    </div>
  )
}

export default Target