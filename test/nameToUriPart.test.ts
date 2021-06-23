import { nameToUriPart } from './nameToUriPart';

describe('how converting name to part of URI works', () => {
    it('can convert simple name to part of URI', () => {
        expect(nameToUriPart(`foo`)).toEqual(`foo`);
        expect(nameToUriPart(`bar`)).toEqual(`bar`);
        expect(nameToUriPart(`    foo Bar `)).toEqual(`foo-Bar` /* TODO: Maybe here should be only a lowercase */);
    });

    it('can convert name with diacritics to part of URI', () => {
        expect(nameToUriPart(`ěščřžýáíéúů`)).toEqual(`escrzyaieuu`);
        expect(nameToUriPart(`ěščř--++++////---ŽÝÁÍÉÚŮ`)).toEqual(
            `escr-ZYAIEUU` /* TODO: Maybe here should be only a lowercase */,
        );
    });
});
