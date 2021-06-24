import { removeDiacritics } from './removeDiacritics';

/**
 *
 */
export function nameToUriPart(name: string): string {
    let uri = name;
    uri = removeDiacritics(uri);
    uri = uri.replace(/[^a-zA-Z0-9]+/g, '-');
    uri = uri.replace(/^-+/, '');
    uri = uri.replace(/-+$/, '');
    return uri;
}
