import React from "react";
import { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [emailUsuarioL, setEmailU] = useState("");
  const [senhaUsuarioL, setSenhaU] = useState("");


  function acharUser() {
    const armazenarContas = JSON.parse(localStorage.getItem("contas")) || [];
    if (armazenarContas) {
      const contas = JSON.parse(armazenarContas);

      if (contas.find())
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
              setEmailU(evento.target.value);
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
          <br></br>
          <input type="button" value="verificar" onClick={() => acharUser()} />
        </form>
      </div>
    </>
  );
};

export default Login;
