import React, {Component} from 'react';
import './Backdrop.css';

class backdrop extends Component{

    render(){
        return(
            this.props.show?
                <div className='backdrop' onClick={this.props.modalClosed}>{this.props.children}</div>
            :null
        )
    }
}

export default backdrop
