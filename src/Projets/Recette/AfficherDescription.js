import React from 'react';
import { AfficherTitreSecondaire } from './AfficherTitreSecondaire';

export function AfficherDescription({ description }) {
  return (
    <>
      <AfficherTitreSecondaire Titre={"description"} />
      <p>{description}</p>
    </>
  );
}
