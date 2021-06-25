import React from 'react';
class Contact extends React.Component {
    constructor(props) {
        super(props);
        const queryString = window.location.search; //?name=NIIT&age=20;
        const urlParams = new URLSearchParams(queryString);
        this.name = urlParams.get('name');
        this.age = urlParams.get('age');
    }

    render(){
        return <div style={{padding:'100px'}}>Đây là trang liên hệ 
        
          {this.name} <br></br>
          {this.age} <br></br>
        </div>
    }
}

export default Contact;