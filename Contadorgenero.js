import React, { useState } from 'react';
import Mas from "./Img/male.png"; // Mantém o nome original do arquivo para a imagem masculina
import Fem from "./Img/female.png"; // Mantém o nome original do arquivo para a imagem feminina

function ContadorGenero() {
  const [contagemMasculino, setContagemMasculino] = useState(0);
  const [contagemFeminino, setContagemFeminino] = useState(0);

  // Funções para adicionar ou remover contagem de masculino
  const adicionarMasculino = () => {
    setContagemMasculino(contagemMasculino + 1);
  };

  const removerMasculino = () => {
    if (contagemMasculino > 0) {
      setContagemMasculino(contagemMasculino - 1);
    }
  };

  // Funções para adicionar ou remover contagem de feminino
  const adicionarFeminino = () => {
    setContagemFeminino(contagemFeminino + 1);
  };

  const removerFeminino = () => {
    if (contagemFeminino > 0) {
      setContagemFeminino(contagemFeminino - 1);
    }
  };

  // Calcula o total de pessoas contadas
  const totalContado = contagemMasculino + contagemFeminino;

  return (
    <div className="contador" style={{ border: '8px solid #ccc', padding: '7px', width: '500px', margin: 'auto', marginTop: '40px', borderRadius: '15px', position: 'relative' }}>
      <div className="container-pessoas" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <div className="pessoa" style={{ textAlign: 'center', marginBottom: '0px' }}>
          <img src={Mas} alt="Masculino" style={{ width: '210px', height: '210px', margin: '5px' }} />
          <button onClick={adicionarMasculino} style={{ padding: '7px 10px', cursor: 'pointer', marginRight: '7px' }}>+</button>
          <button onClick={removerMasculino} style={{ padding: '7px 10px', cursor: 'pointer', marginRight: '7px' }}>-</button>
          <span id="contagemMasculino">{contagemMasculino}</span>
        </div>
        <div className="pessoa" style={{ textAlign: 'center', marginBottom: '0px' }}>
          <img src={Fem} alt="Feminino" style={{ width: '210px', height: '210px', margin: '5px' }} />
          <button onClick={adicionarFeminino} style={{ padding: '7px 10px', cursor: 'pointer', marginRight: '7px' }}>+</button>
          <button onClick={removerFeminino} style={{ padding: '7px 10px', cursor: 'pointer', marginRight: '7px' }}>-</button>
          <span id="contagemFeminino">{contagemFeminino}</span>
        </div>
      </div>
      <h3>Total: <span id="totalContado">{totalContado}</span></h3>
      <button onClick={() => window.location.reload()} style={{ position: 'absolute', top: '10px', right: '10px' }}>&#8635;</button>
    </div>
  );
}

export default ContadorGenero;
