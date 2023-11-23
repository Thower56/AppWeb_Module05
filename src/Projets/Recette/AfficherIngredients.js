import React from 'react';
import { AfficherTitreSecondaire } from './AfficherTitreSecondaire';
import { Ingredient } from './Ingredient';

export function AfficherIngredients({ Ingredients }) {
  return (
    <>
      <AfficherTitreSecondaire Titre={"Ingredients"} />
      <ul>{Ingredients.map(i => <Ingredient Ingredients={i} key={i} />)}</ul>
    </>
  );
}
