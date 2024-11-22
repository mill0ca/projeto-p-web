const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

const titulopagina = document.getElementById("titulo");
    titulo.onmouseover = function() {
      titulo.style.color = "pink"; 
    }

    titulo.onmouseout = function() {
      titulo.style.color = "White";
    }

// Mensagens para o card dinâmico
const messages = [
    { title: "Bem-vindo!", text: "Esperamos que você goste do nosso projeto!" },
    { title: "Socorro", text: "Queremos tirar 10 nesse trabalho!!!!!" },
    { title: "Será que Tranco?", text: "Calma, Fica pior!" },
    { title: "Apelo!", text: "Chega 2028 pelo amor de deus, quero me formar!" },
    { title: "Dica", text: "Não deixe trabalho que envolve programação para ultima hora!" },
  ];
  
  // Seleciona o card dinâmico e seus elementos
  const card = document.getElementById("dynamic-card");
  const cardTitle = document.getElementById("card-title");
  const cardText = document.getElementById("card-text");
  
  // Variável para controlar a mensagem atual
  let currentMessageIndex = 0;
  
  // Função para mudar a mensagem do card dinâmico
  function changeMessage() {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length; // Alterna o índice
    cardTitle.textContent = messages[currentMessageIndex].title; // Atualiza o título
    cardText.textContent = messages[currentMessageIndex].text; // Atualiza o texto
  }
  
  // Adiciona o evento de mudança de mensagem ao passar o mouse
  card.addEventListener("mouseover", changeMessage);
  
