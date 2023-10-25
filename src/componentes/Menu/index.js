import React from 'react'
import styles from "./Menu.module.css"
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
      <nav className={styles.menu}>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/cadastro'}>Cadastro</Link></li>
        </ul>
      </nav>
    </div>
  )
}
