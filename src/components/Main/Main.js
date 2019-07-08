import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { RadarGrid } from '../RadarGrid/RadarGrid';
import { Error } from '../Error/Error';

import './Main.css';

import API from '../../utils/API';

export class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.getDefaultData(),
            report: null,
            errors: null
        };

        if (!this.state.data) this.setState(prevState => {
            return Object.assign(prevState, {error: 'No Data'});
        })
    };

    getDefaultData = () => {
        return new Array(50).fill(new Array(100).join('-'), 0);
    };

    getRadar = () => {
        API.getRadarData()
            .then((res) => {
                this.setState({
                    data: res.data,
                    report: null
                });
            })
            .catch((err) => {
                this.setState(prevState => {
                    return Object.assign(prevState, {error: err.response.data});
                });
            });
    };

    detect = () => {
        Promise.all([API.getRadarData(), API.detectInvaders()])
            .then((values) => {
                this.setState(prevState => {
                    return Object.assign(prevState, {
                        data: values[0].data,
                        report: values[1].data
                    });
                });
            })
            .catch((err)  => {
                this.setState(prevState => {
                    return Object.assign(prevState, {error: err});
                })
            });
    };

    render() {
        const data = this.state.data;
        const report = this.state.report;
        const error = this.state.error;

        if (error) return (
            <div className='main'>
                <h1>Space Invaders Detector</h1>
                <Error error={error}/>
            </div>
        );

        return(
            <div className='main'>
                <h1>Space Invaders Detector</h1>
                <ButtonToolbar>
                    <Button
                        onClick={this.getRadar}
                        className='main--button'
                        variant="light"
                        type='submit'>
                        Get Radar
                    </Button>
                    <Button
                        onClick={this.detect}
                        className='main--button'
                        variant="light"
                        type='submit'>
                        Detect
                    </Button>
                </ButtonToolbar>
                <RadarGrid data={data} report={report}/>
            </div>
        );
    }
}