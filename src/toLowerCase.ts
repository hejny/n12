import { DIACRITIC_VARIANTS_LETTERS } from "./DIACRITIC_VARIANTS_LETTERS";

/**
 * Converts given string to lowercase with diacritics
 *
 * @param {string}
 * @returns {string}
 *
 * @sample "aáí" -> "AÁÍ"
 */
export function toLowerCase(sentence: string): string {
  let transformed = '';
  for (const char of sentence) {
    if(DIACRITIC_VARIANTS_LETTERS[char]){

    })

  }

  return transformed;
}


/**
 * !!! Test
 */
