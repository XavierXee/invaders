import React from 'react';
import './RadarGrid.css';

export class RadarGrid extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
    };

    createCell = (x, y, value) => {

        let cell = <div className='grid--cell'>{value}</div>;

        if (this.props.report && this.props.report.length) {
            let isDetected = false;
            let targetName = '';
            this.props.report.forEach((entry) => {
                if (x >= entry.coord.x &&
                    x < entry.coord.x + entry.target.width &&
                    y >= entry.coord.y &&
                    y < entry.coord.y + entry.target.height) {
                    isDetected = true;
                    targetName = entry.target.name;
                }
            });
            if (isDetected) cell = <div className={`grid--cell grid--cell__${targetName}`}>{value}</div>;
        }

        return cell;
    };

    createGrid = () => {
        if (!this.props.data) return <div className='error'>No Data</div>;

        const grid = [];
        this.props.data.forEach((line, yIndex) => {
            const row = [];
            line.split('').forEach((column, xIndex) => {
                row.push(this.createCell(xIndex, yIndex, column))
            });
            grid.push(<div className='grid--row'>{row}</div>)
        });
        return grid;
    };

    render() {
        console.log('render');
        console.log(this.createGrid());

        return(
            <div className="radar-grid">
                <div className="grid">{this.createGrid()}</div>
            </div>
        )
    }
}