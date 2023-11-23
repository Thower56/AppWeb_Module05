import React from 'react';
import { AfficherTitre } from './AfficherTitre';
import { AfficherDescription } from './AfficherDescription';
import { AfficherIngredients } from './AfficherIngredients';
import { AfficherInstructions } from './AfficherInstructions';

export function AfficherRecettes({ recette }) {
  return (
    <>
      <AfficherTitre Titre={recette.Titre} />
      <AfficherDescription Description={recette.Description} />
      <AfficherIngredients Ingredients={recette.Ingredients} />
      <AfficherInstructions Instructions={recette.Instructions} />
    </>
  );
}
;
