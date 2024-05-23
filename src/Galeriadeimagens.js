import React, { useState } from 'react';
import imageData from './data'; // Importa os dados das imagens

const GaleriaDeImagens = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const avancar = () => {
    setIndiceAtual((indiceAnterior) => (indiceAnterior + 1) % imageData.length);
    setMostrarDetalhes(false); // Resetar mostrarDetalhes ao avançar para próxima imagem
  };

  const toggleDetalhes = () => {
    setMostrarDetalhes(!mostrarDetalhes);
  };

  return (
    <div>
      <h1>Galeria de Imagens</h1>
      <img src={imageData[indiceAtual].src} alt={`Imagem ${indiceAtual + 1}`} style={{ width: '500px', height: 'auto' }} />
      <div>
        <p>Imagem {indiceAtual + 1} de {imageData.length}</p>
        <button onClick={avancar}>Próxima</button>
        <button onClick={toggleDetalhes}>{mostrarDetalhes ? 'Esconder Detalhes' : 'Mostrar Detalhes'}</button>
        {mostrarDetalhes && <p>{imageData[indiceAtual].details}</p>}
      </div>
    </div>
  );
};

export default GaleriaDeImagens;
