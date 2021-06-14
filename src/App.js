/*
Bài tập về nhà 
Tìm hiểu về các đặc điểm mới của JS ES 6 + 7 + 8 //vấn đáp 
Tìm hiểu trước về JSX - cú pháp cơ bản  // vừa dạy vừa hỏi
*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //tạo mới một state 
  const [name ,setName] = useState('CP17');

  return (
     <div>
      <div>{name}</div>
      <button onClick = 
      {()=>{setName('CP17 - NIIT');}}>
        Thay đổi tên
        </button>
     </div>
  );
}

export default App;
