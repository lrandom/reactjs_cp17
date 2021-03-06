import React from 'react';
class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            content:''
        }
    }

    add(evt){
        evt.preventDefault();
        let list = [];
        if(localStorage.getItem('LIST')){
            list = JSON.parse(localStorage.getItem('LIST'));
        }
        list.push({
            title: this.state.title,
            content: this.state.content
        })
        localStorage.setItem('LIST',JSON.stringify(list));

        this.setState({
            title:'',
            content:''
        })
    }

    render(){
        return (
            <form onSubmit={this.add.bind(this)}>
                <input value={this.state.title} type="text" onChange={(evt)=>{this.setState({title:evt.target.value})}}/>

                <textarea value={this.state.content} onChange={(evt)=>{this.setState({content:evt.target.value})}}></textarea>
                
                <button>Add</button>
            </form>
        )
    }
}

export default Add