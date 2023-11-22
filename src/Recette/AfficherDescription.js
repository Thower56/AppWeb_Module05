import React from 'react';
import { AfficherTitreSecondaire } from './AfficherTitreSecondaire';

export function AfficherDescription({ Description }) {
  return (
    <>
      <AfficherTitreSecondaire Titre={"Description"} />
      <p>{Description}</p>
    </>
  );
}
