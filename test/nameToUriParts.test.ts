import { nameToUriParts } from '../src/nameToUriParts';

describe('how converting name to parts of URI works', () => {
    it('can convert simple name to parts of URI', () => {
        expect(nameToUriParts(`foo`)).toEqual([`foo`]);
        expect(nameToUriParts(`Foo`)).toEqual([`foo`]);
        expect(nameToUriParts(`bar`)).toEqual([`bar`]);
        expect(nameToUriParts(`    foo Bar `)).toEqual([`foo`, `bar`]);
    });

    it('can convert name with diacritics to parts of URI', () => {
        expect(nameToUriParts(`ěščřŽýáíéúů`)).toEqual([`escrzyaieuu`]);
        expect(nameToUriParts(`ěščř--++++////---ŽÝÁÍÉÚŮ`)).toEqual([
            `escr`,
            `zyaieuu`,
        ]);
    });
});
