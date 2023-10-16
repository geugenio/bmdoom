import React from "react";
import { useState } from "react";
import styles from "./Cadastro.module.css";

const Cadastro = () => {
  const [emailUsuario, setEmailU] = useState("");
  const [nomeUsuario, setNomeU] = useState("");
  const [SenhaUsuario, setSenhaU] = useState("");
  const [confirmaSenhaUsuario, setConfSenha] = useState("");
  const [contas, setConta] = useState([]);

  function salvarCadastro() {
    if (confirmaSenhaUsuario == SenhaUsuario) {
      alert("Cadastrado com sucesso!");
      setConta([
        ...contas,
        { emailUsuario, nomeUsuario, SenhaUsuario, confirmaSenhaUsuario },
      ]);
      localStorage.setItem("contas", JSON.stringify(contas));
    } else {
      alert("Senha incorreta!");
    }
  }

  return (
    <>
      <div className={styles.area}>
        <h1>Cadastro</h1>
        <form className={styles.formulario}>
          <h1>Email</h1>
          <input
            name="email_usuario"
            placeholder="insira o email..."
            onChange={(evento) => {
              setEmailU(evento.target.value);
            }}
          ></input>
          <h1>Nome</h1>
          <input
            name="nome_usuario"
            placeholder="insira o nome..."
            onChange={(evento) => {
              setNomeU(evento.target.value);
            }}
          ></input>
          <h1> Senha</h1>
          <input
            name="senha_usuario"
            type="password"
            placeholder="insira a senha..."
            onChange={(evento) => {
              setSenhaU(evento.target.value);
            }}
          ></input>
          <h1>Confirme a senha</h1>
          <input
            name="senha_usuario_confirmar"
            type="password"
            placeholder="insira a senha novamente..."
            onChange={(evento) => {
              setConfSenha(evento.target.value);
            }}
          ></input>
          <br></br>
          <input
            type="button"
            value="salvar"
            onClick={() => salvarCadastro()}
          />
        </form>
      </div>
    </>
  );
};

export default Cadastro;
