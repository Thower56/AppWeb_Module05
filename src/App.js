
import logo from './logo.svg';
import { Container, Navbar } from 'react-bootstrap';
import { BrowserRouterm, Routes, Route, BrowserRouter } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Ampoule } from './Projets/Ampoule/Ampoule';
import './App.css';

function App() {
  <BrowserRouter>
    <Container>
    <BarreNavigation />
    <PageAccueil />
      <Routes>
        <Route path='/' element={<PageAccueil />}/>
        <Route path='/Projets/Ampoule' element={<Ampoule />}/>
      </Routes>
    </Container>
  </BrowserRouter>
}

export function PageAccueil(){
  return(
    <>
    <h1>Test</h1>
    <p>This is the from page</p>
    </>
  )
}

export const BarreNavigation = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
            <Nav.Link href="/projets">Projets</Nav.Link>
            <Nav.Link href="/a-propos">A propos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default App;
