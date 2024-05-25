function Item({ nome, estáEmpacotado }) {
    return (
      <li className="item">
        {nome} {estáEmpacotado && '✔'}
      </li>
    );
  }
  
  export default function ListaDeItensDeCasa() {
    return (
      <section>
        <h1>Lista de Itens para Casa</h1>
        <ul>
          <Item
            estáEmpacotado={true}
            nome="Panelas"
          />
          <Item
            estáEmpacotado={true}
            nome="Edredons"
          />
          <Item
            estáEmpacotado={false}
            nome="Decoração de Parede"
          />
        </ul>
      </section>
    );
  }
  