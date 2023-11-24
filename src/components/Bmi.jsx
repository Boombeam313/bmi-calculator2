import React, { useState } from 'react';
import Weight from './Weight' ;
import Height from './Height';

function Bmi(props) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculateBmi = () => {
    console.log('tttttt ')
    const calculatedBmi = weight / ((height / 100) * (height / 100));
    setBmi(calculatedBmi);

    
  };
  
  const checkBmiResult = () => {
    if (bmi === 0) return '-'
    if (bmi < 18.5) return 'อยู่ในเกณฑ์น้ำหนักน้อย / ผอม'
    if (bmi < 25) return 'อยู่ในเกณฑ์ปกติ (สุขภาพดี)'
    if (bmi < 30) return 'อยู่ในเกณฑ์ท้วม / โรคอ้วนระดับ 1'
    if (bmi < 35) return 'อยู่ในเกณฑ์อ้วน / โรคอ้วนระดับ 2'
    if (bmi >= 35) return 'อยู่ในเกณฑ์อ้วนมาก / โรคอ้วนระดับ 3'
  }

  return (
    <div>

      <Weight onWeightChange={(value) => setWeight(value)} />
      <Height onHeightChange={(value) => setHeight(value)} />
      <p>น้ำหนัก: {weight} กก.</p>
      <p>ส่วนสูง: {height} ซม.</p>
      <p>ค่า BMI คือ: {bmi}</p>
      <p>{checkBmiResult(bmi)}</p>
      <button onClick={calculateBmi}>คำนวณ BMI</button>
      {/* ส่วนอื่น ๆ ที่เกี่ยวข้องกับผลลัพธ์ BMI */}
    </div>
  );
}

export default Bmi;
