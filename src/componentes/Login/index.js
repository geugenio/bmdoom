import React from "react";
import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [emailUsuarioL, setEmailL] = useState("");
  const [senhaUsuarioL, setSenhaL] = useState("");
  
  function acharUser() {
    const armazenarContas = localStorage.getItem("contas") || [];
    console.log(armazenarContas);

    if (armazenarContas) {
      const contasRegistrados = JSON.parse(armazenarContas);

      // if (
      //   contasRegistrados.find(
      //     (contas) =>
      //       contas.emailUsuario === emailUsuarioL &&
      //       contas.senhaUsuario === senhaUsuarioL
      //   )
      if (
        contasRegistrados.find(
          (contas) =>
            contas.emailUsuario === emailUsuarioL &&
            contas.senhaUsuario === senhaUsuarioL
        )
      ) {
        alert("Login realizado com sucesso!");
      } else {
        alert("Erro! Insira os dados corretamente!");
      }
    } else {
      console.log("Não há usuários registrados no banco de dados");
    }
  }

  return (
    <>
      <div className={styles.area}>
        <h1>Login</h1>
        <form className={styles.formulario}>
          <h1>Email</h1>
          <input
            name="email_usuario"
            placeholder="insira o email..."
            onChange={(evento) => {
              setEmailL(evento.target.value);
            }}
          ></input>
          <h1> Senha</h1>
          <input
            name="senha_usuario"
            type="password"
            placeholder="insira a senha..."
            onChange={(evento) => {
              setSenhaL(evento.target.value);
            }}
          ></input>
          <br></br>
          <input type="button" value="verificar" onClick={() => acharUser()} />
        </form>
      </div>
    </>
  );
};

export default Login;
