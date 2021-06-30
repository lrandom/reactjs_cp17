import React from 'react';
import './Page2.css';
class Page2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
               <div className="parent" onMouseLeave={()=>{
                   console.log("mouse leave");
               }}
               onMouseMove={()=>{
                   console.log("mouse move");
               }}
               onMouseEnter={()=>{console.log("mouse enter")}}>
                 <div className="child">Child</div>    
               </div>

               <div className="parent" onMouseOver={()=>{console.log("mouse over")}}>
                 <div className="child">Child</div>    
               </div> 
        </div>
    }
}

export default Page2;