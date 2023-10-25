import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./paginas/Principal";
import Cadastro from "./paginas/Cadastro";
import Login from "./paginas/Login";
import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";

//instale a dependencia npm i react -router-dom
const Rotas = () => {
  return (
    <BrowserRouter>
      <Cabecalho logo="estrela.png" titulo="BMDOOM" />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
};

export default Rotas;
