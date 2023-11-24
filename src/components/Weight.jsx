import React, { useState } from 'react';

function Weight(props) {
  const [weight, setweight] = useState();

  const handleInputChange = (event) => {
    const value = event.target.value;
    // ตรวจสอบว่าค่าที่ผู้ใช้ป้อนอยู่ในช่วงที่ถูกต้องหรือไม่
    
      setweight(value);
      props.onWeightChange(value);
    
  };

  const handleSubmit = () => {
    // ส่วนนี้คุณสามารถใช้ค่า userWeight ที่เก็บไว้ในการทำต่อได้
    console.log('น้ำหนักที่ผู้ใช้ป้อน:', weight);
    // ทำอย่างอื่นต่อที่นี่ เช่น นำค่าไปยังหน้าถัดไป
  };

  return (
    <div>
      <h1>น้ำหนักคุณเท่าไหร่</h1>
      <input
        type="number"
        value={weight}
        onChange={handleInputChange}
      />
      <label htmlFor="userWeight"> กก.</label>
      <p>โปรดป้อนค่าตั้งต้นตั้งแต่ 25 กก. ถึง 300 กก.</p>
    </div>
  );
}

export default Weight;
