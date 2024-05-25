function Receita({ drinkers }) {
    return (
      <ol>    
        <li>Ferva {drinkers} xícaras de água.</li>
        <li>Adicione {drinkers} colheres de chá e {0.5 * drinkers} colheres de chá de especiarias.</li>
        <li>Adicione {0.5 * drinkers} xícaras de leite para ferver e açúcar a gosto.</li>
      </ol>
    );
  }
  
  export default function App() {
    return (
      <section>
        <h1>Receita de Chá com Especiarias</h1>
        <h2>Para dois</h2>
        <Receita drinkers={2} />
        <h2>Para uma reunião</h2>
        <Receita drinkers={4} />
      </section>
    );
  }
  