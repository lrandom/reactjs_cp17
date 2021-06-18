import React from 'react';
import './Content.css';
class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            content: 'Lorem ipsum dolor sit amet, consectetur',
            counter:0
        }
        setInterval(() => {
            this.setState({
                counter:this.state.counter+1
            })
        }, 2000);
    }
   
    changeMenuContent=()=>{
        this.setState({content: 'Hello các bạn'});    
    }

    //override
    render(){
       return (
       <div>
            <nav>{this.state.content} {this.state.counter}</nav>   
            <button onClick={this.changeMenuContent}>Change Menu Content</button>  
       </div>)
    }
}

export default Content;