import Modelo1 from "./Img/Modelo-Gisele.jpg";
export default function ListaDeTarefas() {
  return (
    <>
      <h1>Como Ser Uma Grande Modelo By Gisele Bundchen</h1>
      <img 
        src={Modelo1}
        alt="Gisele Bundchen" 
        className="foto" 
      />
      <ul>
        <li>Disciplina e Trabalho Duro</li>
        <li>Autoconfiança e Autenticidade</li>
        <li>Profissionalismo e Boa Atitude</li>
      </ul>
    </>
  );
}