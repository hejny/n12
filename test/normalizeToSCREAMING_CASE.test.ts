import { normalizeToSCREAMING_CASE } from '../src/normalizeToSCREAMING_CASE';

describe('how normalizing to SCREAMING_CASE works', () => {
    it('can normalize one word', () => {
        expect(normalizeToSCREAMING_CASE('hello')).toEqual('HELLO');
        expect(normalizeToSCREAMING_CASE(' hello ')).toEqual('HELLO');
        expect(normalizeToSCREAMING_CASE('HELLO')).toEqual('HELLO');
    });

    it('can normalize sentence', () => {
        expect(normalizeToSCREAMING_CASE('hello world')).toEqual('HELLO_WORLD');
        expect(normalizeToSCREAMING_CASE('helloWorld')).toEqual('HELLO_WORLD');
        expect(normalizeToSCREAMING_CASE('hello___world')).toEqual(
            'HELLO_WORLD',
        );
        expect(normalizeToSCREAMING_CASE('hello.world')).toEqual('HELLO_WORLD');
        expect(normalizeToSCREAMING_CASE('hello\nworld')).toEqual(
            'HELLO_WORLD',
        );
    });

    it('can normalize word with numbers', () => {
        expect(normalizeToSCREAMING_CASE('4story')).toEqual('4STORY');
        expect(normalizeToSCREAMING_CASE('karel21')).toEqual('KAREL21');
    });
});
