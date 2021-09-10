import { parseKeywords } from '../src/parseKeywords';

/**
 * TODO: Put this into some inpidendent library which do normalizing (there are things in Collboard+Czech.events)
 */
describe('how parsing of keywords works', () => {
    it('can parse keywords from strings', () => {
        expect(parseKeywords('foo')).toEqual(['foo']);
        expect(parseKeywords('foo bar')).toEqual(['foo', 'bar']);
    });

    it('can parse keywords with complex whitespacing', () => {
        expect(parseKeywords('    foo    bar')).toEqual(['foo', 'bar']);
        expect(
            parseKeywords(`    foo
       bar



      `),
        ).toEqual(['foo', 'bar']);
    });

    it('can parse keywords from arrays', () => {
        expect(parseKeywords(['foo'])).toEqual(['foo']);
        expect(parseKeywords(['foo bar', 'bzz'])).toEqual([
            'foo',
            'bar',
            'bzz',
        ]);
    });

    it('can parse keywords from objects', () => {
        expect(parseKeywords({ a: 'foo' })).toEqual(['foo']);
        expect(parseKeywords({ b: ['foo bar', 'bzz'] })).toEqual([
            'foo',
            'bar',
            'bzz',
        ]);
    });

    it('will strip diacritics from the keywords', () => {
        expect(parseKeywords(`ěščřžýáíéúů`)).toEqual([`escrzyaieuu`]);
    });

    it('will strip interpunction from the keywords', () => {
        expect(parseKeywords(`---aaá+++`)).toEqual([`aaa`]);
    });
    it('will deal interpunction as a separator', () => {
        expect(parseKeywords(`---aaá+++úůu:h`)).toEqual([`aaa`, `uuu`, `h`]);
    });

    it('can parse keywords from strings with special chars', () => {
        expect(parseKeywords('foo:')).toEqual(['foo']);
        expect(parseKeywords('foo->bar')).toEqual(['foo', 'bar']);
        expect(parseKeywords('foo: bar**hello--?worlD')).toEqual([
            'foo',
            'bar',
            'hello',
            'world',
        ]);
    });

    it('will make keywords lowercase', () => {
        expect(parseKeywords(`ěsčŘŽYÁÍÉuu`)).toEqual([`escrzyaieuu`]);
    });

    it('can parse numecic keywords', () => {
        expect(parseKeywords(['foo 123'])).toEqual(['foo', '123']);
        expect(parseKeywords(['foo 0 bar 1', 'bzz'])).toEqual([
            'foo',
            '0',
            'bar',
            '1',
            'bzz',
        ]);
        // TODO: What about decimal and negative numbers
    });
});
