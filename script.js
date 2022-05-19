console.log("trivia");
const questionText = document.querySelector("#question")
const answerContainer = document.querySelector("#answer-container")
let score = 0
const scoreText = document.querySelector('#score')

// let btn = document.createElement("button");
// btn.innerHTML = "Next";
// document.body.appendChild(btn);
// // btn = document.nextQuestion()

console.log(answerContainer);
console.log(questionText);
const questions = [
    {
        question : "Whos is first president in Us ?",
        answers : ["George Washington", "Benjamin Franklin", "Barrack H. Obama"],
        correct : 0
    },
    {
        question : "What color is sky?",
        answers : ["Red", "Blue", "Black"],
        correct : 1
    },
    {
        question : "2 + 2 = ?",
        answers : ["2", "3", "4"],
        correct : 2
    },
    {
        question : "Where is the Empire State Building ?",
        answers : ["Seoul", "CanCun", "New York"],
        correct : 2
    },
    {
        question : "Who is SpongeBob’s best friend?",
        answers : ["Donald Jr Trump", "Patrick Star", "Micheal Jackson"],
        correct : 4
    },
    {
        question : "What is the name of Harry Potter’s father?",
        answers : ["John Potter", "Alex Potter", "James Potter"],
        correct : 2
    },
    {
        question : "Which Disney princess lost her shoe?",
        answers : ["Cinderella", "Mickey", "Garfield"],
        correct : 6
    },
    {
        question : "Who is the real Spider-Man ?",
        answers : ["tobey maguire", "Andrew Garfield", "Jim Carey"],
        correct : 0
    },
    {
        question : "How many states are in the United States of America?",
        answers : ["44", "45", "50"],
        correct : 2
    },
    {
        question : "How many rings are there in the Olympics logo?",
        answers : ["3", "5", "6"],
        correct : 1
    }  
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
        console.log(`This is ${correctAnswer}`)
        console.log('element');
        score ++ ;
        scoreText.innerText = `Score: ${score}`
    } else {
        console.log('incorrectAnswer')
    }
    nextQuestion();
}

function nextQuestion () {
    questionNumber ++;
    if(!lastQuestion() ){
        const answerText = document.querySelectorAll('p');
        answerText.forEach(answer => {
            answer.remove();
        })
        displayQuestion();
        console.log("nextQuestion");
    } else { 
        scoreText.innerText = `Score: ${score}`
        console.log(score)
    }
    
}
function lastQuestion () {
    let lastQuestion = questions.length
    if ( lastQuestion === questionNumber ) {
        console.log("Game is over");
        return true ;
    }
}

function timer() {
    setTimeout(setAlert, 4000);
    console.log(timer)
}

