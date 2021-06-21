import React from 'react';
import ChilComponent from './ChildComponent'
class ParentComponent extends React.Component {
    getDataFromChild(val){
      alert(val);
    }
   render() {
       return <ChilComponent name="test" school="NIIT" sendDataToParent={this.getDataFromChild.bind(this)}></ChilComponent>
   }
}

export default ParentComponent;