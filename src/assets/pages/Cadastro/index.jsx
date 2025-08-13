import React from "react";
import style from "./home.module.css";
function Cadastro() {
  return (
    <>
      <header>
        {/* <!-- Inicio do cabeçalho --> */}
        <div class="container">
          <img
            class="logo"
            src="../../assets/img/logo.png"
            alt="logotipo composto por uma letra 'A' maiúscula estilizada na cor preta, com uma forma ondulada azul atravessando o centro da letra."
          />
          <h1>Alaga Natal</h1>
        </div>
        {/* <!-- Fim do cabeçalho --> */}
      </header>
      <main>
        {/* <!-- Inicio card de cadastro --> */}
        <div class="card-register">
          <form action="">
            <label for="email">
              <i class="bi bi-envelope"></i>E-mail:
            </label>
            <input type="email" name="email" id="email" />
            <label for="password">
              <i class="bi bi-shield-lock"></i>Senha:
            </label>
            <input type="password" name="password" id="password" />
            <label for="password">
              <i class="bi bi-shield-lock"></i>Confirmar senha:
            </label>
            <input type="password" name="password" id="password" />
            <button type="submit" class="register-button">
              Cadastrar
            </button>
          </form>
        </div>
        <div class="reset-password">
          <a href="../login/login.html">Já tem uma conta? Clique aqui</a>
        </div>
        {/* <!-- Fim card cadastro --> */}
      </main>
      {/* <!-- Inicio footer --> */}
      <footer>
        <p>©️Todos os direitos reservados</p>
      </footer>
      {/* <!-- Fim do footer --> */}
    </>
  );
}
export default Cadastro