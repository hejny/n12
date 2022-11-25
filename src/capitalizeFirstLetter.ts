/**
 * Capitalize first letter and lowercase rest
 *
 * @sample "hElló" -> "Helló"
 */
export function capitalizeFirstLetter(word: string): string {
    return toUpperCase(word.substr(0, 1)) + toLowerCase(word.substr(1));
}
