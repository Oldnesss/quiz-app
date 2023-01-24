const quizData = [
  {
    question:
      "В каком году Титаник утонул в Атлантическом океане 15 апреля во время своего первого плавания из Саутгемптона?",
    a: "1910",
    b: "1916",
    c: "1912",
    d: "1917",
    correct: "c", //'1912'
  },
  {
    question: "В каком году был выпущен Крестный отец?",
    a: "1972",
    b: "1999",
    c: "1985",
    d: "1975",
    correct: "a", //'1972'
  },
  {
    question:
      "Какой актер выиграл лучшего актера Оскара за фильмы «Филадельфия» (1993) и «Форрест Гамп» (1994)?",
    a: "Том Bэнкс0",
    b: "Том Хэнкс",
    c: "Том Мэнкс",
    d: "Том Кэнкс",
    correct: "b", //'Том Хэнкс'
  },
  {
    question:
      "Какая актриса сыграла Мэри Поппинс в фильме 1964 года Мэри Поппинс?",
    a: "Гули Эндрю",
    b: "Джули Эндрю",
    c: "Юли Эндрю",
    d: "Тули Эндрю",
    correct: "b", //'Джули Эндрю'
  },
  {
    question: "В каком классическом фильме 1963 года появился Чарльз Бронсон?",
    a: "The Great Escape 1",
    b: "The Great Escape 2",
    c: "The Great Escape 3",
    d: "The Great Escape",
    correct: "d", // 'The Great Escape'
  },
  {
    question:
      "В каком фильме 1995 года Сандра Баллок сыграла Анжелу Беннетт - Борьба с Эрнестом Хемингуэем, Сеть или 28 дней?",
    a: "Грязная",
    b: "Чистая",
    c: "Измазанная",
    d: "Помытая",
    correct: "b", //'Чистая'
  },
];
const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see the answer
  const answer = getSelected();

  console.log(answer);

  // getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answeres correctly at ${score}/${quizData.length} questions. </h2> 
      
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
