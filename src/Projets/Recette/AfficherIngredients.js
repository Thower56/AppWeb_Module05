import React from 'react';
import { AfficherTitreSecondaire } from './AfficherTitreSecondaire';
import { Ingredient } from './Ingredient';

export function AfficherIngredients({ ingredients }) {
  return (
    <>
      <AfficherTitreSecondaire titre={"Ingredients"} />
      <ul>{ingredients.map(i => <Ingredient ingredients={i} key={i} />)}</ul>
    </>
  );
}
