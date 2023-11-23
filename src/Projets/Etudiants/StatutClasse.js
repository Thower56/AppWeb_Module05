import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { AfficherEtudiants } from './AfficherEtudiants';


export function StatutClasse({ etudiants }) {
    const reussie = etudiants.filter(e => e.note >= 6);
    const echec = etudiants.filter(e => e.note < 6);
    console.log(reussie);
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope='col'>Nom</th>
                                    <th scope='col'>Matricule</th>
                                </tr>
                            </thead>
                            <tbody>
                                <AfficherEtudiants etudiants={reussie} />
                            </tbody>
                        </table>
                    </Col>
                    <Col>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope='col'>Nom</th>
                                    <th scope='col'>Matricule</th>
                                </tr>
                            </thead>
                            <tbody>
                                <AfficherEtudiants etudiants={echec} />
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
