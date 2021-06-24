import { IKeywords } from './IKeywords';
import { removeDiacritics } from './removeDiacritics';


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
