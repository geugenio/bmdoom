import React from 'react'
import styles from "./Cabecalho.module.css"
export default function Cabecalho(props) {
  return ( 
    <div className={styles.cabecalho}>
      <img src = {props.logo} alt=""></img>
      <p className={styles.titulo} >{props.titulo}</p>
      <nav>
        <ul>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">SUAS COMPRAS</a>
          </li>
          <li>
            <a href="">SOBRE</a>
          </li>
        </ul>
      </nav>
      {/* <p className={`${styles.titulo} ${styles.subtitulo}`} >{props.subtitulo}</p> */}
    </div>
  )
}