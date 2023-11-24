import { Container, Navbar, Nav } from 'react-bootstrap';
import React from 'react';


export const BarreNavigation = () => {
  return (
    <Navbar bg='light' expand="sm">
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil </Nav.Link>
            <Nav.Link href='/Projets/PageBonjour'>Bonjour </Nav.Link>
            <Nav.Link href='/Projets/Ampoule'>Ampoule </Nav.Link>
            <Nav.Link href='/Projets/JeuDnd'>Jeu Dnd </Nav.Link>
            <Nav.Link href='/Projets/JeuDes'>Jeu Des </Nav.Link>
            <Nav.Link href='/Projets/Podometre'>Podometre </Nav.Link>
            <Nav.Link href='/Projets/Recette/567890'>Recette </Nav.Link>
            <Nav.Link href='/Projets/Etudiant'>Etudiant </Nav.Link>
            <Nav.Link href='/Projets/Horloge'>Horloge </Nav.Link>
            <Nav.Link href="/a-propos">A propos </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
