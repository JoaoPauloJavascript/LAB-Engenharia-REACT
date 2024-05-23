import React, { useState } from 'react';

function Formulario3() {
  const [formData, setFormData] = useState({
    nome: '',
    titulo: '',
    cidade: '',
    imagemUrl: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form>
        <h1>Formulario3</h1>
        <label htmlFor="nome">Nome:</label><br />
        <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} /><br />
        
        <label htmlFor="titulo">Título:</label><br />
        <input type="text" id="titulo" name="titulo" value={formData.titulo} onChange={handleChange} /><br />
        
        <label htmlFor="cidade">Cidade:</label><br />
        <input type="text" id="cidade" name="cidade" value={formData.cidade} onChange={handleChange} /><br />
        
        <label htmlFor="imagemUrl">Imagem:</label><br />
        <input type="text" id="imagemUrl" name="imagemUrl" value={formData.imagemUrl} onChange={handleChange} /><br /><br />
      </form>
      
      <div>
        {formData.nome && <p>{formData.nome}</p>}
        {formData.titulo && <p>{formData.titulo}</p>}
        {formData.cidade && <p>{formData.cidade}</p>}
        {formData.imagemUrl && <img src={formData.imagemUrl} alt="Imagem do formulário" style={{ width: '300px', height: '200px' }} />}
      </div>
    </div>
  );
}

export default Formulario3;
