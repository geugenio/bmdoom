import React from 'react'

export default function Conteudo() { //Criando uma função de nome "Conteudo", o export significa que vai exibir para outras partes do sistema essa função Conteudo. 
    //O Default significa que é padrão. Em um arquivo js só pode ter um Default, um padrão, só pode exportar um único padrão mas podemos exportar outras coisas porem sem default
    //No import React, há alguns exports, 
// 
// 
//     
  return (
    <div>Conteudo</div>
  )
}

export function OlaMundo(){
    console.log("Ola mundo")
  }