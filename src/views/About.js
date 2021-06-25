import React from 'react';
import {withRouter} from 'react-router-dom';
class About extends React.Component {
    constructor(props) {
        super(props);
        this.params = this.props.match.params;
        this.companyName = this.params.company_name;
        this.companyPhone = this.params.company_phone;
        this.companyFax = this.params.company_fax;
    }

    render(){
        return <div style={{padding:'100px'}}>Đây là trang about
          {this.companyName} <br></br>
          {this.companyPhone} <br></br>
          {this.companyFax} <br></br>
        </div>
    }
}

export default withRouter(About);