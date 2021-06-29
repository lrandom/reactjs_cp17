/*
Bài tập về nhà 
Tìm hiểu về các đặc điểm mới của JS ES 6 + 7 + 8 //vấn đáp 
Tìm hiểu trước về JSX - cú pháp cơ bản  // vừa dạy vừa hỏi
*/


/*
BT1 - Viết chương trình xem ảnh, cho một tập danh sách các ảnh như sau 
const gallery = [
  "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
  "https://img.nhandan.com.vn/Files/Images/2020/07/26/giai_thuong_lon-1595747403778.jpg"
  "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_nhiep_anh_gia-1595747471173.jpg",
  "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg"
]
tạo một giao diện dạng lưới và tải các ảnh lên lưới đó, khi người dùng click vào ảnh thì show to ảnh ra
ở giao diện phóng to sẽ có một nút close, khi click vào nút đó thì đóng giao diện phóng to 
*/

/*
BT2 - Từ link ảnh trên, hãy viết một slide xem ảnh bằng reactjs
*/

/*
BT3 - kết hợp B1 và B2, tạo một gallery xem ảnh,
khi click vào từng ảnh thì show ảnh bằng slide với ảnh hiện tại là ảnh click 
*/

//import logo from './logo.svg';
//import { useState } from 'react';
import './style.css'; //đưa CSS vào component //external way
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Notfound from './views/Notfound';
import QuizTest from './components/quiz_test/QuizTest';
import { 
   BrowserRouter as Router, 
   Switch,
   Route,
   Link
} from 'react-router-dom';
import anh from './assets/anh.svg';

function App() {

  return (
    <div>
       <img src={anh}/>
       <img src={process.env.PUBLIC_URL+"/logo192.png"}/>
       <img src={require('./assets/anh.svg').default}/>
    </div>

  );
}

export default App;
