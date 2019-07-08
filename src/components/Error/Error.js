import React from 'react';
import './Error.css';

export class Error extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    };

    render() {
        return(
            <div className='error'>{this.props.error}</div>
        )
    }
}