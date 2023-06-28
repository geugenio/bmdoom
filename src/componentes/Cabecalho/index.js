import React from 'react'

export default function Cabecalho(props) {
  return ( 
    <>
        <div>{props.titulo}</div>
        <h1>{props.subtitulo}</h1>
    </>
  )
}
