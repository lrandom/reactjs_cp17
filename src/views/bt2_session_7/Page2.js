import React from 'react';
import {withRouter} from 'react-router-dom';
class Page2 extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            fullName:null,
            address:null,
            phone:null,
            email:null,
            password: null,
            confirmPassword:null
        };
    }

    next(){
        this.props.history.push(
            `/page-3?fullname=${this.state.fullName}
            &address=${this.state.address}
            &phone=${this.state.phone}
            &email=${this.state.email}
            `)
    }

    componentDidMount() {
       const queryString =  window.location.search;//tách query string ra
       /*
        ?fullname=Luan
        &address=HaLOng
        &phone=0868*/
       const url = new URLSearchParams(queryString);
       this.setState({
           fullName: url.get('fullname'),
           address: url.get('address'),
           phone:url.get('phone')
       },()=>{
           console.log(this.state);
       })
    }

    render() {
        return <div>
        <h5>Thông tin tài khoản</h5>
        <form onSubmit={this.next.bind(this)}>
           <input type="email" onChange={(evt)=>{this.setState({email:evt.target.value})}}  placeholder="Email"/><br></br>
           <input type="password" onChange={(evt)=>{this.setState({password:evt.target.value})}}  placeholder="Mật khẩu"/><br></br>
           <input type="password" onChange={(evt)=>{this.setState({confirmPassword:evt.target.value})}} placeholder="Nhắc lại mật khẩu"/><br></br>    
           <button>Chuyển</button>
        </form>
       </div>
    }
}

export default withRouter(Page2);