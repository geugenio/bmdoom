import React from "react";
import { useState } from "react";
import styles from "./Conteudo.module.css";
const Conteudo = () => {
  const [nomeSite, setNomeSite] = useState("");

  const [url, setUrl] = useState("");

  const [favoritos, setFavoritos] = useState([]);
  const [importante, setImportante] = useState(false);
  function salvarFavorito() {
    favoritos.push({ nomeSite, url, importante });
    setFavoritos([...favoritos]);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }

  return (
    <>
      <ul>
        {favoritos[0] != undefined &&
          favoritos.map((favorito) => (
            <li style={favorito.importante ? { color: "red" } : {}}>
              {favorito.nomeSite} : {favorito.url}
              <br></br>
            </li>
          ))}
      </ul>

      <div className={styles.area}>
        <h1>Conteudo</h1>
        <form className={styles.formulario}>
          <label htmlFor="nome_site">Nome do Site</label>
          <input
            name="nome_site"
            onChange={(evento) => {
              setNomeSite(evento.target.value);
            }}
          ></input>
          <br></br>
          <label htmlFor="url">Url</label>
          <input
            name="url"
            onChange={(evento) => {
              setUrl(evento.target.value);
            }}
          ></input>
          <br></br>
          <label htmlFor="checkbox">Importante</label>
          <input
            type="checkbox"
            name="checkbox"
            onChange={(evento) => {
              setImportante(evento.target.value);
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
