import React from "react";
import { useState } from "react";
import styles from "./Conteudo.module.css";
const Conteudo = () => {
  const [nomeSite, setNomeSite] = useState("");

  const [url, setUrl] = useState("");

  const [favoritos, setFavoritos] = useState([]);

  function salvarFavorito() {
    setFavoritos([...favoritos, { nomeSite, url }]);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }

  return (
    <>
      <ul>
        {favoritos[0] != undefined &&
          favoritos.map((favorito) => (
            <li>
              {favorito.nomeSite} : {favorito.url}
              <br></br>
            </li>
          ))}
      </ul>

      <div className={styles.area}>
        <h1>Conteudo</h1>
        <form className={styles.formulario}>
          <label>Nome do Site</label>
          <h1>{nomeSite}</h1>

          <input
            name="nome_site"
            onChange={(evento) => {
              setNomeSite(evento.target.value);
            }}
          ></input>
          <br></br>

          <label>Url</label>
          <h1>{url}</h1>
          <input
            type="url"
            name="url"
            onChange={(evento) => {
              setUrl(evento.target.value);
            }}
          ></input>
          <br></br>
          <input
            type="button"
            value="salvar"
            onClick={() => salvarFavorito()}
          />
        </form>
      </div>
    </>
  );
};

export default Conteudo;
