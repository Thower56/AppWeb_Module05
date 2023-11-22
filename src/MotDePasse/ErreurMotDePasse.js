import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { BsCheck, BsX } from "react-icons/bs";

export function ErreurMotDePasse({ motDePasse }) {
  let color = (/[A-Z]/.test(motDePasse) && /[0-9]/.test(motDePasse)) ? "success" : "warning";
  let majuscules = (/[A-Z]/.test(motDePasse)) ? (<BsCheck className={"text-success"} />) : (<BsX className={"text-danger"} />);
  let chiffre = (/[0-9]/.test(motDePasse)) ? (<BsCheck className={"text-success"} />) : (<BsX className={"text-danger"} />);
  return (
    <Alert variant={color}>
      <ul>
        <li>Le mot de passe doit contenir une majuscule {majuscules}</li>
        <li>Le mot de passe doit contenir un chiffre {chiffre}</li>
      </ul>
    </Alert>);
}
