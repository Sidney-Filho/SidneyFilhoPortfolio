document.addEventListener("DOMContentLoaded", function() {
  // Selecione todos os elementos que você deseja animar
  const elementos = document.querySelectorAll('.elemento');

  // Função para animar os elementos
  function animateElements() {
      elementos.forEach((elemento) => {
          elemento.classList.add('aparecer');
      });
  }

  // Chame a função de animação após um pequeno atraso (por exemplo, 1 segundo)
  setTimeout(animateElements, 100);
});

