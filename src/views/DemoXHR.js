import React from 'react';
class DemoXHR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text:{}
        }
    }

    sendXHR() {
        const xhr = new XMLHttpRequest();
        const that = this;
        xhr.responseType='json';
        xhr.onreadystatechange = function(){
            if(xhr.readyState == XMLHttpRequest.DONE){
                if(xhr.status==200){
                   that.setState({text: xhr.response})
                }
            }
        }
        xhr.open('GET','http://localhost/xhr/demo_1.php');
        xhr.send();
    }

    render(){
        return <div>
                   <div>Name {this.state.text.name}</div>
                   <div>Age {this.state.text.age}</div>
                   <div>Address {this.state.text.address}</div>
                   <button onClick={this.sendXHR.bind(this)}>send xhr</button>
        </div>
 
    }
}

export default DemoXHR;