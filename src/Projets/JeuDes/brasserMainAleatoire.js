import { genererNombreAleatoire } from './genererNombreAleatoire.js';


export function brasserMainAleatoire(min, max) {
    return [
        genererNombreAleatoire(min, max),
        genererNombreAleatoire(min, max),
        genererNombreAleatoire(min, max),
        genererNombreAleatoire(min, max),
        genererNombreAleatoire(min, max)
    ];
}
