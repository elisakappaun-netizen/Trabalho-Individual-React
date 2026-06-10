import CardExperiencia from './components/CardExperiencia';
import Header from './components/Header';
import Rodape from './components/Rodape';
import Secao from './components/Secao';
import './App.css'

function App() {

  const habilidades = [
    "React e JavaScript",
    "Banco de Dados",
    "Modelagem e Normalização de Dados",
    "Noções de Frontend",
    "Atendimento Direto ao Público"
  ];

  const curso = [

    {
      id: 1,
      titulo: "Administração de Banco de Dados",
      local: "Senai",
      periodo: "Novembro de 2025 - Janeiro de 2026",
      descricao: "Formação focada em banco de dados, normalização e desenvolvimento "
    },
    {
      id: 2,
      titulo: "Residência em TIC em Software",
      local: "SerraTec / Firjan/ Senai/ Sesi",
      periodo: "Março de 2026 - Julho 2026 | Cursando",
      descricao: "Programa intensivo de imersão prática em desenvolvimento Full Stack."
    }
  ];

  const trabalho = [

    {
      id: 1,
      titulo: "Caixa - Financeiro",
      local: "Cervejaria Bohemia",
      periodo: "Setembro - 2016 | Setembro de 2025",
      descricao: "Atuação direta no controle do fluxo de caixa e na resolução de problemas operacionais de sistema (como falhas nos caixas e atualização de preços/cadastro de produtos). Excelência no atendimento ao público e na resolução de conflitos. Atuei também como Chefe de Salão por um período de 3 meses."
    }
  ];

  return (
    <div className="curriculo-container">
      <Header />

      <Secao titulo="Habilidades e Competências">
        <ul className=' lista-habilidades'>
          {habilidades.map((habi, index) => (
            <li key={index} className="item-habilidade">
              {habi}
            </li>
          ))}
        </ul>
      </Secao>

      <Secao titulo="Formação Acadêmica">
        <div className="lista-cards">
          {curso.map((curso) => (
            <CardExperiencia
              key={curso.id}
              cargo={curso.titulo}
              empresa={curso.local}
              periodo={curso.periodo}
              descricao={curso.descricao}
            />
          ))}
        </div>
      </Secao>

      <Secao titulo="Experiência Profissional">
        <div className="lista-cards">
          {trabalho.map((traba) => (
            <CardExperiencia
              key={traba.id}
              cargo={traba.titulo}
              empresa={traba.local}
              periodo={traba.periodo}
              descricao={traba.descricao}
            />
          ))}
        </div>
      </Secao>

      <Rodape/>
    </div>
  );
}
export default App
