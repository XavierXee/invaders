import { Matrix } from './matrix';

const dataMock = 'ooo---\n---ooo\n';
const mock = new Matrix(dataMock);

/*
test('createMatrix', () => {
    expect(mock.createMatrix(dataMock)).toBe(0);
});
 */

describe('createMatrix', () => {
    const expected = [['o', 'o', 'o', '-', '-', '-'], ['-', '-', '-', 'o', 'o', 'o']];
    it('two dimensional array from string should match input string lines', () => {
        expect(mock['createMatrix'](dataMock)).toEqual(expect.arrayContaining(expected));
    });
});
/*
describe('getZone', () => {
    const expected = [['o', 'o', 'o', '-', '-', '-'], ['-', '-', '-', 'o', 'o', 'o']];
    it('two dimensional array from string should match input string lines', () => {
        expect(mock['getZone'](-2)).toEqual(expect.arrayContaining(expected));
    });
});
*/


/*
test('createStringData', () => {
    expect().toBe(0);
});

test('getZone', () => {
    expect().toBe(0);
});

 */
