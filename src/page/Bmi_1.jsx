import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'; // เพิ่มการ import Button จาก react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // นำเข้า CSS ของ Bootstrap

function Bmi_1() {
  const navi = useNavigate();

  return (
    <div>
      <>
        <div>
          <h1>ค่าดัชนีมวลกาย (BMI)</h1>
        </div>
        <div className='imag'>
          <img src="/images/P1.jpeg" alt="BMI Image" /> {/* เพิ่ม attribue alt สำหรับการ accessibility */}
        </div>
        <div className=''>BMI น้อยกว่า 18.50</div>
        <div>อยู่ในเกณฑ์ น้ำหนักน้อย/ผอม</div>
        <div>ภาวะเสี่ยงต่อโรค มากกว่าคนปกติ</div>
        <div>
          {/* ใช้ Button จาก react-bootstrap แทน button ธรรมดา */}
          <Button variant="primary" className="btn-white" onClick={() => navi("/advice_1")}>คำแนะนำ</Button>
        </div>
        <div>
          {/* ใช้ Button จาก react-bootstrap แทน button ธรรมดา */}
          <Button variant="primary"className="btn-white">ถัดไป</Button>
        </div>
      </>
    </div>
  );
}

export default Bmi_1;
