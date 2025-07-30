
let currentPage = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
  pages[currentPage].classList.remove("active");
  currentPage++;
  if (currentPage < pages.length) {
    pages[currentPage].classList.add("active");
  }
}

const quizData = [
  {
    question: "What’s his go-to comfort food?",
    options: ["Maggi", "Chicken roll", "Paneer tikka", "Anything with cheese, tbh"],
    answer: "Anything with cheese, tbh"
  },
  {
    question: "What’s the weirdest thing he’s done at 2am?",
    options: ["Made a website for you", "Slept on a Discord call", "Ordered shampoo on Swiggy", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "If he had to teleport to one place right now, where would he go?",
    options: ["His bed", "Mars", "Your arms", "Whatever's closest to pani puri"],
    answer: "Your arms"
  },
  {
    question: "What’s the one thing he always says after being dumb?",
    options: ["Trust the process", "Shut up, it worked didn’t it", "You still love me tho", "...oops"],
    answer: "You still love me tho"
  },
  {
    question: "What song makes him think of you?",
    options: ["Until I Found You", "Teenage Dream", "No one. Just you humming", "Whichever one’s stuck in his head at 3am"],
    answer: "No one. Just you humming"
  }
];


function loadQuiz() {
  const container = document.getElementById("quiz-container");
  quizData.forEach((q, i) => {
    const qBlock = document.createElement("div");
    qBlock.innerHTML = `<p><strong>${q.question}</strong></p>` + q.options.map(opt => `
      <label><input type="radio" name="q${i}" value="${opt}"> ${opt}</label><br>
    `).join("");
    container.appendChild(qBlock);
  });
}

function submitQuiz() {
  let score = 0;
  quizData.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  const result = document.getElementById("quiz-result");
  if (score === quizData.length) {
    result.innerText = `Perfect score! You know me *way* too well.`;
  } else if (score >= 3) {
    result.innerText = `You got ${score}/${quizData.length}. Not bad, specialist!`;
  } else {
    result.innerText = `You got ${score}/${quizData.length}... we need to talk.`;
  }
}


window.onload = loadQuiz;
