import React from "react";
import style from "./home.module.css";
function login() {
  return (
    <> 
    <header>
    <!-- Inicio do cabeçalho -->
      <div class="container">
        <img
          class="logo"
          src="../../assets/img/logo.png"
          alt="logotipo composto por uma letra 'A' maiúscula estilizada na cor preta, com uma forma ondulada azul atravessando o centro da letra."
        />
        <h1>Alaga Natal</h1>
      </div>
      <!-- Fim do cabeçalho -->
    </header>
    <main>
        <!-- Inicio card de login -->
        <div class="card-login">
            <form action="">
                <label for="email"><i class="bi bi-envelope"></i>E-mail:</label>
                <input type="email" name="email" id="email">
                <label for="password"><i class="bi bi-shield-lock"></i>Senha:</label>
                <input type="password" name="password" id="password">
                <button type="submit" class="login-button"><a href="../postagem/postagem.html">Login</a></button>
            </form>
        </div>
        <div class="reset-password">
            <a href="../cadastro/cadastro.html">Não tem uma conta? Clique aqui</a>
        </div>
        <!-- Fim card login -->
    </main>
    <!-- Inicio footer -->
    <footer>
        <p>©️Todos os direitos reservados</p>
    </footer>
    <!-- Fim do footer -->

    <div vw class="enabled">
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>
  <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
  <script>
    new window.VLibras.Widget('https://vlibras.gov.br/app');
  </script></>
  );
  }

  export default login