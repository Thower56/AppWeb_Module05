
export function BoolButton({ motDePasse, confirmationMotDePasse }) {
  return ((/[A-Z]/.test(motDePasse)) && (/[0-9]/.test(motDePasse)) && (motDePasse === confirmationMotDePasse)) ? false : true;
}
