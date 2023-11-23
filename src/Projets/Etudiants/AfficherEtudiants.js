import { Etudiant } from './Etudiant';


export function AfficherEtudiants({ etudiants }) {
    return (
        <>
            {etudiants.map((e, index) => <tr><Etudiant nom={e.nom} matricule={e.matricule} key={index} /></tr>)}
        </>
    );
}
