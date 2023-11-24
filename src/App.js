
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import { Ampoule } from './Projets/Ampoule/Ampoule';
import { PageBonjour } from './Projets/PageBonjour';
import { MainDes } from './Projets/JeuDes/MainDes';
import { JeuDnD } from './Projets/JeuDnd/JeuDnD';
import { PodometreNeg } from './Projets/Podometre/PodometreNeg';
import { AfficherRecettes } from './Projets/Recette/AfficherRecettes';
import { recettes } from './recettes';
import { ListeEtudiants } from './Projets/Etudiants/ListeEtudiant.js'
import { StatutClasse } from './Projets/Etudiants/StatutClasse.js'
import { useState } from 'react';
import { etudiants } from './Projets/Etudiants/etudiants.js';
import { Horloge } from './Projets/Horloge/horloge.js';
import { BrasserMain } from './Projets/JeuDes/BrasserMain.js'
import { brasserMainAleatoire } from './Projets/JeuDes/brasserMainAleatoire.js';
import { genererNombreAleatoire } from './Projets/JeuDes/genererNombreAleatoire.js';
import { PageAccueil } from './PageAccueil.js';

import './App.css';
import { BarreNavigation } from './BarreNavigation.js';
import { ChangerDePage } from './ChangerDePage.js';

function App() {
  const [mainDes, setMainDes] = useState(brasserMainAleatoire(1,6));

    const handleClick = (index) =>{
        const nouvelleValeur = genererNombreAleatoire(1, 6);
        const nouvelleMain = mainDes.slice();
        nouvelleMain[index] = nouvelleValeur;

        setMainDes(nouvelleMain);
    }
  return(
  <BrowserRouter>
    <Container>
    <BarreNavigation />
      <Routes>

        <Route path='/' element={
        <>
          <PageAccueil />
          <ChangerDePage location={'/Projets/PageBonjour'} message={'Next page'}/>
        </>
        }/>

        <Route path='/Projets/PageBonjour/:prenom' element={
        <>
          <PageBonjour />
          <ChangerDePage location={'/Projets/Ampoule'} message={'Next page'}/>
        </>
        }/>

        <Route path='/Projets/Ampoule/' element={
        <>
          <Ampoule />
          <ChangerDePage location={'/Projets/JeuDnd'} message={'Next page'}/>
        </>
        }/>
        <Route path='/Projets/JeuDnd/' element={
        <>
          <JeuDnD />
          <ChangerDePage location={'/Projets/JeuDes'} message={'Next page'}/>
        </>
        }/>
        <Route path='/Projets/JeuDes/' element={
          <>
            <BrasserMain handleClick={() => setMainDes(brasserMainAleatoire(1,6))}/>
            <MainDes valeurDes={mainDes} handleClick={handleClick}/>
            <ChangerDePage location={'/Projets/Podometre'} message={'Next page'}/>
          </>
        }/>
        <Route path='/Projets/Podometre/' element={
          <>
            <PodometreNeg />
            <ChangerDePage location={'/Projets/Recette'} message={'Next page'}/>
          </>
        }/>
        <Route path='/Projets/Recette/:id' element={
          <>
            <AfficherRecettes recettes={recettes}/>
            <ChangerDePage location={'/Projets/Recette/123456'} message={'Latte chai'}/>
            <ChangerDePage location={'/Projets/Recette/234567'} message={'Chocolatine'}/>
            <ChangerDePage location={'/Projets/Recette/345678'} message={'Le pudding à larsenic'}/>
            <ChangerDePage location={'/Projets/Recette/567890'} message={'Oeufs brouillés'}/>
            <ChangerDePage location={'/Projets/Etudiant'} message={'Next page'}/>
          </>
        }/>
        <Route path='/Projets/Etudiant/' element={
        <>
          <ListeEtudiants etudiants={etudiants}/>
          <StatutClasse etudiants={etudiants}/>
          <ChangerDePage location={'/Projets/Horloge'} message={'Next page'}/>
        </>
      }/>
        <Route path='/Projets/Horloge/' element={
        <>
          <Horloge heure={13} minutes={45}/>
          <ChangerDePage location={'/'} message={'Next page'}/>
        </>
        }/>
      </Routes>
    </Container>
  </BrowserRouter>
  )
}

export default App;
