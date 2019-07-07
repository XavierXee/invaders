import React from 'react';
import './Error.css';

export class Error extends React.Component {
    constructor(props){
        super(props);
    };

    render() {
        console.log('render');
        console.log(this.createGrid());

        return(
            <div className='error'>No Data</div>
        )
    }
}