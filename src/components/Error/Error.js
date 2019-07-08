import React from 'react';
import './Error.css';

export class Error extends React.Component {
    render() {
        return(
            <div className='error'>{this.props.error}</div>
        )
    }
}