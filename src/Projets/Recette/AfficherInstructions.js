import React from 'react';
import { AfficherTitreSecondaire } from './AfficherTitreSecondaire';
import { Instruction } from './Instruction';

export function AfficherInstructions({ Instructions }) {
  return (
    <>
      <AfficherTitreSecondaire Titre={"Instructions"} />
      <ol>{Instructions.map(i => <Instruction Instruction={i} key={i} />)}</ol>
    </>
  );
}
