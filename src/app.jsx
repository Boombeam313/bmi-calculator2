import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Bmi_1 from './page/Bmi_1'
import Bmi_2 from './page/Bmi_2'
import Bmi_3 from './page/Bmi_3'
import Bmi_4 from './page/Bmi_4'
import Bmi_5 from './page/Bmi_5'
import Advice_1 from './advice/Advice_1'
import Advice_2 from './advice/Advice_2'
import Advice_3 from './advice/Advice_3'
import Advice_4 from './advice/Advice_4'
import Advice_5 from './advice/Advice_5'
import Calendar_1 from './Calendar/Calendar_1'
import Calendar_2 from './Calendar/Calendar_2'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bmi_1" element={<Bmi_1 />} />
        <Route path="/bmi_2" element={<Bmi_2 />} />
        <Route path="/bmi_3" element={<Bmi_3 />} />
        <Route path="/bmi_4" element={<Bmi_4 />} />
        <Route path="/bmi_5" element={<Bmi_5 />} />
        <Route path="/advice_1" element={<Advice_1 />} />
        <Route path="/advice_2" element={<Advice_2 />} />
        <Route path="/advice_3" element={<Advice_3 />} />
        <Route path="/advice_4" element={<Advice_4 />} />
        <Route path="/advice_5" element={<Advice_5 />} />
        <Route path="/calendar_1" element={<Calendar_1 />} />
        <Route path="/calendar_2" element={<Calendar_2 />} />
      </Routes>
    
    </BrowserRouter>

  
  )
}

export default App