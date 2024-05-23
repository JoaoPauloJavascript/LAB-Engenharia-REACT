import { useState } from 'react';

let contadoresIniciais = [
  0, 0, 0
];

export default function ListaDeContadores() {
  const [contadores, setContadores] = useState(
    contadoresIniciais
  );

  function lidarComCliqueDeIncremento(indice) {
    const proximosContadores = contadores.map((c, i) => {
      if (i === indice) {
        
        return c + 1;
      } else {
        
        return c;
      }
    });
    setContadores(proximosContadores);
  }

  return (
    <ul>
        <h1>Counter List-lista de contadores</h1>
      {contadores.map((contador, i) => (
        <li key={i}>
          {contador}
          <button onClick={() => {
            lidarComCliqueDeIncremento(i);
          }}>+1</button>
        </li>
      ))}
    </ul>
  );
}
