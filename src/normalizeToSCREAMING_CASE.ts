/* tslint:disable */
/* TODO: Enable TSLint */

/*
TODO: Tests
expect(encodeRoutePath({ uriId: 'VtG7sR9rRJqwNEdM2', name: 'Moje tabule' })).toEqual('/VtG7sR9rRJqwNEdM2/Moje tabule');
expect(encodeRoutePath({ uriId: 'VtG7sR9rRJqwNEdM2', name: 'ěščřžžýáíúů' })).toEqual('/VtG7sR9rRJqwNEdM2/escrzyaieuu');
expect(encodeRoutePath({ uriId: 'VtG7sR9rRJqwNEdM2', name: '  ahoj  ' })).toEqual('/VtG7sR9rRJqwNEdM2/ahoj');
expect(encodeRoutePath({ uriId: 'VtG7sR9rRJqwNEdM2', name: '  ahoj_ahojAhoj    ahoj  ' })).toEqual('/VtG7sR9rRJqwNEdM2/ahoj-ahoj-ahoj-ahoj');
*/

export function normalizeToSCREAMING_CASE(
    name: string /* TODO: maybe semantic helper */,
): string /* TODO: maybe semantic helper */ {
    let charType: char_type;
    let lastCharType: char_type = 'OTHER';

    let normalizedName = '';

    for (const char of name) {
        let normalizedChar: string;

        if (/^[a-z]$/.test(char)) {
            charType = 'LOWERCASE';
            normalizedChar = char.toUpperCase();
        } else if (/^[A-Z]$/.test(char)) {
            charType = 'UPPERCASE';
            normalizedChar = char;
        } else if (/^[0-9]$/.test(char)) {
            charType = 'NUMBER';
            normalizedChar = char;
        } else if (/^\/$/.test(char)) {
            charType = 'SLASH';
            normalizedChar = char;
        } else {
            charType = 'OTHER';
            normalizedChar = '_';
        }

        if (
            charType !== lastCharType &&
            !(lastCharType === 'UPPERCASE' && charType === 'LOWERCASE') &&
            !(lastCharType === 'NUMBER') &&
            !(charType === 'NUMBER')
        ) {
            normalizedName += '_';
        }

        normalizedName += normalizedChar;

        lastCharType = charType;
    }

    normalizedName = normalizedName.replace(/_+/g, '_');
    normalizedName = normalizedName.replace(/_?\/_?/g, '/');
    normalizedName = normalizedName.replace(/^_/, '');
    normalizedName = normalizedName.replace(/_$/, '');

    return normalizedName;
}

type char_type = 'LOWERCASE' | 'UPPERCASE' | 'NUMBER' | 'SLASH' | 'OTHER';

/**
 * TODO: [🌺] Use some intermediate util splitWords
 */
