import React from 'react';
import './RadarGrid.css';

export class RadarGrid extends React.Component {
    createCell = (x, y, value) => {
        const key = `${x}-${x}`;
        let cell = <div key={key} className='grid--cell'>{value}</div>;

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
            if (isDetected) cell = <div key={key} className={`grid--cell grid--cell__${targetName}`}>{value}</div>;
        }

        return cell;
    };

    createGrid = () => {
        if (!this.props.data || !this.props.data.length) return <div className='error'>No Data</div>;

        const grid = [];
        this.props.data.forEach((line, yIndex) => {
            const row = [];
            line.split('').forEach((column, xIndex) => {
                row.push(this.createCell(xIndex, yIndex, column))
            });
            grid.push(<div key={yIndex} className='grid--row'>{row}</div>)
        });
        return grid;
    };

    render() {
        return(
            <div className="radar-grid">
                <div className="grid">{this.createGrid()}</div>
            </div>
        )
    }
}