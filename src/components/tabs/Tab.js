import React from 'react';
import './Tab.css';
class Tab extends React.Component {
    constructor(props) {
        super(props);
    }

    changeTab(){
        const tabIndex = this.props.tabIndex;
        // gửi ngược lên TabUI
        this.props.sendIndexToParent(tabIndex);
    }

    render() {
        return <span className="tab" onClick={this.changeTab.bind(this)}>{this.props.name}</span>
    }
}

export default Tab;