import { useState } from 'react';

const listaInicial = [
  { id: 0, title: 'Alfazema' },
  { id: 1, title: 'Camomila' },
  { id: 2, title: 'Hortelã' },
];

export default function Lista() {
  const [lista, setLista] = useState(listaInicial);

  function handleClick() {
    const proximaLista = [...lista];
    proximaLista.reverse();
    setLista(proximaLista);
  }

  return (
    <>
      <button onClick={handleClick}>
        Reverter
      </button>
      <ul>
        {lista.map(planta => (
          <li key={planta.id}>{planta.title}</li>
        ))}
      </ul>
    </>
  );
}
