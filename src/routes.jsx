import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
//instale a dependencia npm i react -router-dom
const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
