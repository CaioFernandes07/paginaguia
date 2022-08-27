const saida = document.querySelector(".cpf");

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      cpf.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 120);
  }
}

digitacao("123.456.789-10", 0);
