import React from 'react'
import styles from "./Rodape.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"


//Necessário importar o svg individualmente, assim como o global. Foi necessário instalar o free-brands-svg-icons, que anteriormente nao estava instalado.
export default function Rodape(props) {
  return (

    <div className ={styles.rodape}>
        <p className={styles.dataCorrente}>{mostraData()}</p>
        <div className={styles.icons}>
        <a href="#" className={styles.icon}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className={styles.icon}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" className={styles.icon}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        </div>
    </div>
  )
}
function mostraData(){
  const date = new Date();
  return date.toLocaleDateString();
}
