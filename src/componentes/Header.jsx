import styles from './Header.module.css';

import iginiteLogo from '../assets/Ignite-logo.png';

console.log(iginiteLogo)

export function Header() {
     return (
          <header className={styles.header}>
               <img src={iginiteLogo} alt="logoTipo" title='Sweet Spot'/>
               <strong>Sweet Spot</strong>
          </header>
     )
}