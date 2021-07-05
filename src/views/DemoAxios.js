import Axios from 'axios';
import React from 'react';
class DemoAxios extends React.Component {
    constructor(props) {
     super(props);
    }

    get(){
        Axios.get('http://localhost/xhr/axios_server.php').then((resp)=>{
            console.log(resp);
        }).catch((err)=>{
            console.log(err);
        });
    }

    render(){
         return (
             <div>
              <button onClick={this.get.bind(this)}>Get</button>
              <button>Post</button>
              <button>Put</button>
              <button>Delete</button>
             </div>
         )   
    }
}

export default DemoAxios;