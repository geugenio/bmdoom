import React from "react";
import { useState } from "react";
import styles from "./Conteudo.module.css";
const Conteudo = () => {
  const [url, setUrl] = useState("");
  const [nomeSite, setNomeSite] = useState("");

  let favoritos = [];
  function salvarFavorito() {
    favoritos = [...favoritos, { nomeSite, url }];
    localStorage.setItem("favorito", JSON.stringify(favoritos));
  }

  return (
    <div className={styles.area}>
      Conteudo
      <form
        className={styles.formulario}
        onSubmit={() => alert("Favorito salvo!")}
      >
        <label>Nome do Site</label>
        <h1>{nomeSite}</h1>
        <input
          name="nome_site"
          onChange={(evento) => {
            setNomeSite(evento.target.value);
            console.log(nomeSite);
          }}
        ></input>
        <br></br>

        <label>Url</label>
        <h1>{url}</h1>
        <input
          name="url_site"
          onChange={(evento) => {
            setUrl(evento.target.value);
            console.log(url);
          }}
        ></input>
        <br></br>
        <button onClick={salvarFavorito()}>Salvar</button>
      </form>
    </div>
  );
};

export default Conteudo;

//Arquivo com base no rafce, instalar
