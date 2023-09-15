// Obtém os botões e os containers de tecnologia
  const buttons = document.querySelectorAll('.botao-skills button');
  const technologyContainers = document.querySelectorAll('.container-technology');

  // Adiciona um ouvinte de clique para cada botão
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Remove a classe 'active-button' de todos os botões
      buttons.forEach(btn => {
        btn.classList.remove('active-button');
      });

      // Adiciona a classe 'active-button' ao botão clicado
      button.classList.add('active-button');

      // Esconde todos os containers de tecnologia
      technologyContainers.forEach(container => {
        container.style.display = 'none';
      });

      // Verifica qual botão foi clicado
      if (button.id === 'design-btn') {
        // Mostra apenas o container do Figma
        technologyContainers[4].style.display = 'block'; // Figma
      } else if (button.id === 'programacao-btn') {
        // Mostra apenas os containers HTML, CSS e JavaScript
        technologyContainers[0].style.display = 'block'; // HTML
        technologyContainers[1].style.display = 'block'; // CSS
        technologyContainers[2].style.display = 'block'; // JavaScript
      } else if (button.id === 'tecno-btn') {
        technologyContainers[3].style.display = 'block'; //Github
        technologyContainers[5].style.display = 'block'; //Git
        technologyContainers[6].style.display = 'block'; //WordPress
      } else if (button.id === 'language-btn') {
        technologyContainers[7].style.display = 'block'
        technologyContainers[8].style.display = 'block'
        technologyContainers[9].style.display = 'block'
      } else if (button.id === 'extra-btn') {
        technologyContainers[10].style.display = 'block'
      }
      else {
        // Se não for o botão "Design" ou "Programação", mostra a tecnologia correspondente ao botão clicado
        technologyContainers[index].style.display = 'block';
      }
    });
  });












