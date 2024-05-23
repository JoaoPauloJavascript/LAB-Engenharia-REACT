import React, { useState } from 'react';

function Formulario() {
  
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeNome = (event) => {
    setNome(event.target.value);
  };

  const handleChangeSobrenome = (event) => {
    setSobrenome(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <form>
        <div>
          <h1>Formulario 2</h1>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={handleChangeNome} />
        </div>
        <div>
          <label>Sobrenome:</label>
          <input type="text" value={sobrenome} onChange={handleChangeSobrenome} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={handleChangeEmail} />
        </div>
      </form>
      <div>
        <h2>Email Digitado:</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Formulario;
