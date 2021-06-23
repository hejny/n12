import { IKeywords } from './IKeywords';
import { removeDiacritics } from './removeDiacritics';

/**
 *
 * TODO: Put this into some inpidendent library which do normalizing (there are things in Collboard+Czech.events)
 *
 * @collboard-modules-sdk
 */
export function parseKeywords(input: any): IKeywords {
    if (typeof input === 'string') {
        return removeDiacritics(input)
            .toLowerCase()
            .split(/[^a-z0-9]+/gs)
            .filter((value) => value);
    } else if (typeof input === 'object') {
        if (Array.isArray(input)) {
            return input.map(parseKeywords).reduce((a, b) => [...a, ...b], []);
        } else {
            return parseKeywords(Object.values(input));
        }
    } else {
        return [];
    }
}
