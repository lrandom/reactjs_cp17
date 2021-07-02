import React from 'react';
import {withRouter} from 'react-router-dom';
class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           fullName:null,
           address:null,
           phone:null
        };
    }

    next(){
        this.props.history.push(`/page-2?fullname=${this.state.fullName}
        &address=${this.state.address}
        &phone=${this.state.phone}`)
    }

    render() {
        return (
            <div>
             <h5>Thông tin cơ bản</h5>
             <form onSubmit={this.next.bind(this)}>
                <input type="text" onChange={(evt)=>{this.setState({fullName:evt.target.value})}}  placeholder="Họ tên"/><br></br>
                <input type="text" onChange={(evt)=>{this.setState({address:evt.target.value})}}  placeholder="Địa chỉ"/><br></br>
                <input type="text" onChange={(evt)=>{this.setState({phone:evt.target.value})}} placeholder="Số đt"/><br></br>    
                <button>Chuyển</button>
             </form>
            </div>
        )    
    }
}

export default withRouter(Page1);