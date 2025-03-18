import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Sobre o Sport Club Corinthians Paulista</h3>
          <p>
            Fundado em 1910, o Corinthians é um dos clubes mais populares e
            vitoriosos do futebol brasileiro, com milhões de torcedores ao redor
            do mundo.
          </p>
        </div>
        <div className={styles.footerSection}>
          <h3>Contato</h3>
          <p>Email: contato@corinthians.com.br</p>
          <p>Telefone: (11) 2095-3000</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Siga-nos</h3>
          <div className={styles.socialLinks}>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          &copy; 2025 Sport Club Corinthians Paulista. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
