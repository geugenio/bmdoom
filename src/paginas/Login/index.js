import React from "react";
import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [emailUsuario, setEmailL] = useState("");
  const [senhaUsuario, setSenhaL] = useState("");

  function acharUser() {
    const armazenarContas = localStorage.getItem("contas") || [];

    if (armazenarContas) {
      const contasRegistrados = JSON.parse(armazenarContas);

      contasRegistrados.forEach((conta) => {
        console.log(
          "Email: " + conta.emailUsuario + " Senha: " + conta.senhaUsuario
        );
      });
      if (
        contasRegistrados.find(
          (contas) =>
            contas.emailUsuario == emailUsuario &&
            contas.senhaUsuario == senhaUsuario
        )
      ) {
        alert("Logado com sucesso!");
      } else {
        alert("Erro! Verifique os dados novamente.");
      }
    } else {
      console.log("Usuários não encontrados");
    }
  }

  return (
    <>
      <div className={styles.login}>
        <h1>Login</h1>
        <form>
          <label htmlFor="email_usuario">Email</label>
          <input
            name="email_usuario"
            placeholder="insira o email..."
            onChange={(evento) => {
              setEmailL(evento.target.value);
            }}
          ></input>
          <label htmlFor="senha_usuario">Senha</label>
          <input
            name="senha_usuario"
            type="password"
            placeholder="insira a senha..."
            onChange={(evento) => {
              setSenhaL(evento.target.value);
            }}
          ></input>
          <input type="button" value="verificar" onClick={() => acharUser()} />
        </form>
      </div>
    </>
  );
};

export default Login;
