import { Radar } from './radar';
import {SpaceInvader} from "./space-invader";

const dataMockRadar = 'ooo---\n---ooo\n';
const mockRadar = new Radar(dataMockRadar);

const dataMockInvaderOne = '---\n---\n';
const mockInvaderOne = new SpaceInvader(dataMockInvaderOne, 'test1');
const dataMockInvaderTwo = 'ooo\nooo\n';
const mockInvaderTwo = new SpaceInvader(dataMockInvaderTwo, 'test2');
const dataMockInvaderThree = '~~~\n000\n';
const mockInvaderThree = new SpaceInvader(dataMockInvaderThree, 'test3');

const dataMockZoneOne = 'ooo------ooo';
const dataMockZoneTwo = 'ooo------ooo';
const dataMockZoneThree = 'oooooooooooo';


describe('compareZones', () => {
    it('should return the number of differences between two zones as string', () => {
        expect(mockRadar['compareZones'](dataMockZoneOne, dataMockZoneTwo)).toEqual(0);
        expect(mockRadar['compareZones'](dataMockZoneOne, dataMockZoneThree)).toEqual(6);
    });
});

describe('process', () => {
    it('should return the number of differences between own matrix and a target matrix from a specific xIndex and yIndex', () => {
        expect(mockRadar['process'](mockInvaderOne, 0, 0)).toBe(3);
        expect(mockRadar['process'](mockInvaderOne, 1, 0)).toBe(3);
        expect(mockRadar['process'](mockInvaderOne, 0, 1)).toBe(0);
    });
});

describe('startSpaceInvadersDetection', () => {
    it('should return a report array for each zones differences are lower than 17% (empty array otherwise)', () => {
        expect(mockRadar['startSpaceInvadersDetection']([mockInvaderOne, mockInvaderTwo])).toHaveLength(5);
        expect(mockRadar['startSpaceInvadersDetection']([mockInvaderThree])).toHaveLength(0);
    });
});

