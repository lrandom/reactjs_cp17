import React from 'react';
import './Nav.css';
class Nav extends React.Component {

    //TRẠNG THÁI INIT
    constructor() {
        super();
        this.state={
            navContent:'This is Nav'
        };
        console.log('Khởi tạo đối tượng component');
    }

    //TRẠNG THÁI MOUNTING 
    componentWillMount() {
        console.log('Chuẩn bị gắn vào cây DOM');
    }


    //override
    render(){
        console.log('Tạo giao diện');
       return (<div>
         <nav>Nav Menu</nav>   
         <button onClick={()=>{this.setState({navContent:'newContent'})}}>Change State </button>
       </div>)
       
    }

    componentDidMount(){
        console.log("Gắn vào cây DOM xong")
    }

    //TRẠNG THÁI UPDATE 
    shouldComponentUpdate(){
        return true;
    }
    
    componentWillUpdate(){
       console.log('Sẽ cập nhật lại gd');
    }

    componentDidUpdate(){
       console.log('Đã cập nhật xong gd');
    }

    //TRẠNG THÁI XOÁ KHỎI CÂY DOM  
    componentWillUnmount(){
        console.log('Xoá component Nav khỏi cây DOm');
    }
    
}

export default Nav;