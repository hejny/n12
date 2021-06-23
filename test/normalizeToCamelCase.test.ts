import { normalizeToCamelCase } from './normalizeToCamelCase';

describe('how normalizing to camelCase works', () => {
    it('can normalize one word', () => {
        expect(normalizeToCamelCase('hello')).toEqual('hello');
        expect(normalizeToCamelCase('HELLO')).toEqual('hello');
        expect(normalizeToCamelCase('hello', true)).toEqual('Hello');
        expect(normalizeToCamelCase('HELLO', true)).toEqual('Hello');
    });

    it('can normalize sentence', () => {
        expect(normalizeToCamelCase('hello world')).toEqual('helloWorld');
        expect(normalizeToCamelCase('helloWorld')).toEqual('helloWorld');
        expect(normalizeToCamelCase('hello___world')).toEqual('helloWorld');
        expect(normalizeToCamelCase('hello.world')).toEqual('helloWorld');
        expect(normalizeToCamelCase('hello\nworld')).toEqual('helloWorld');
    });
});
