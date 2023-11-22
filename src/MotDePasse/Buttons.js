import React, { useState } from 'react';
import { GroupeButton } from './GroupeButton';

export function Buttons() {
  const [compteur, setCompteur] = useState(0);

  const incrementer = () => setCompteur(compteur + 1);
  const decrementer = () => setCompteur(compteur > 0 ? compteur - 1 : 0);
  const remiseAZero = () => setCompteur(0);

  return (
    <div>
      <h1>{compteur}</h1>
        <GroupeButton incrementer={incrementer} decrementer={decrementer} remiseAZero={remiseAZero}/>
    </div>
  );
}
