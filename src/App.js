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
