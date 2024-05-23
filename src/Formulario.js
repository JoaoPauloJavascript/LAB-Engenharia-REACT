const Formulario = () => {
  const nomes = ['Bob', 'Ana', 'Wilson', 'Nikita', 'Jamile'];

  const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const nome = formData.get('nome');
      const mensagem = formData.get('mensagem');
      console.log(`Nome: ${nome}, Mensagem: ${mensagem}`);
      event.target.reset(); // Limpa o formulário
  };

  return (
      <div>
          <h1>Formulário</h1>
          <form onSubmit={handleSubmit}>
              <label>
                  Selecione o nome:
                  <select name="nome">
                      {nomes.map((nome, index) => (
                          <option key={index} value={nome}>{nome}</option>
                      ))}
                  </select>
              </label>
              <br />
              <label>
                  Mensagem:
                  <textarea name="mensagem" />
              </label>
              <br />
              <button type="submit">Enviar</button>
          </form>
      </div>
  );
};

export default Formulario;
