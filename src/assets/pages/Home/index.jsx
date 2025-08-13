import React from "react";
import style from "./home.module.css";
function Home() {
  return (
    <>
      <header>
        <div>
          <nav>
            <img src="./src/assets/img/logo.png" alt="logo" />
            <h1>alaga natal</h1>
            <a href="./src/page/login/login.html">
              <button class="login-buttonn">LOGIN</button>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <div class="form-search">
          <form action="">
            <i class="bi bi-search"></i>
            <input
              type="text"
              name="buscar"
              id="buscar"
              placeholder="Digite o bairro ou rua"
            />
            <button>
              <i class="bi bi-filter-right"></i>
            </button>
          </form>
        </div>

        <h2>buscas populares</h2>

        <div class="popular-search">
          <div>
            <h1>Causas Comuns de alagamentos urbanos</h1>
          </div>
          <div>
            <h1>Impactos dos Alagamentos na Saúde Pública</h1>
          </div>
          <div>
            <h1>Medidas Preventivas Contra Alagamentos</h1>
          </div>
        </div>

        <div class="post">
          <img src="./src/assets/img/alagamento.png" alt="alagamento" />
          <span>Impactos dos Alagamentos na Saúde Pública</span>
          <span>Medidas Preventivas Contra Alagamentos</span>
          <p>Chuva causa alagamentos em ruas e avenidas de Natal</p>
        </div>

        <button>
          <a href="./src/page/postagem/postagem.html">saiba mais</a>
        </button>
      </main>

      <footer>
        <p>©️Todos os direitos reservados</p>
      </footer>
    </>
  );
}
 export default Home