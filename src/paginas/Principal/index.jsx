import React from "react";
import Cabecalho from "../../componentes/Cabecalho";
import Conteudo from "../../componentes/Conteudo";
import Rodape from "../../componentes/Rodape";
const Principal = () => {
  return (
    <div>
      <Cabecalho logo="estrela.png" titulo="BMDOOM" />
      <Conteudo />
      {/* <div class="container">
        <Cadastro />
        <Login />
      </div> */}
      <Rodape />
    </div>
  );
};

export default Principal;
