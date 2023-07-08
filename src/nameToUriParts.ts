import { nameToUriPart } from "./nameToUriPart";


export function nameToUriParts(name: string): Array<string> {
    return nameToUriPart(name).split('-');
}
