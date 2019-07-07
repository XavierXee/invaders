import { Matrix } from '../utils/matrix';

export class SpaceInvader extends Matrix {

    private name: string;

    constructor(spaceInvaderData: string, name: string) {
        super(spaceInvaderData);
        this.name = name;
    }

    public getMedianWidth(): number {
        return Math.ceil(this.width / 2);
    }

    public getMedianHeight(): number {
        return Math.ceil(this.height / 2);
    }

    public getMinDiffToDetect(): number {
        return Math.ceil((17 * this.width * this.height) / 100);
    }
}