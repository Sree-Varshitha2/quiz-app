const questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: "Delhi"
    },
    {
        question: "Which language runs in browser?",
        options: ["Python", "Java", "C++", "JavaScript"],
        answer: "JavaScript"
    },
    {
        question: "2 + 2 = ?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = "";
    feedbackEl.innerText = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(btn, option);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(button, selected) {
    const correct = questions[currentQuestion].answer;

    if (selected === correct) {
        button.classList.add("correct");
        feedbackEl.innerText = "Correct!";
        score++;
    } else {
        button.classList.add("wrong");
        feedbackEl.innerText = "Wrong!";
    }

    Array.from(optionsEl.children).forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === correct) {
            btn.classList.add("correct");
        }
    });
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    document.querySelector(".quiz-container").classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.innerText = score + " / " + questions.length;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultBox.classList.add("hidden");
    document.querySelector(".quiz-container").classList.remove("hidden");
    loadQuestion();
}

loadQuestion();