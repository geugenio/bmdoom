import React from "react";
import { useState } from "react";

const Conteudo = () => {
  const [url, setUrl] = useState("URL");
  return (
    <div>
      Conteudo
      <form onSubmit={() => alert("Favorito salvo!")}>
        <label>Nome do Site</label>
        <input name="nome_site"></input>
        <label>Url</label>
        <input type="url" name="url"></input>
        <button>Salvar</button>
      </form>
    </div>
  );
};

export default Conteudo;

//Arquivo com base no rafce, instalar
