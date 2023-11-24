import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { AfficherEtudiants } from './AfficherEtudiants';
export function ListeEtudiants({etudiants})
{
   return(
       <>
           <Container>
               <table className="table table-striped">
                   <thead>
                        <tr>
                            <th scope='col'>Nom</th>
                            <th scope='col'>Matricule</th>
                        </tr>
                    </thead>
                    <tbody>
                        <AfficherEtudiants etudiants={etudiants}/>
                    </tbody>
                </table>
            </Container>
        </>
    )
}


