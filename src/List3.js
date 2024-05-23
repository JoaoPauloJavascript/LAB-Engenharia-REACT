import { useState } from 'react';

let nextId = 3;
const artistasIniciais = [
  { id: 0, nome: 'Freddie Mercury' },
  { id: 1, nome: 'Elvis Presley'},
  { id: 2, nome: 'David Bowie'},
];

export default function Lista() {
  const [nome, setNome] = useState('');
  const [artistas, setArtistas] = useState(
    artistasIniciais
  );

  function handleClick() {
    const inserirEm = 1;
    const proximosArtistas = [
      
      ...artistas.slice(0, inserirEm),
      
      { id: nextId++, nome: nome },
      
      ...artistas.slice(inserirEm)
    ];
    setArtistas(proximosArtistas);
    setNome('');
  }

  return (
    <>
      <h1>Lista 3-Ícones do Rock:</h1>
      <input
        value={nome}
        onChange={e => setNome(e.target.value)}
      />
      <button onClick={handleClick}>
        Inserir
      </button>
      <ul>
        {artistas.map(artista => (
          <li key={artista.id}>{artista.nome}</li>
        ))}
      </ul>
    </>
  );
}
