

export function Horloge({heure, minutes})
{
  var result = <></>;
  let postHeure;
  if(heure > 23 || heure < 0)
  {
    result = <><p>L'heure doit etre entre 0 et 23</p></>
  }
  else if(minutes > 59 || minutes < 0)
  {
    result = <><p>Les minutes doit etre entre 0 et 59</p></>
  }
  else
  {
    postHeure = heure > 12 ? "PM" : "AM";
    result = heure > 12 ? heure % 12 : heure
  }

  return <h2>{result}:{minutes} {postHeure}</h2>;
}