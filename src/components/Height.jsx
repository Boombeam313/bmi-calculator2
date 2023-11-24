import React, { useState } from 'react';

function Height(props) {
  const [height, setHeight] = useState();

  const handleInputChange = (event) => {
    const value = event.target.value;
    // ตรวจสอบว่าค่าที่ผู้ใช้ป้อนอยู่ในช่วงที่ถูกต้องหรือไม่
    
      setHeight(value);
      // เรียก callback function ที่ถูกส่งมาจาก Component ที่เรียกใช้ Height
      props.onHeightChange(value);
    
  };

  return (
    <div>
      <h1>ส่วนสูงของคุณเท่าไหร่</h1>
      <input
        type="number"
        value={height}
        onChange={handleInputChange}
      />
      <label htmlFor="height"> ซม.</label>
      <p>โปรดป้อนค่าตั้งต้นตั้งแต่ 100 ซม. ถึง 250 ซม.</p>
    </div>
  );
}

export default Height;
