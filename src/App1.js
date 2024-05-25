function Item({ nome, estaEmpacotado }) {
  return <li className="item">{nome}</li>;
}

export default function ListaDeEmbalagemDeCarros() {
  return (
    <section>
      <h1>Lista de Carros</h1>
      <ul>
        <Item 
          estaEmpacotado={true} 
          nome="Ferrari 458 Italia" 
        />
        <Item 
          estaEmpacotado={true} 
          nome="Porsche 911 Turbo S" 
        />
        <Item 
          estaEmpacotado={false} 
          nome="Tesla Model S" 
        />
      </ul>
    </section>
  );
}
