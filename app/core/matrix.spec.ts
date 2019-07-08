import { Matrix } from './matrix';

const dataMock = 'ooo---\n---ooo\n';
const mock = new Matrix(dataMock);

describe('createMatrix', () => {
    const expected = [['o', 'o', 'o', '-', '-', '-'], ['-', '-', '-', 'o', 'o', 'o']];
    it('two dimensional array from string should match input string lines', () => {
        expect(mock['createMatrix'](dataMock)).toEqual(expect.arrayContaining(expected));
    });
});

describe('createDataArray', () => {
    it('should return a string of all characters of each line', () => {
        expect(mock['createDataArray']('ooo---\n---ooo\n')).toEqual(['ooo---', '---ooo']);
    });
});

describe('getZone', () => {
    it('should return a string of the two first character of each line', () => {
        expect(mock['getZone'](0, 2, 0, 2)).toBe('oo--');
    });
});

