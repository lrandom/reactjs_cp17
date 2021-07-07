import React from 'react';
import {withRouter} from 'react-router-dom';
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            list:[
                {title:'te',content:'s'}
            ]
        }
    }

    componentDidMount() {
        //đồng bộ hoá dữ liệu vào state
        if(localStorage.getItem('LIST')){
            let listNote = JSON.parse(localStorage.getItem('LIST'));//chuyển string json thành object js
        
            this.setState({list:listNote});
        }
    }

    render(){
        return(
            <div>
                <button onClick={()=>{this.props.history.push('/add')}}>Add</button>
                <ul>
                    {this.state.list.map((item,index)=>{
                        return (<li>
                            {item.title}
                        </li>)
                    })}
                </ul>
            </div>)    
    }
}

export default withRouter(List);