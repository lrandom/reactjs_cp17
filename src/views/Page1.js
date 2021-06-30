import React from 'react';
class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           inputVal:null,
           selectedVal:null         
        };
    }

    render() {
        return <form onSubmit={(e)=>{
            e.preventDefault();
            //ĐẶT LỆNH GỬI DỮ LIỆU LÊN SERVER
        }}>
            <input value={this.state.inputVal} type="text" onChange={(e)=>{
                console.log(e.target.value);
                this.setState({
                    inputVal:e.target.value
                })
            }}/>

            <select value="Hải Phòng" onChange={(e)=>{
                this.setState({
                    selectedVal:e.target.value    
                })
            }}>
                <option>Hà Nội</option>
                <option>Hải Phòng</option>
                <option>Quảng Ninh</option>
            </select>

            <button>Submit</button>
        </form>
    }
}

export default Page1;