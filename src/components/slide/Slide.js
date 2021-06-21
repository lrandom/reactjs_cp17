import React from 'react';
import './Slide.css'

class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            data: [
                "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
                "https://img.nhandan.com.vn/Files/Images/2020/07/26/giai_thuong_lon-1595747403778.jpg",
                "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_nhiep_anh_gia-1595747471173.jpg",
                "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg"
            ]
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.next();
        },3000)
    }

    next=async ()=>{
        //lấy dữ liệu từ state ra
        let data = this.state.data;
        let lastItem = data[data.length-1]; // lấy phần tử cuối cùng ra
        data.unshift(lastItem); //đẩy vào đầu mảng
        data.pop(); //xoá phần tử cuối đi
        await this.setState({data: data}); //cập nhật vào state
    }

    async prev(){
        let data = this.state.data;
        let fistItem = data[0];   //láy phần tử đầu tiên 
        data.push(fistItem); //đẩy phần tử đầu tiên vào cuối
        data.shift();//xoá phần tử đầu tiên đi
        await this.setState({data: data}); //cập nhật lại dữ liệu vào state
    }

    render() {
        return (
            <div className="slider">
                <button onClick={this.prev.bind(this)}>Prev</button>
                    <ul>
                    {
                       this.state.data.map((image,index)=>{
                            return (<li>
                                <img src={image}/>
                            </li>)    
                       })     
                    }               
                    </ul>

                <button onClick={this.next}>Next</button>
            </div>
        )
    }
}

export default Slide;