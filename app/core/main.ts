import { FileReader } from '../utils/file-reader';
import { SpaceInvader } from './space-invader';
import { Radar } from './radar';

export class Main {

    public static radar: Radar;
    public static spaceInvaders: SpaceInvader[];

    public static init(callback): void {

        const getRadar = FileReader.get('radar.txt');
        const getSpaceInvaderOne = FileReader.get('space-invader-1.txt');
        const getSpaceInvaderTwo = FileReader.get('space-invader-2.txt');

        Promise.all([getRadar, getSpaceInvaderOne, getSpaceInvaderTwo]).then((values) => {
            this.spaceInvaders = [];
            this.radar = new Radar(values[0]);
            this.spaceInvaders.push(new SpaceInvader(values[1], 'space-invader-1'));
            this.spaceInvaders.push(new SpaceInvader(values[2], 'space-invader-2'));

            callback(this.radar.startSpaceInvadersDetection(this.spaceInvaders));
        });

    }

    constructor() {}

}