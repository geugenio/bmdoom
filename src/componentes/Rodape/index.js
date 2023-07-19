import React from 'react'
import styles from "./Rodape.module.css"
export default function Rodape(props) {
  return (
    <div className ={styles.rodape}>
      <p className={styles.dataCorrente}>{mostraData()}</p>
      <i className={props.twitter}></i>
      </div>
  )

  function mostraData(){
    const date = new Date();
    return date.toLocaleDateString();
  }
}
