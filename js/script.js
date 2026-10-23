const quizData = [
    {
        question: "What is Souta studying?",
        options: ["Pediatrics", "Geography", "Linguistics", "Programming"],
        answer: "Pediatrics"
    },
    {
        question: "Who is honeydew_627?",
        options: ["Karasu", "Andrew", "Kanro", "Ray"],
        answer: "Kanro"
    },
    {
        question: "How does do I sign my blogposts?",
        options: ["Admin K", "A G-D", "Souta", "AGD"],
        answer: "AGD"
    },
    {
        question: "Out of all the people listed in this question, who is the only one who doesn't have any paranormal abilities?",
        options: ["Souta", "Andrew", "Kanro", "Karasu"],
        answer: "Souta"
    },
    {
        question: "What is the English translation of this island?",
        options: ["Watermenlon Island", "Watermelon Island", "Melon Island", "Materwelon Island"],
        answer: "Watermelon Island"
    },
    {

        question: "What tape was found in Souta's house?",
        options: ["Lime-3", "Violet-3", "Violet-2", "Purple-2"],
        answer: "Violet-2"
    },
    {
        question: "What types of flowers have overgrown the previous island?",
        options: ["Lemon flowers", "Unknown citrus flowers", "Orange flowers", "Clementine flowers"],
        answer: "Unknown citrus flowers"
    },
    {
        question: "What is the name of the child who washed up on shore?",
        options: ["Gardenia White", "Gardenia Morris", "Bay White", "Bay Morris"],
        answer: "Gardenia White"
    },
    {
        question: "What was the problem that I was solving that stopped me from investigating Rooster Island?",
        options: ["Magical flowers", "A black hole", "A dark lord was stealing faces", "Someone got murdered and somehow got reincarnated"],
        answer: "Magical flowers"
    }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultText = document.getElementById("congrats");
const magicButton = document.getElementById("magic")

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;

    if (selectedButton.innerText === answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    if (score === quizData.length) {
        resultText.innerHTML = "Congrats. As promised, the surprise.";
        magicButton.style.display = "inline";
    }
    else if (score === 0) {
        resultText.innerHTML = "Refresh the page. I'm sure you actually know the answers.";
    }
    else {
        resultText.innerHTML = "Refresh the page and try again. The questions aren't <i>that</i> hard."
    }
}

showQuestion();