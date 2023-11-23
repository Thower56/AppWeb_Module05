import React from 'react';
import Button from 'react-bootstrap/Button';

export function GroupeButton({ incrementer, decrementer, remiseAZero }) {
  return (
    <>
      <Button variant="primary" onClick={incrementer}>Incrementer</Button>
      <Button variant="success" onClick={decrementer}>Decrementer</Button>
      <Button variant="warning" onClick={remiseAZero}>Remise a zero</Button>
    </>);
}
