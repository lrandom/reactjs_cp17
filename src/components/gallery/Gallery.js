import React from 'react';
import './Gallery.css'
const gallery = [
    "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg",
    "https://img.nhandan.com.vn/Files/Images/2020/07/26/giai_thuong_lon-1595747403778.jpg",
    "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_nhiep_anh_gia-1595747471173.jpg",
    "https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg"
]
class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          previewImage:null
        };
    }

    render() {
        return (
            <div>
            <div className="gallery">
                {gallery.map((image,index)=>{
                    return (<div key={index}><img onClick={()=>{this.setState({previewImage:image})}} src={image}/></div>)
                })}
            </div>

          { 
            this.state.previewImage &&
            <div className="modal">
                <button onClick={()=>{this.setState({previewImage:null})}}>Close</button>
                <img src={this.state.previewImage}/>
            </div>
           }
            </div>
        )
    }
}

export default Gallery