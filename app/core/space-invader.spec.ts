import { SpaceInvader } from './space-invader';

const dataMockOne = 'ooo---\n---ooo\n';
const mockOne = new SpaceInvader(dataMockOne, 'test1');

const dataMockTwo = 'ooo---oo-\n---ooo---\n--------o\n';
const mockTwo = new SpaceInvader(dataMockTwo, 'test2');

describe('getMedianWidth', () => {
    it('should return the up-rounded half of the matrix width', () => {
        expect(mockOne['getMedianWidth']()).toEqual(3);
        expect(mockTwo['getMedianWidth']()).toEqual(5);
    });
});

describe('getMedianHeight', () => {
    it('should return the up-rounded half of the matrix height', () => {
        expect(mockOne['getMedianHeight']()).toEqual(1);
        expect(mockTwo['getMedianHeight']()).toEqual(2);
    });
});

describe('getMaxDiffToDetect', () => {
    it('should return the maximum number of difference to take into account to determine if the matrix match a zone', () => {
        expect(mockOne['getMaxDiffToDetect']()).toBe(3);
        expect(mockTwo['getMaxDiffToDetect']()).toBe(5);
    });
});

