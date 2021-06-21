import React from 'react';
class ChilComponent extends React.Component {
  constructor(props) {
      super(props);
  }

  handleClick(){
    this.props.sendDataToParent("Dữ liệu truyền đi")
  }
  
  render() {
    return (
      <div>
        {this.props.name}
        {this.props.school}
        <button onClick={this.handleClick.bind(this)}>Truyền dữ liệu tới cha</button>
      </div>
    )
  };
}

export default ChilComponent;