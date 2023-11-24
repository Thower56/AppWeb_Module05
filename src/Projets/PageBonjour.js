import { useParams } from 'react-router-dom';
import React from 'react';


export const PageBonjour = () => {
  const { prenom } = useParams();
  return (<h1>Bonjour {prenom}</h1>);
};
