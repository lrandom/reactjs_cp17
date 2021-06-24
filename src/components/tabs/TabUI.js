import React from "react";
import Tab from "./Tab";
import Content from "./Content";

class TabUI extends React.Component {
  constructor(props) {
      super(props);
    /*this.data = [
      {
        "tab 1": "content 1",
      },

      { "tab 2": "content 2" },
    ];*/

    this.data= [
        {
            name:'Tab 1',
            content:'Content 1'
        },
        {
            name:'Tab 2',
            content:'Content 2'
        }
    ]

    this.state={
        content: this.data[0].name
    }
  }

  getIndexFromTab(tabIndex){
       const data = this.data[tabIndex];
       this.setState({
           content: data.name
       })  
  }

  render() {
    return (
        <div>
            <div>
               {
                   this.data.map((item,index)=>{
                       return (
                            <Tab sendIndexToParent={this.getIndexFromTab.bind(this)} tabIndex={index} name={item.name}/>
                          )
                   })
               } 
            </div>    

            <Content content={this.state.content}></Content>
        </div>
    )   
  }
}

export default TabUI;