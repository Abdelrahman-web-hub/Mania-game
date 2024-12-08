const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Berlin", "Madrid", "Paris", "Rome"],
      correct: 2,
    },
    {
      question: "What is 5 + 3?",
      answers: ["5", "8", "12", "7"],
      correct: 1,
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 2,
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answers: ["Shakespeare", "Hemingway", "Austen", "Tolstoy"],
      correct: 0,
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");
  const scoreEl = document.getElementById("score");
  
  function loadQuestion() {
    const current = questions[currentQuestion];
    questionEl.textContent = current.question;
  
    answersEl.innerHTML = "";
    current.answers.forEach((answer, index) => {
      const btn = document.createElement("button");
      btn.textContent = answer;
      btn.onclick = () => checkAnswer(index);
      answersEl.appendChild(btn);
    });
  
    nextBtn.disabled = true;
  }
  
  function checkAnswer(selected) {
    const correct = questions[currentQuestion].correct;
    if (selected === correct) {
      score++;
    }
    nextBtn.disabled = false;
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      displayResults();
    }
  }
  
  function displayResults() {
    questionEl.textContent = `Quiz Complete!`;
    answersEl.innerHTML = `Your score: ${score} out of ${questions.length}`;
    nextBtn.style.display = "none";
    scoreEl.textContent = "";
  }
  
  nextBtn.addEventListener("click", nextQuestion);
  
  // Initialize quiz
  loadQuestion();
  