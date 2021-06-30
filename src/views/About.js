import React from 'react';
import {withRouter} from 'react-router-dom';
class About extends React.Component {
    constructor(props) {
        super(props);
        this.params = this.props.match.params;
        this.companyName = this.params.company_name;
        this.companyPhone = this.params.company_phone;
        this.companyFax = this.params.company_fax;

        this.state = {
            data: [
                {
                    name:"Danh mục cha 1",
                    isExpanded: false,
                    children:[
                          "Danh mục con 1",
                          "Danh mục con 2"
                    ]
                },
                {
                    name:"Danh mục cha 2",
                    isExpanded: false,
                    children:[
                          "Danh mục con 1",
                          "Danh mục con 2"
                    ]
                },
                {
                    name:"Danh mục cha 3",
                    isExpanded: false,
                    children:[
                          "Danh mục con 1",
                          "Danh mục con 2"
                    ]
                }
            ]
        }
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