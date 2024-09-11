import React from "react";
import "./home.component.css";
import NavbarComponent from "../navbar/navbar.component";
import FooterComponent from "../footer/footer.component";

const HomeComponent = () => {
  return (
    <div className="bg-light text-dark">
      <NavbarComponent />

      <header className="header">
        <h1 className="header-title">Publicações recentes</h1>
      </header>

      <main className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <article className="post">
              <h2 className="post-title">
                Black Myth: Wukong será o jogo do ano? Aproveite para comprar
                Wukong no Hype!
              </h2>

              <p className="post-date">11/09/24</p>
              <img
                src="https://hype.games/blog/wp-content/uploads/2024/08/comprar-wukong.webp"
                alt="Notícia"
                className="post-image"
              />
              <p className="post-content">
                Chegou a hora de comprar Wukong, ou melhor, Black Myth: Wukong,
                que pode ser o lançamento do ano! Se você adora um desafio e
                está em busca do próximo jogo que vai fazer você gritar com a
                tela (e talvez até lançar o controle pela sala), Black Myth:
                Wukong é o seu novo vício. Lançado essa semana, o jogo já chegou
                chutando a porta e se candidatando ao prêmio de Jogo do Ano de
                2024.
              </p>
              <a href="#read-more" className="btn btn-primary">
                Leia Mais
              </a>
            </article>
          </div>

          <aside className="col-md-4 sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">Categorias</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#category1">Categoria 1</a>
                </li>
                <li>
                  <a href="#category2">Categoria 2</a>
                </li>
                <li>
                  <a href="#category3">Categoria 3</a>
                </li>
              </ul>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">Postagens Recentes</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#post1">Postagem Recente 1</a>
                </li>
                <li>
                  <a href="#post2">Postagem Recente 2</a>
                </li>
                <li>
                  <a href="#post3">Postagem Recente 3</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <FooterComponent />
    </div>
  );
};

export default HomeComponent;
