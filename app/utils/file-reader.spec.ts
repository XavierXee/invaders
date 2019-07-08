import { FileReader } from './file-reader';

const mock = new FileReader();

describe('getFile', () => {
    test('the data is "test"', () => {
        FileReader['get']('test.txt').then(data => {
            expect(data).toBe('test');
        });
    });
});


