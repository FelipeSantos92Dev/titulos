// app/page.js
import Carousel from "./components/carroussel";
import styles from "./page.module.css";

export default function Home() {
  // Dados de exemplo para o carrossel
  const carouselItems = [
    {
      id: 1,
      title: "Next.js 15: O que há de novo?",
      description:
        "Explore as novas funcionalidades e melhorias de desempenho na mais recente versão do Next.js.",
      image: "https://picsum.photos/id/1/800/450",
      date: "05 Abr 2025",
    },
    {
      id: 2,
      title: "Otimizando a Performance no Next.js",
      description:
        "Aprenda técnicas avançadas para otimizar seu aplicativo Next.js e melhorar a experiência do usuário.",
      image: "https://picsum.photos/id/25/800/450",
      date: "02 Abr 2025",
    },
    {
      id: 3,
      title: "Server Components: Um Guia Completo",
      description:
        "Entenda como os Server Components revolucionam o desenvolvimento de aplicações React e Next.js.",
      image: "https://picsum.photos/id/28/800/450",
      date: "30 Mar 2025",
    },
    {
      id: 4,
      title: "CSS Modules: A Abordagem Moderna",
      description:
        "Descubra por que os CSS Modules são a escolha ideal para estilizar seus componentes no Next.js.",
      image: "https://picsum.photos/id/42/800/450",
      date: "27 Mar 2025",
    },
    {
      id: 5,
      title: "API Routes no Next.js 15",
      description:
        "Um guia passo a passo para criar e otimizar rotas de API no Next.js para seu backend.",
      image: "https://picsum.photos/id/48/800/450",
      date: "25 Mar 2025",
    },
    {
      id: 6,
      title: "Integrando Next.js com CMS Headless",
      description:
        "Aprenda a conectar seu aplicativo Next.js com as melhores plataformas de CMS Headless do mercado.",
      image: "https://picsum.photos/id/60/800/450",
      date: "22 Mar 2025",
    },
    {
      id: 7,
      title: "Animações Avançadas no React",
      description:
        "Técnicas e bibliotecas para criar animações impressionantes em sua aplicação Next.js.",
      image: "https://picsum.photos/id/65/800/450",
      date: "20 Mar 2025",
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Bem-vindo ao nosso Blog</h1>
        <p className={styles.description}>
          Conteúdos exclusivos sobre desenvolvimento web e as últimas tendências
          em tecnologia.
        </p>

        <section className={styles.featuredSection}>
          <h2 className={styles.sectionTitle}>Artigos em Destaque</h2>
          <Carousel items={carouselItems} />
        </section>

        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Sobre Nós</h2>
          <p className={styles.sectionText}>
            Somos uma plataforma dedicada a compartilhar conhecimento sobre
            desenvolvimento web, com foco especial em tecnologias modernas como
            Next.js, React e muito mais. Nossa missão é ajudar desenvolvedores a
            criarem aplicações web mais rápidas, acessíveis e escaláveis usando
            as melhores práticas da indústria.
          </p>
        </section>
      </div>
    </main>
  );
}
