import React from 'react';
import { AfficherTitreSecondaire } from './AfficherTitreSecondaire';
import { Instruction } from './Instruction';

export function AfficherInstructions({ instructions }) {
  return (
    <>
      <AfficherTitreSecondaire titre={"Instructions"} />
      <ol>{instructions.map(i => <Instruction instruction={i} key={i} />)}</ol>
    </>
  );
}
