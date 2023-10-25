import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Cadastro.module.css";

const Cadastro = () => {
  const [emailUsuario, setEmailU] = useState("");
  const [nomeUsuario, setNomeU] = useState("");
  const [senhaUsuario, setSenhaU] = useState("");
  const [confirmaSenhaUsuario, setConfSenha] = useState("");
  const [contas, setConta] = useState([]);

  useEffect(() => {
    const armazenarContas = JSON.parse(localStorage.getItem("contas"));
    if (armazenarContas) {
      setConta(armazenarContas);
    }
  }, []);

  function salvarCadastro() {
    if (
      !emailUsuario ||
      !nomeUsuario ||
      !senhaUsuario ||
      !confirmaSenhaUsuario
    ) {
      alert("Preencha todos os campos!");
    } else {
      if (confirmaSenhaUsuario === senhaUsuario) {
        alert("Cadastrado com sucesso!");
        const novasContas = [
          ...contas,
          { emailUsuario, nomeUsuario, senhaUsuario },
        ];

        setConta(novasContas);
        localStorage.setItem("contas", JSON.stringify(novasContas));
      } else {
        alert("Senha incorreta!");
      }
    }
  }

  return (
    <>
      <div className={styles.cadastro}>
        <h1>Cadastro</h1>
        <form className={styles.formulario}>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="insira o email..."
            onChange={(evento) => {
              setEmailU(evento.target.value);
            }}
          ></input>
          <label htmlFor="nome">Nome</label>
          <input
            name="nome"
            placeholder="insira o nome..."
            onChange={(evento) => {
              setNomeU(evento.target.value);
            }}
          ></input>
          <label htmlFor="senha_usuario">Senha</label>
          <input
            name="senha_usuario"
            type="password"
            placeholder="insira a senha..."
            onChange={(evento) => {
              setSenhaU(evento.target.value);
            }}
          ></input>
          <label htmlFor="senha_usuario_confirmar">Confirme a senha</label>
          <input
            name="senha_usuario_confirmar"
            type="password"
            placeholder="insira a senha novamente..."
            onChange={(evento) => {
              setConfSenha(evento.target.value);
            }}
          ></input>

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
