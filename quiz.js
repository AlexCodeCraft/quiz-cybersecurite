// Liste des questions du quiz
const questions = [
    {
        question: "Que signifie le terme 'phishing' ?",
        choices: [
            "Un type de cyberattaque visant à tromper quelqu'un pour qu'il partage des informations sensibles.",
            "Une méthode de pêche pour récupérer des données.",
            "Un outil pour chiffrer les e-mails."
        ],
        answer: 0
    },
    {
        question: "Quelle est la meilleure pratique pour créer un mot de passe ?",
        choices: [
            "Utiliser votre date de naissance.",
            "Utiliser un mot de passe complexe avec des lettres, chiffres et symboles.",
            "Utiliser le même mot de passe partout."
        ],
        answer: 1
    },
    {
        question: "Que devez-vous vérifier avant de cliquer sur un lien dans un e-mail ?",
        choices: [
            "Si l'email semble officiel.",
            "Si l'expéditeur est quelqu'un que vous connaissez.",
            "Si l'URL pointe vers un site de confiance."
        ],
        answer: 2
    },
    {
        question: "Pourquoi les réseaux Wi-Fi publics peuvent être dangereux ?",
        choices: [
            "Ils sont souvent surveillés par les autorités.",
            "Ils permettent aux attaquants de voler vos données si elles ne sont pas chiffrées.",
            "Ils ralentissent votre connexion."
        ],
        answer: 1
    },
    {
        question: "Quel outil permet de tester la sécurité d'un mot de passe ?",
        choices: [
            "Une clé USB.",
            "Un gestionnaire de mots de passe.",
            "Un logiciel de pentesting."
        ],
        answer: 2
    }
];

// Variables pour le quiz
let currentQuestionIndex = 0;
let score = 0;

// Fonction pour afficher une question
function showQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    const question = questions[currentQuestionIndex];

    // Effacer l'ancien contenu
    quizContainer.innerHTML = "";

    // Afficher la question
    const questionElement = document.createElement("h2");
    questionElement.textContent = question.question;
    quizContainer.appendChild(questionElement);

    // Afficher les choix
    question.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => checkAnswer(index);
        quizContainer.appendChild(button);
    });
}

// Fonction pour vérifier la réponse
function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestionIndex];

    if (selectedAnswer === question.answer) {
        score++;
        alert("Bonne réponse !");
    } else {
        alert(`Mauvaise réponse. La bonne réponse était : ${question.choices[question.answer]}`);
    }

    // Passer à la question suivante ou afficher le score
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Fonction pour afficher le score final
function showScore() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <h2>Quiz terminé !</h2>
        <p>Votre score est de ${score} sur ${questions.length}.</p>
    `;

    // Proposer de rejouer
    const replayButton = document.createElement("button");
    replayButton.textContent = "Rejouer";
    replayButton.onclick = resetQuiz;
    quizContainer.appendChild(replayButton);
}

// Fonction pour réinitialiser le quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

// Lancer le quiz au chargement de la page
window.onload = showQuestion;
