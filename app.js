// Dicas de Saúde
const healthTips = [
    { title: "Beba Água", description: "Beber 8 copos de água por dia ajuda a manter o corpo hidratado." },
    { title: "Faça Exercícios", description: "Tente fazer pelo menos 30 minutos de exercício por dia." },
    { title: "Varie os Alimentos", description: "Inclua frutas, legumes, verduras, grãos integrais, carnes magras e peixes em suas refeições." },
    { title: "Cozinhe em Casa", description: "Prepare suas próprias refeições com ingredientes frescos e controle a quantidade de sal, açúcar e gordura." },
    { title: "Evite Alimentos Processados", description: "Reduza o consumo de alimentos industrializados, ricos em sódio, açúcar e aditivos químicos." }
  ];
  
  // Carregar dicas de saúde
  function loadHealthTips() {
    const tipsContainer = document.getElementById('tipsContainer');
    healthTips.forEach(tip => {
      const tipElement = document.createElement('div');
      tipElement.innerHTML = `<h3>${tip.title}</h3><p>${tip.description}</p>`;
      tipsContainer.appendChild(tipElement);
    });
  }
  
  document.addEventListener("DOMContentLoaded", loadHealthTips);
  
  
  // Perguntas de Autoavaliação
  const questions = [
    { question: "Você está sentindo febre?", id: "fever" },
    { question: "Você tem tosse persistente?", id: "cough" },
    { question: "Sente calafrios ou suores?", id: "chills" },
    { question: "Tem dor de cabeça?", id: "headache" },
    { question: "Sente náuseas ou vômitos?", id: "nausea" },
    { question: "Tem diarreia ou prisão de ventre?", id: "digestion" },
    { question: "Percebeu perda ou ganho de peso sem motivo aparente?", id: "weight" },
    { question: "Tem dificuldade para dormir?", id: "sleep" },
    { question: "Sente-se ansioso ou deprimido?", id: "anxiety" },
    { question: "Você está sentindo cansaço excessivo?", id: "fatigue" },
    { question: "Tem notado mudanças no seu apetite?", id: "appetite" },
    { question: "Você está com tosse ou dor de garganta?", id: "cough_or_throat" },
    { question: "Está com dor no corpo ou nas articulações?", id: "body_pain" },
    { question: "Está com dificuldade para respirar?", id: "breathing" },
    { question: "Você está com a pele ou olhos amarelados?", id: "jaundice" }
  ];
  
  // Carregar o questionário de autoavaliação
  function loadQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    questions.forEach(q => {
      const questionElement = document.createElement('div');
      questionElement.innerHTML = `
        <label>${q.question}</label>
        <input type="radio" name="${q.id}" value="yes"> Sim
        <input type="radio" name="${q.id}" value="no"> Não
      `;
      quizContainer.appendChild(questionElement);
    });
  }
  
  // Avaliar o questionário
  function evaluateQuiz() {
    let score = 0;
    questions.forEach(q => {
      const answer = document.querySelector(`input[name="${q.id}"]:checked`);
      if (answer && answer.value === 'yes') {
        score++;
      }
    });
    alert(`Você respondeu 'Sim' para ${score} perguntas. Recomendamos consultar um profissional de saúde.`);
  }
  
  // Carregar dicas de saúde e questionário após o DOM ser carregado
  document.addEventListener("DOMContentLoaded", () => {
    loadHealthTips();
    loadQuiz();
  });
  function evaluateQuiz() {
    let score = 0;
    
    // Contando o número de respostas "Sim"
    questions.forEach(q => {
      const answer = document.querySelector(`input[name="${q.id}"]:checked`);
      if (answer && answer.value === 'yes') {
        score++;
      }
    });
  
    // Avaliando o número de respostas "Sim"
    if (score > 4) {
      alert(`Você respondeu 'Sim' para ${score} perguntas. Recomendamos consultar um profissional de saúde.`);
    } else {
      alert(`Você não está tão mal, mas se piorar deve consultar um médico.`);
    }
  }
