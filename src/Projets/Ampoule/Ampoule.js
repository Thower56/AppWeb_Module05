import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export function Ampoule() {
  const [ampoule, setAmpoule] = useState('off.png');
  let etat = (ampoule == 'off.png') ? "Mettre l'ampule a ON" : "Mettre l'ampule a OFF";

  return (
    <>
      <div>
        <h1>Ampoule</h1>
        <img src={ampoule} alt="Ampoule" />
      </div>
      <div>
        <Button variant="primary" onClick={() => setAmpoule((ampoule == "off.png") ? "on.png" : "off.png")}>{etat}</Button>
      </div>
    </>
  );
}
