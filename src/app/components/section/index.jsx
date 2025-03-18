import styles from "./section.module.css";

const Section = ({ titulo, children }) => {
  return (
    <section className={styles.newTrophies}>
      <h2>{titulo}</h2>
      <div className={styles.trophiesGrid}>{children}</div>
    </section>
  );
};

export default Section;
