import React from 'react';
 import {withRouter} from 'react-router-dom';
class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (<div>
            <button onClick={()=>{
                this.props.history.push('/page-1')
            }}>Go to Page 1 (PUSH)</button>
        
        <button onClick={()=>{
                this.props.history.push('/page-3')
            }}>Go to Page 3 (PUSH)</button>

            <button onClick={()=>{this.props.history.goBack()}}>Go back</button>    
            <button onClick={()=>{this.props.history.goForward()}}>Go forward</button>
            <button
              onClick={()=>{
                this.props.history.replace('/page-2')
              }}
            >Go to Page 2 (REPLACE)</button>  
            <button onClick={()=>{this.props.history.go(1)}}>Go(n)</button>
        </div>)
    }
}

export default withRouter(MainPage);
