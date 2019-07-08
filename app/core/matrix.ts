import { Grid } from '../interfaces/grid';

export class Matrix implements Grid{

    public width: number;
    public height: number;
    public dataArray: string[];
    public data: string[][];

    constructor(input: string) {
        this.data = this.createMatrix(input);
        this.dataArray = this.createDataArray(input);
        this.width = this.dataArray[0].length;
        this.height = this.dataArray.length;
    }

    private createDataArray(input: string): string[] {
        return input.toString().split('\n').filter((line) => line.length);
    }

    private createMatrix(input: string): string[][] {
        return input
            .split('\n')
            .map((line) => line.split(''))
            .filter((line) => line.length);
    }

    public getZone(x: number, width: number, y: number, height: number): string {
        return this.data
            .slice(y, y + height)
            .map((line) => line.slice(x, x + width).join(''))
            .join('');
    }
}