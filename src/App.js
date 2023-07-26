import './App.css';
import Cabecalho from "./componentes/Cabecalho";
import Conteudo from './componentes/Conteudo';
import Rodape from './componentes/Rodape';

/*
Arquivo APP JSX

Componente funcional = Ele é uma função!
*/
function App() {
  /*Todo componente deve retornar um html entre paretne*/
  // OlaMundo();
  return (
    // O react substitui className por class pq class é palavra reservada do JS.
    <>
    {/* Nosso cabecalho tem uma propriedade chamada titulo */}
    <Cabecalho logo="ponto.png" titulo = "BMDOOM"/>

    <Conteudo/>
    <Rodape/>
    </>
  );
}

export default App;
