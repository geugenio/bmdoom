import React from "react";
import { useState } from "react";

const Estados = () => {
  //hook
  const [nome, setNome] = useState("nome do usuario");
  const [url, setUrl] = useState("URL");

  const [favoritos, setFavoritos] = useState([]); //const com um array vazio

  function adicionaFavorito(nome, url) {
    let favorito = { nome, url }; //criando uma variavel tipo let chamada favorito
    favoritos.push(favorito);
    setFavoritos(favoritos);
    console.log(favoritos);

    //... significa espalhar, irá espalhar os itens que estão dentro do array
  }

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
      <button onClick={() => adicionaFavorito(nome, url)}>Adicionar</button>
      <h1>Favoritos</h1>
      <ul>
        {favoritos.map((elemento) => (
          <li>{elemento.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Estados;
