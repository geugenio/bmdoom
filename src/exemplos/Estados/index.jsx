import React from "react";
import { useState } from "react";

const Estados = () => {
  //hook
  const [nome, setNome] = useState("nome do usuario");
  const [url, setUrl] = useState("URL");
  function handleNome(valor) {
    setNome(valor);
  }
  function handleUrl(valor) {
    setUrl(valor);
  }
  return (
    <div>
      <h1>{nome}</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => handleNome(e.target.value)}
      />
      <h1>{url}</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => handleUrl(e.target.value)}
      />
      <button>Adicionar</button>
    </div>
  );
};

export default Estados;
