import Axios from 'axios';
import React from 'react';
class DemoAxios extends React.Component {
    constructor(props) {
     super(props);
     Axios.defaults.baseURL = 'http://localhost/xhr/';
 //Axios.defaults.headers.post['Content-Type']='multipart/form-data';
 this.myAxios = Axios.create({
     baseURL: 'http://localhost/xhr/'
 })

 this.myAxios2 = Axios.create({
     baseURL: 'http://localhost/xhr2/'
 })
    }

    async get(){
        /*Axios.get('http://localhost/xhr/axios_srver.php?id=10')
        .then((resp)=>{
            alert(resp.data);
            alert(resp.status);
            
        }).catch((err)=>{
            alert("Kết nối server thất bại");
        });*/

        try {
            const resp = await this.myAxios.get('axios_server.php?id=10');
            alert(resp.data);
        } catch (error) {
            alert("Kết nối đến server thất bại");
        }
        
    }

    post(){
        
       // Axios.header('Content-Type','application/json');
        this.myAxios2.post('axios_server.php?id=10',{
            id: 20,
            name: "Luan"
        }
        ).then((resp)=>{
            alert(resp.data);
            //console.log(resp);
        }).catch((err)=>{
            console.log(err);
        });
    }

    put(){
        this.myAxios.put('axios_server.php').then((resp)=>{
            console.log(resp);
        }).catch((err)=>{
            console.log(err);
        });
    }

    delete(){
        Axios.delete('axios_server.php').then((resp)=>{
            console.log(resp);
        }).catch((err)=>{
            console.log(err);
        });
    }

    render(){
         return (
             <div>
              <button onClick={this.get.bind(this)}>Get</button>
              <button onClick={this.post.bind(this)}>Post</button>
              <button onClick={this.put.bind(this)}>Put</button>
              <button onClick={this.delete.bind(this)}>Delete</button>
             </div>
         )   
    }
}

export default DemoAxios;