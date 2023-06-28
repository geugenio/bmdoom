import './App.css';
import Cabecalho from "./componentes/Cabecalho"
import Rodape from './componentes/Rodape';
/*
Arquivo APP JSX

Componente funcional = Ele é uma função!
*/
function App() {

  /*Todo componente deve retornar um html entre paretne*/

  return (
    // O react substitui className por class pq class é palavra reservada do JS.
    <>
    <Cabecalho />
    <Rodape />
    </>
  );
}

export default App;
