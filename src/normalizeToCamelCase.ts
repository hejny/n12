/**
 *
 * TODO: Put this into some inpidendent library which do normalizing (there are things in Collboard+Czech.events)
 *
 * @collboard-modules-sdk
 */
export function normalizeToCamelCase(
    name: string /* TODO: maybe semantic helper */,
    // TODO: Options
    firstLetterCapital = false,
): string /* TODO: maybe semantic helper */ {
    let charType: char_type;
    let lastCharType: char_type | null = null;

    let normalizedName = '';

    for (const char of name) {
        let normalizedChar: string;

        if (/^[a-z]$/.test(char)) {
            charType = 'LOWERCASE';
            normalizedChar = char;
        } else if (/^[A-Z]$/.test(char)) {
            charType = 'UPPERCASE';
            normalizedChar = char.toLowerCase();
        } else if (/^[0-9]$/.test(char)) {
            charType = 'NUMBER';
            normalizedChar = char;
        } else {
            charType = 'OTHER';
            normalizedChar = '';
        }

        if (!lastCharType) {
            if (firstLetterCapital) {
                normalizedChar = normalizedChar.toUpperCase(); //TODO: DRY
            }
        } else if (charType !== lastCharType && !(charType === 'LOWERCASE' && lastCharType === 'UPPERCASE')) {
            normalizedChar = normalizedChar.toUpperCase(); //TODO: DRY
        }

        normalizedName += normalizedChar;

        lastCharType = charType;
    }

    return normalizedName;
}

type char_type = 'LOWERCASE' | 'UPPERCASE' | 'NUMBER' | 'OTHER';
