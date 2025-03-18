import styles from "./cards.module.css";

const Card = ({ capa, textoAlt, titulo, ano, detalhes }) => {
  return (
    <div className={styles.trophy}>
      <div className={styles.trophyCover}>
        <img src={capa} alt={textoAlt} />
      </div>
      <div className={styles.trophyInfo}>
        <h3>{titulo}</h3>
        <p className={styles.year}>{ano}</p>
        <p className={styles.details}>{detalhes}</p>
        <button className={styles.detailsButton}>Ver Detalhes</button>
      </div>
    </div>
  );
};

export default Card;
