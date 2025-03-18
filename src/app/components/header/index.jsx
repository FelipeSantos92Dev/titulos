import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Sala de Troféus do Corinthians</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">História</a>
          </li>
          <li>
            <a href="#">Campeonatos</a>
          </li>
          <li>
            <a href="#">Ídolos</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
