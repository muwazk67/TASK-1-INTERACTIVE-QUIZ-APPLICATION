const questions = [
    {
        question: "What does JS stand for?",
        options: ["Java Source", "JavaScript", "Just Script", "JScript"],
        answer: "JavaScript"
    },
    {
        question: "Which symbol is used for comments?",
        options: ["//", "##", "<!-- -->", "**"],
        answer: "//"
    },
    {
        question: "Which keyword declares a variable?",
        options: ["var", "int", "string", "float"],
        answer: "var"
    }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    feedbackEl.textContent = "";
    optionsEl.innerHTML = "";

    const currentQuestion = questions[currentIndex];
    questionEl.textContent = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(option);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if (selected === questions[currentIndex].answer) {
        feedbackEl.textContent = "Correct!";
        feedbackEl.className = "correct";
        score++;
    } else {
        feedbackEl.textContent = "Wrong!";
        feedbackEl.className = "wrong";
    }
    scoreEl.textContent = `Score: ${score}`;
}

nextBtn.onclick = () => {
    currentIndex++;
    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "Quiz Completed!";
        optionsEl.innerHTML = "";
        feedbackEl.textContent = `Final Score: ${score}/${questions.length}`;
        nextBtn.style.display = "none";
    }
};

loadQuestion();
