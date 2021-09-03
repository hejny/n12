import { capitalizeFirstLetter } from '../src/capitalizeFirstLetter';

describe('how capitalizing first letter works', () => {
    it('works on words', () => {
        expect(capitalizeFirstLetter(`foo`)).toEqual(`Foo`);
        expect(capitalizeFirstLetter(`bar`)).toEqual(`Bar`);
    });

    it('works on sentences', () => {
        expect(capitalizeFirstLetter(`foo and foo`)).toEqual(`Foo and foo`);
        expect(capitalizeFirstLetter(`Bar and foo`)).toEqual(`Bar and foo`);
    });

    it('works on edge cases', () => {
        expect(capitalizeFirstLetter(`Foo`)).toEqual(`Foo`);
        expect(capitalizeFirstLetter(`Bar`)).toEqual(`Bar`);
        expect(capitalizeFirstLetter(` foo`)).toEqual(` foo`);
        expect(capitalizeFirstLetter(` bar`)).toEqual(` bar`);
        expect(capitalizeFirstLetter(`1foo`)).toEqual(`1foo`);
        expect(capitalizeFirstLetter(`2bar`)).toEqual(`2bar`);
    });
});
