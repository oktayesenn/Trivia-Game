console.log("trivia");
const questionText = document.querySelector("#question")
const answerContainer = document.querySelector("#answer-container")
console.log(answerContainer);
console.log(questionText);
const questions = [
    {
        question : "Whos i first president in Us ?",
        answers : ["George Washington", "Benjamin Franklin", "Barrack H. Obama"],
        correct : 0
    },
    {
        question : "What color is sky?",
        answers : ["Red", "Blue", "Black"],
        correct : 1
    },
    
]
let questionNumber = 0


function displayQuestion () {
    questionText.innerText = questions[questionNumber].question
    questions[questionNumber].answers.forEach((answer, index) => {
        let p = document.createElement("p")
        p.innerText = answer
        answerContainer.appendChild(p)
        p.id = index
        p.addEventListener('click', checkAnswers)
        
    })


}
displayQuestion();

function checkAnswers (event) {
    let elementID = parseInt(event.target.id)
    let correctAnswer = questions[questionNumber].correct
    console.log(event.target.id);
    if (correctAnswer === elementID ) {
        console.log('correctAnswer')
    } 
}

function nextQuestion () {
    console.log("nextQuestion");
}

