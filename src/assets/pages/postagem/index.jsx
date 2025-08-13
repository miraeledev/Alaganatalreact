import React from "react";
import style from "./home.module.css";
function postagem() {
  return (
    <> 
      <header>
      <img
        class="logo"
        src="../../assets/img/logo.png"
        alt="logotipo composto por uma letra 'A' maiúscula estilizada na cor preta, com uma forma ondulada azul atravessando o centro da letra."
      />
    </header>
    <main>
      <form action="">
        <label for="Titulo">Titulo:</label>
        <input
          type="text"
          name="Titulo"
          id="Titulo"
          placeholder="Digite Aqui"
        />

        <label for="Descrição">Descrição:</label>
        <textarea name="" id=""
        name="Descrição"
          id="Descrição"
          placeholder="Digite Aqui"
        >
        </textarea>
        <label for="file">Upload Imagem:</label>
        <div class="input-file-row">
          <label for="file" class="input-file-btn">
            <i class="bi bi-upload"></i>
            <span>Selecionar arquivo</span>
          </label>
          <input type="file" name="file" id="file" />
        </div>
      </form>
      <button type="button">
        <a href="../comentario/comentario.html">Enviar</a>
      </button>
    </main>
    <div vw class="enabled">
      <div vw-access-button class="active"></div>
      <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
      </div>
    </div>
    <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
    <footer>©️Todos os direitos reservados.</footer>
    );
    }
export default postagem;