import { useState } from 'react';

let nextId = 5;
const initialList = [
  { id: 0, title: 'God of War', visto: false },
  { id: 1, title: 'Shadow of the Colossus', visto: false },
  { id: 2, title: 'Gran Turismo 4', visto: true },
  { id: 3, title: 'Final Fantasy X', visto: false },
  { id: 4, title: 'Metal Gear Solid 3: Snake Eater', visto: false },
];

export default function ListaDeJogos() {
  const [minhaLista, setMinhaLista] = useState(initialList);
  const [suaLista, setSuaLista] = useState(initialList);

  function handleAlternarMinhaLista(idDoJogo, proximoEstado) {
    const minhaProximaLista = [...minhaLista];
    const jogo = minhaProximaLista.find(
      j => j.id === idDoJogo
    );
    jogo.visto = proximoEstado;
    setMinhaLista(minhaProximaLista);
  }

  function handleAlternarSuaLista(idDoJogo, proximoEstado) {
    const suaProximaLista = [...suaLista];
    const jogo = suaProximaLista.find(
      j => j.id === idDoJogo
    );
    jogo.visto = proximoEstado;
    setSuaLista(suaProximaLista);
  }

  return (
    <>
      <h1>Lista de Jogos</h1>
      <h2>Minha lista de jogos a jogar:</h2>
      <ListaDeItens
        jogos={minhaLista}
        onAlternar={handleAlternarMinhaLista} />
      <h2>Sua lista de jogos a jogar:</h2>
      <ListaDeItens
        jogos={suaLista}
        onAlternar={handleAlternarSuaLista} />
    </>
  );
}

function ListaDeItens({ jogos, onAlternar }) {
  return (
    <ul>
      {jogos.map(jogo => (
        <li key={jogo.id}>
          <label>
            <input
              type="checkbox"
              checked={jogo.visto}
              onChange={e => {
                onAlternar(
                  jogo.id,
                  e.target.checked
                );
              }}
            />
            {jogo.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
