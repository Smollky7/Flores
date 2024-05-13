window.onload = () => {
  document.body.classList.remove("container");
  
  // Seleciona o elemento da mensagem de amor
  const loveMessage = document.querySelector('.love-message');
  
  // Define uma função para adicionar a classe de animação à mensagem de amor
  const showLoveMessage = () => {
    loveMessage.classList.add('show');
  };
  
  // Espera 3.8 segundos antes de mostrar a mensagem de amor
  setTimeout(showLoveMessage, 3800);
  
  // Seleciona o botão de voltar
  const backButton = document.querySelector('.back-to-index');
  
  // Define uma função para mostrar o botão de voltar após um certo tempo
  const showBackButton = () => {
    backButton.style.opacity = "1";
  };
  
  // Espera 3.8 segundos antes de mostrar o botão de voltar
  setTimeout(showBackButton, 3800);
  
  // Reproduz a música a partir do minuto desejado
  const audio = document.getElementById('myAudio');
  audio.currentTime = 40;
  audio.play();
};

