// Quiz data
const questions = [
    {
        question: "Where did we have our first date?",
        choices: ["Amsterdam", "Croatia", "Frankfurt", "San Francisco"],
        answer: "Amsterdam"
    },
    {
        question: "What is my favorite bread?",
        choices: ["Bagel", "Pita", "Ciabatta", "Focaccia"],
        answer: "Bagel"
    },
    {
        question: "You are my --- ?",
        choices: ["Everything", "Sesame", "Squishy", "Feli"],
        answer: "Sesame"
    },
    {
        question: "What is my favourite food when I am sick?",
        choices: ["Bread", "Oats", "Lentil Soup", "Tomato Soup"],
        answer: "Lentil Soup"
    },
    {
        question: "What is my favourite chocolate?",
        choices: ["Lindt", "Kit-Kat", "Ghirardelli", "Zotter"],
        answer: "Zotter"
    },
    {
        question: "Which photo did I say is my favorite of you?",
        choices: ["Beach photo", "Fynn photo", "Sunset photo", "Golden Gate Photo"],
        answer: "Fynn photo"
    }
    ,
    {
        question: "My favorite mode of transportation?",
        choices: ["Car", "Bus", "Train", "Plane"],
        answer: "Train"
    },
    {
        question: "My first German word?",
        choices: ["Arschloch", "Schatzi", "Bitte", "Hallo"],
        answer: "Arschloch"
    }
    ,
    {
        question: "My favorite color?",
        choices: ["Black", "Pink", "Purple", "Blue"],
        answer: "Blue"
    },
    {
        question: "My favorite fast food place?",
        choices: ["McDonald's", "Nick the Greek", "Five Guys", "Chipotle"],
        answer: "Nick the Greek"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to start the quiz
function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const choicesContainer = document.getElementById('choices-container');
    choicesContainer.innerHTML = '';

    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.classList.add('choice-btn');
        button.innerText = choice;
        button.onclick = () => checkAnswer(choice);
        choicesContainer.appendChild(button);
    });
}

// Function to check the answer
function checkAnswer(selectedChoice) {
    const currentQuestion = questions[currentQuestionIndex];
    const nextButton = document.getElementById('next-btn');

    if (selectedChoice === currentQuestion.answer) {
        score++;
    }

    // Disable choice buttons after selecting an answer
    document.querySelectorAll('.choice-btn').forEach(button => button.disabled = true);

    nextButton.style.display = 'block';  // Show next button
}

// Function to load the next question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById('next-btn').style.display = 'none'; // Hide next button
    } else {
        showResult();
    }
}

// Function to show the final result
function showResult() {
    const quizSection = document.getElementById('quiz');
    const resultSection = document.getElementById('result');
    const scoreElement = document.getElementById('score');
    const resultMessage = document.getElementById('result-message');

    quizSection.classList.add('hidden');
    resultSection.classList.remove('hidden');

    scoreElement.innerText = score;

    if (score === 9) {
        resultMessage.innerText = "You know us so well! You're amazing!";
    } else if (score >= 5) {
        resultMessage.innerText = "Pretty good! You know us well.";
    } else {
        resultMessage.innerText = "We’ve got some memories to refresh, but it's okay!";
    }
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('result').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');

    showQuestion();
}

// Initialize the quiz
document.addEventListener('DOMContentLoaded', () => {
    showQuestion();
});

