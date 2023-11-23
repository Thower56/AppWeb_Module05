import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AfficherMotDePasse } from '.';
import { ErreurMotDePasse } from './ErreurMotDePasse';
import { ErreurConfirmation } from './ErreurConfirmation';
import { BoolButton } from './BoolButton';

export function ConfirmezMotDePasse() {
  const [motDePasse, setMotDePasse] = useState('');
  const [confirmationMotDePasse, setConfirmationMotDePasse] = useState('');

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group className="mb-2" controlId="formMotDepasse">
            <Form.Label>Entrez votre mot de passe :</Form.Label>
            <Form.Control
              placeholder="Entrez votre mot de passe"
              value={motDePasse}
              onChange={e => setMotDePasse(e.target.value)} />
          </Form.Group>

          <ErreurMotDePasse motDePasse={motDePasse} />

          <Form.Group className="mb-2" controlId="formMotDepasse">
            <Form.Label>Confirmez votre mot de passe :</Form.Label>
            <Form.Control
              placeholder="Confirmez votre mot de passe"
              value={confirmationMotDePasse}
              onChange={e => setConfirmationMotDePasse(e.target.value)} />
          </Form.Group>

          <ErreurConfirmation motDePasse={motDePasse} confirmationMotDePasse={confirmationMotDePasse}/>

          <Button
            variant="primary"
            type="submit"
            onClick={() => AfficherMotDePasse(motDePasse)}
            disabled={BoolButton({ motDePasse, confirmationMotDePasse })}
          >
            Envoyer
          </Button>
        </Col>
      </Row>
    </Container>

  );
}
