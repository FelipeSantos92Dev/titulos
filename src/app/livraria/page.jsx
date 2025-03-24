import styles from "./livraria.module.css";

export default function Home() {
  // Dados que seriam obtidos de uma API
  const featuredBooks = [
    {
      id: 1,
      title: "O Algoritmo da Imaginação",
      author: "Ana Luz Santos",
      price: 49.9,
      coverImage:
        "https://via.placeholder.com/150x200/3498db/ffffff?text=Algoritmo",
      rating: 4.5,
      tags: ["Ficção Científica", "Tecnologia"],
    },
    {
      id: 2,
      title: "Conexões Invisíveis",
      author: "Marcos Silva",
      price: 39.9,
      coverImage:
        "https://via.placeholder.com/150x200/e74c3c/ffffff?text=Conexões",
      rating: 4.8,
      tags: ["Romance", "Tecnologia"],
    },
    {
      id: 3,
      title: "Além do Código",
      author: "Julia Mendes",
      price: 55.9,
      coverImage:
        "https://via.placeholder.com/150x200/2ecc71/ffffff?text=Código",
      rating: 4.2,
      tags: ["Biografia", "Programação"],
    },
    {
      id: 4,
      title: "Universos Paralelos",
      author: "Lucas Costa",
      price: 47.9,
      coverImage:
        "https://via.placeholder.com/150x200/f39c12/ffffff?text=Universos",
      rating: 4.7,
      tags: ["Ficção Científica", "Filosofia"],
    },
  ];

  const newReleases = [
    {
      id: 5,
      title: "A Linguagem Secreta",
      author: "Carla Prado",
      price: 42.9,
      coverImage:
        "https://via.placeholder.com/150x200/9b59b6/ffffff?text=Linguagem",
      rating: 4.0,
      tags: ["Suspense", "Linguística"],
    },
    {
      id: 6,
      title: "Revolução Digital",
      author: "Pedro Almeida",
      price: 59.9,
      coverImage:
        "https://via.placeholder.com/150x200/1abc9c/ffffff?text=Revolução",
      rating: 4.6,
      tags: ["Não-Ficção", "Tecnologia"],
    },
    {
      id: 7,
      title: "Fronteiras do Pensamento",
      author: "Sofia Torres",
      price: 37.9,
      coverImage:
        "https://via.placeholder.com/150x200/d35400/ffffff?text=Fronteiras",
      rating: 4.3,
      tags: ["Filosofia", "Psicologia"],
    },
  ];

  const categories = [
    { id: 1, name: "Ficção Científica", icon: "🚀" },
    { id: 2, name: "Romance", icon: "❤️" },
    { id: 3, name: "Biografia", icon: "👤" },
    { id: 4, name: "Tecnologia", icon: "💻" },
    { id: 5, name: "Fantasia", icon: "🔮" },
    { id: 6, name: "História", icon: "📜" },
    { id: 7, name: "Autoajuda", icon: "🌱" },
    { id: 8, name: "Mistério", icon: "🔍" },
  ];

  // Carrinho simulado
  const cartItems = [
    { id: 2, title: "Conexões Invisíveis", quantity: 1, price: 39.9 },
    { id: 5, title: "A Linguagem Secreta", quantity: 1, price: 42.9 },
  ];

  // Função para calcular o total do carrinho
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Função para renderizar estrelas com base na avaliação
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`star-${i}`} className={styles.star}>
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half-star" className={styles.starHalf}>
          ★
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-star-${i}`} className={styles.starEmpty}>
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <div className={styles.bookstoreContainer}>
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1 className={styles.logoHeading}>
            <span className={styles.bookIcon}>📚</span>
            BookVerse
          </h1>
          <p className={styles.slogan}>Onde histórias ganham vida</p>
        </div>

        <nav className={styles.mainNav}>
          <ul className={styles.navList}>
            <li className={styles.listItem}>
              <a
                href="/"
                className={`${styles.navLink} ${styles.navLinkActive}`}
              >
                Início
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="/livros" className={styles.navLink}>
                Livros
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="/categorias" className={styles.navLink}>
                Categorias
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="/autores" className={styles.navLink}>
                Autores
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="/ofertas" className={styles.navLink}>
                Ofertas
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.headerActions}>
          <div className={styles.searchBar}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Buscar livros, autores..."
            />
            <button className={styles.searchButton}>🔍</button>
          </div>

          <div className={styles.userActions}>
            <button className={styles.iconButton}>❤️</button>
            <div className={styles.cartWrapper}>
              <button className={styles.iconButton}>🛒</button>
              <span className={styles.cartCount}>{cartItems.length}</span>
            </div>
            <button className={styles.iconButton}>👤</button>
          </div>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className={styles.heroBanner}>
        <div className={styles.heroContent}>
          <h2 className={styles.heroHeading}>
            Descubra mundos extraordinários
          </h2>
          <p className={styles.heroParagraph}>
            Promoção de lançamentos com até 30% de desconto!
          </p>
          <button className={styles.ctaButton}>Ver ofertas</button>
        </div>
      </section>

      {/* FEATURED BOOKS SECTION */}
      <section className={styles.bookSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Destaques da Semana</h2>
          <a href="/destaques" className={styles.viewAll}>
            Ver todos
          </a>
        </div>

        <div className={styles.booksGrid}>
          {featuredBooks.map((book) => (
            <div key={book.id} className={styles.bookCard}>
              <div className={styles.bookCover}>
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className={styles.coverImage}
                />
                <button className={styles.quickViewButton}>Visualizar</button>
              </div>
              <div className={styles.bookInfo}>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookAuthor}>por {book.author}</p>
                <div className={styles.bookRating}>
                  {renderStars(book.rating)}
                  <span className={styles.ratingValue}>({book.rating})</span>
                </div>
                <div className={styles.bookTags}>
                  {book.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.bookPriceActions}>
                  <span className={styles.bookPrice}>
                    R$ {book.price.toFixed(2)}
                  </span>
                  <div className={styles.bookActions}>
                    <button className={styles.iconButton}>❤️</button>
                    <button className={styles.iconButton}>🛒</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className={styles.categoriesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Categorias Populares</h2>
          <a href="/categorias" className={styles.viewAll}>
            Ver todas
          </a>
        </div>

        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/categoria/${category.id}`}
              className={styles.categoryCard}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span className={styles.categoryName}>{category.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* NEW RELEASES SECTION */}
      <section className={`${styles.bookSection} ${styles.newReleases}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionHeading}>Lançamentos</h2>
          <a href="/lancamentos" className={styles.viewAll}>
            Ver todos
          </a>
        </div>

        <div className={styles.booksGrid}>
          {newReleases.map((book) => (
            <div key={book.id} className={styles.bookCard}>
              <div className={styles.bookCover}>
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className={styles.coverImage}
                />
                <button className={styles.quickViewButton}>Visualizar</button>
              </div>
              <div className={styles.bookInfo}>
                <span className={styles.newBadge}>Novo</span>
                <h3 className={styles.bookTitle}>{book.title}</h3>
                <p className={styles.bookAuthor}>por {book.author}</p>
                <div className={styles.bookRating}>
                  {renderStars(book.rating)}
                  <span className={styles.ratingValue}>({book.rating})</span>
                </div>
                <div className={styles.bookTags}>
                  {book.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.bookPriceActions}>
                  <span className={styles.bookPrice}>
                    R$ {book.price.toFixed(2)}
                  </span>
                  <div className={styles.bookActions}>
                    <button className={styles.iconButton}>❤️</button>
                    <button className={styles.iconButton}>🛒</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSCRIPTION SECTION */}
      <section className={styles.subscriptionSection}>
        <div className={styles.subscriptionContent}>
          <h2 className={styles.subscriptionHeading}>
            Fique por dentro das novidades!
          </h2>
          <p className={styles.subscriptionText}>
            Assine nossa newsletter e receba atualizações sobre novos
            lançamentos, promoções exclusivas e dicas de leitura.
          </p>
          <div className={styles.subscriptionForm}>
            <input
              type="email"
              className={styles.subscriptionInput}
              placeholder="Seu melhor e-mail"
            />
            <button className={styles.subscribeButton}>Assinar</button>
          </div>
        </div>
      </section>

      {/* SHOPPING CART */}
      <div className={styles.shoppingCart}>
        <div className={styles.cartHeader}>
          <h3 className={styles.cartHeaderTitle}>Seu Carrinho</h3>
          <button className={styles.closeButton}>✕</button>
        </div>

        <div className={styles.cartItems}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemInfo}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <div className={styles.itemDetails}>
                    <span className={styles.itemQuantity}>
                      Qtd: {item.quantity}
                    </span>
                    <span className={styles.itemPrice}>
                      R$ {item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <button className={styles.removeButton}>✕</button>
              </div>
            ))
          ) : (
            <p className={styles.emptyCartMessage}>Seu carrinho está vazio</p>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className={styles.cartFooter}>
            <div className={styles.cartTotal}>
              <span className={styles.totalLabel}>Total:</span>
              <span className={styles.totalValue}>
                R$ {calculateTotal().toFixed(2)}
              </span>
            </div>
            <button className={styles.checkoutButton}>Finalizar Compra</button>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <div className={styles.footerLogo}>
              <h2 className={styles.footerLogoTitle}>
                <span className={styles.bookIcon}>📚</span>
                BookVerse
              </h2>
              <p className={styles.footerLogoSlogan}>
                Onde histórias ganham vida
              </p>
            </div>
            <p className={styles.footerDescription}>
              A BookVerse é uma livraria online que conecta leitores ávidos com
              os melhores e mais diversos livros do mercado.
            </p>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnHeading}>Links Rápidos</h3>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLinkItem}>
                <a href="/" className={styles.footerLink}>
                  Home
                </a>
              </li>
              <li className={styles.footerLinkItem}>
                <a href="/livros" className={styles.footerLink}>
                  Catálogo
                </a>
              </li>
              <li className={styles.footerLinkItem}>
                <a href="/ofertas" className={styles.footerLink}>
                  Ofertas
                </a>
              </li>
              <li className={styles.footerLinkItem}>
                <a href="/sobre" className={styles.footerLink}>
                  Sobre Nós
                </a>
              </li>
              <li className={styles.footerLinkItem}>
                <a href="/contato" className={styles.footerLink}>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnHeading}>Categorias</h3>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLinkItem}>
                <a
                  href="/categoria/ficcao-cientifica"
                  className={styles.footerLink}
                >
                  Ficção Científica
                </a>
              </li>
              <li className={styles.footerLinkItem}>
                <a href="/categoria/romance" className={styles.footerLink}>
                  Romance
                </a>
              </li>
              <li className={styles.footerLinkItem}>
                <a href="/categoria/tecnologia" className={styles.footerLink}>
                  Tecnologia
                </a>
              </li>
              <li className={styles.footerLinkItem}>
                <a href="/categoria/fantasia" className={styles.footerLink}>
                  Fantasia
                </a>
              </li>
              <li className={styles.footerLinkItem}>
                <a href="/categoria/historia" className={styles.footerLink}>
                  História
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnHeading}>Redes Sociais</h3>
            <div className={styles.socialLinks}>
              <a
                href="https://instagram.com/bookverse"
                className={styles.socialLink}
              >
                📸 Instagram
              </a>
              <a
                href="https://tiktok.com/@bookverse"
                className={styles.socialLink}
              >
                🎵 TikTok
              </a>
              <a
                href="https://twitter.com/bookverse"
                className={styles.socialLink}
              >
                🐦 Twitter
              </a>
              <a
                href="https://youtube.com/bookverse"
                className={styles.socialLink}
              >
                🎬 YouTube
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2023 BookVerse. Todos os direitos reservados.
          </p>
          <div className={styles.footerPolicies}>
            <a href="/privacidade" className={styles.policyLink}>
              Política de Privacidade
            </a>
            <a href="/termos" className={styles.policyLink}>
              Termos de Uso
            </a>
            <a href="/cookies" className={styles.policyLink}>
              Política de Cookies
            </a>
          </div>
        </div>
      </footer>

      {/* OVERLAY */}
      <div className={styles.overlay}></div>

      {/* SCROLL TO TOP BUTTON */}
      <button className={styles.scrollTop}>↑</button>
    </div>
  );
}
