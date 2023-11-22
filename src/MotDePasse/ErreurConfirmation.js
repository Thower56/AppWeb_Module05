import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { BsCheck, BsX } from "react-icons/bs";


export function ErreurConfirmation({ motDePasse, confirmationMotDePasse }) {
  let confirmation = (motDePasse === confirmationMotDePasse) && motDePasse.length > 0 ? (<BsCheck className={"text-success"} />) : (<BsX className={"text-danger"} />);
  let color = (motDePasse === confirmationMotDePasse) && motDePasse.length > 0 ? "success" : "warning";
  return (
    <Alert variant={color}>
      <ul>
        <li>Le mot de passe doit être identique {confirmation}</li>
      </ul>
    </Alert>
  );
}
