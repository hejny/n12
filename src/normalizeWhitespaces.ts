/**
 * Take every whitespace (space, new line, tab) and replace it with a single space.
 */
export function normalizeWhitespaces(str: string): string {
    return str.replace(/\s+/gs, ' ').trim();
}
