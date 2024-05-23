import { useState } from 'react';

let personagensIniciais = [
  { id: 0, nome: 'Rita de Cássia' },
  { id: 1, nome: 'Capitu' },
  { id: 2, nome: 'Gabriela' },
];

export default function Lista() {
  const [personagens, setPersonagens] = useState(personagensIniciais);

  return (
    <>
      <h1>Lista 2 Personagens de novelas da Globo:</h1>
      <ul>
        {personagens.map(personagem => (
          <li key={personagem.id}>
            {personagem.nome}{' '}
            <button onClick={() => {
              setPersonagens(
                personagens.filter(p =>
                  p.id !== personagem.id
                )
              );
            }}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
