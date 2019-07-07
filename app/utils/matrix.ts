export class Matrix {

    public width: number;
    public height: number;
    public dataString: string;
    public data: string[][];

    constructor(input: string) {
        this.width = input.split('\n')[0].length;
        this.height = input.split('\n').length;
        this.dataString = this.createStringData(input);
        this.data = this.createMatrix(input);
    }

    private createMatrix(input: string): string[][] {
        return input
            .split('\n')
            .map((line) => line.split(''))
            .filter((line) => line.length);
    }

    private createStringData(input: string): string {
        return input
            .split('\n')
            .join('');
    }

    public getZone(x: number, width: number, y: number, height: number): string {
        return this.data
            .slice(y, y + height)
            .map((line) => line.slice(x, x + width).join(''))
            .join('');
    }
}