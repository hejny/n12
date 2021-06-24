import { searchKeywords } from '../src/searchKeywords';

describe('how searching through keywords works', () => {
    it('can search one keyword', () => {
        expect(searchKeywords(['a', 'b'], ['a'])).toEqual(true);
        expect(searchKeywords(['a', 'b'], ['c'])).toEqual(false);
    });

    it('can search multiple keyword', () => {
        expect(searchKeywords(['a', 'b'], ['a', 'b'])).toEqual(true);
        expect(searchKeywords(['a', 'b'], ['b', 'a'])).toEqual(true);
        expect(searchKeywords(['a', 'b'], ['a', 'c'])).toEqual(false);
    });

    it('can search incomplete keyword', () => {
        expect(searchKeywords(['aaa', 'bbbb'], ['a'])).toEqual(true);
        expect(searchKeywords(['aaa', 'bbbb'], ['ab'])).toEqual(false);
    });

    /* TODO:
    it('will take on mind amount of needles', () => {
      expect(searchKeywords(['aaa', 'abbb'], ['a','a'])).toEqual(true);
      expect(searchKeywords(['aaa', 'bbbb'], ['a','a'])).toEqual(false);
    });
  */
});
