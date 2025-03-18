import React from "react";
import styles from "./titulos.module.css";

const CorinthiansTrophiesPage = () => {
  return (
    <div className={styles.container}>
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

      <main className={styles.main}>
        <section className={styles.featured}>
          <h2>Conquistas Principais</h2>
          <div className={styles.featuredTrophies}>
            <div className={styles.trophy}>
              <div className={styles.trophyCover}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                  alt="Troféu do Mundial de Clubes da FIFA 2012"
                />
              </div>
              <div className={styles.trophyInfo}>
                <h3>Mundial de Clubes da FIFA</h3>
                <p className={styles.year}>2012</p>
                <p className={styles.details}>Corinthians 1 x 0 Chelsea</p>
                <button className={styles.detailsButton}>Ver Detalhes</button>
              </div>
            </div>
            <div className={styles.trophy}>
              <div className={styles.trophyCover}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                  alt="Troféu da Copa Libertadores da América 2012"
                />
              </div>
              <div className={styles.trophyInfo}>
                <h3>Copa Libertadores da América</h3>
                <p className={styles.year}>2012</p>
                <p className={styles.details}>Corinthians 2 x 0 Boca Juniors</p>
                <button className={styles.detailsButton}>Ver Detalhes</button>
              </div>
            </div>
            <div className={styles.trophy}>
              <div className={styles.trophyCover}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                  alt="Troféu da Copa Libertadores da América 2000"
                />
              </div>
              <div className={styles.trophyInfo}>
                <h3>Mundial de Clubes da FIFA</h3>
                <p className={styles.year}>2000</p>
                <p className={styles.details}>Corinthians 0(4) x 0(3) Vasco</p>
                <button className={styles.detailsButton}>Ver Detalhes</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.newTrophies}>
          <h2>Campeonatos Brasileiros</h2>
          <div className={styles.trophiesGrid}>
            <div className={styles.trophy}>
              <div className={styles.trophyCover}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                  alt="Troféu do Campeonato Brasileiro 2017"
                />
              </div>
              <div className={styles.trophyInfo}>
                <h3>Campeonato Brasileiro</h3>
                <p className={styles.year}>2017</p>
                <p className={styles.details}>7º título brasileiro</p>
                <button className={styles.detailsButton}>Ver Detalhes</button>
              </div>
            </div>
            <div className={styles.trophy}>
              <div className={styles.trophyCover}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                  alt="Troféu do Campeonato Brasileiro 2015"
                />
              </div>
              <div className={styles.trophyInfo}>
                <h3>Campeonato Brasileiro</h3>
                <p className={styles.year}>2015</p>
                <p className={styles.details}>6º título brasileiro</p>
                <button className={styles.detailsButton}>Ver Detalhes</button>
              </div>
            </div>
            <div className={styles.trophy}>
              <div className={styles.trophyCover}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                  alt="Troféu do Campeonato Brasileiro 2011"
                />
              </div>
              <div className={styles.trophyInfo}>
                <h3>Campeonato Brasileiro</h3>
                <p className={styles.year}>2011</p>
                <p className={styles.details}>5º título brasileiro</p>
                <button className={styles.detailsButton}>Ver Detalhes</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.promo}>
          <h2>Campeonatos Estaduais</h2>
          <div className={styles.trophiesGrid}>
            <div className={styles.trophy}>
              <div className={styles.trophyCover}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                  alt="Troféu do Campeonato Paulista 2023"
                />
              </div>
              <div className={styles.trophyInfo}>
                <h3>Campeonato Paulista</h3>
                <p className={styles.year}>2023</p>
                <p className={styles.details}>
                  <span className={styles.recordTitle}>
                    30º título estadual
                  </span>
                </p>
                <button className={styles.detailsButton}>Ver Detalhes</button>
              </div>
            </div>
            <div className={styles.trophy}>
              <div className={styles.trophyCover}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                  alt="Troféu do Campeonato Paulista 2019"
                />
              </div>
              <div className={styles.trophyInfo}>
                <h3>Campeonato Paulista</h3>
                <p className={styles.year}>2019</p>
                <p className={styles.details}>
                  <span className={styles.recordTitle}>
                    29º título estadual
                  </span>
                </p>
                <button className={styles.detailsButton}>Ver Detalhes</button>
              </div>
            </div>
            <div className={styles.trophy}>
              <div className={styles.trophyCover}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                  alt="Troféu do Campeonato Paulista 2018"
                />
              </div>
              <div className={styles.trophyInfo}>
                <h3>Campeonato Paulista</h3>
                <p className={styles.year}>2018</p>
                <p className={styles.details}>
                  <span className={styles.recordTitle}>
                    28º título estadual
                  </span>
                </p>
                <button className={styles.detailsButton}>Ver Detalhes</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.otherTrophies}>
          <h2>Outras Conquistas</h2>
          <div className={styles.trophiesGrid}>
            <div className={styles.trophy}>
              <div className={styles.trophyCover}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                  alt="Troféu da Copa do Brasil 2009"
                />
              </div>
              <div className={styles.trophyInfo}>
                <h3>Copa do Brasil</h3>
                <p className={styles.year}>2009</p>
                <p className={styles.details}>
                  Corinthians 2 x 0 Internacional
                </p>
                <button className={styles.detailsButton}>Ver Detalhes</button>
              </div>
            </div>
            <div className={styles.trophy}>
              <div className={styles.trophyCover}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                  alt="Troféu da Recopa Sul-Americana 2013"
                />
              </div>
              <div className={styles.trophyInfo}>
                <h3>Recopa Sul-Americana</h3>
                <p className={styles.year}>2013</p>
                <p className={styles.details}>Corinthians 3 x 1 São Paulo</p>
                <button className={styles.detailsButton}>Ver Detalhes</button>
              </div>
            </div>
            <div className={styles.trophy}>
              <div className={styles.trophyCover}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                  alt="Troféu da Copa do Brasil 2002"
                />
              </div>
              <div className={styles.trophyInfo}>
                <h3>Copa do Brasil</h3>
                <p className={styles.year}>2002</p>
                <p className={styles.details}>Corinthians 3 x 2 Brasiliense</p>
                <button className={styles.detailsButton}>Ver Detalhes</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Sobre o Sport Club Corinthians Paulista</h3>
            <p>
              Fundado em 1910, o Corinthians é um dos clubes mais populares e
              vitoriosos do futebol brasileiro, com milhões de torcedores ao
              redor do mundo.
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
    </div>
  );
};

export default CorinthiansTrophiesPage;
