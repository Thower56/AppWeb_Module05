import React from 'react';
import { useParams } from 'react-router-dom';
import { AfficherTitre } from './AfficherTitre';
import { AfficherDescription } from './AfficherDescription';
import { AfficherIngredients } from './AfficherIngredients';
import { AfficherInstructions } from './AfficherInstructions';

export function AfficherRecettes({ recettes}) {
  const { id } = useParams();
  const recettesfiltrer = recettes.filter(r => r.id == id);

  if(!recettesfiltrer || recettesfiltrer.length === 0){
    return <div className='text-danger'><h2>No matching recipe found, try other id</h2></div>
  }

  const recette = recettesfiltrer[0]

  return (
    <>
      <AfficherTitre titre={recette.titre} />
      <AfficherDescription description={recette.description} />
      <AfficherIngredients ingredients={recette.ingredients} />
      <AfficherInstructions instructions={recette.instructions} />
    </>
  );
}
;
