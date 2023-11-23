import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { AfficherEtudiants } from './AfficherEtudiants';
//import Row from 'react-bootsrap/Row'
//import Col from 'react-bootsrap/Col'

const etudiants = [
    {'note' : 8.5, 'nom' : 'Adam Bernard', 'matricule' : '486123'},
    {'note' : 10.0, 'nom' : 'Charles Demers', 'matricule' : '375911'},
    {'note' : 6.0, 'nom' : 'Eric Fillion', 'matricule' : '025893'},
    {'note' : 5.5, 'nom' : 'Guy Huard', 'matricule' : '507962'},
    {'note' : 6.0, 'nom' : 'Ian Jacob', 'matricule' : '935700'},
    {'note' : 7.0, 'nom' : 'Kim Labrecque', 'matricule' : '135796'},
    {'note' : 10.0, 'nom' : 'Michel Nolet', 'matricule' : '579461'},
    {'note' : 2.5, 'nom' : 'Olivier Paquet', 'matricule' : '356919'},
    {'note' : 0.0, 'nom' : 'Quentin Roberge', 'matricule' : '791222'},
    {'note' : 9.5, 'nom' : 'Sylvie Tanguay', 'matricule' : '777855'},
  ];

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


