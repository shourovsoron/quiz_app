const questions= [
    {
        question: "Which is largest animal in the world?",
        answers: [
            {text: "Shark", correct: false },
            {text: "Blue Whale", correct: true },
            {text: "Elephant", correct: false },
            {text: "Giraffe", correct: false },
        ]
    },
    
    {
        question: "Which is the capital city of Bangladesh?",
        answers: [
            {text: "Shylet", correct: false },
            {text: "Barishal", correct: false },
            {text: "Dhaka", correct: true },
            {text: "Kushtia", correct: false },
        ]
    },
    {
        question: "Which is largest animal in the world?",
        answers: [
            {text: "Shark", correct: false },
            {text: "Blue Whale", correct: true },
            {text: "Elephant", correct: false },
            {text: "Giraffe", correct: false },
        ]
    },
    
    {
        question: "Which is the capital city of Bangladesh?",
        answers: [
            {text: "Shylet", correct: false },
            {text: "Barishal", correct: false },
            {text: "Dhaka", correct: true },
            {text: "Kushtia", correct: false },
        ]
    },

    {
        question: "Which is largest animal in the world?",
        answers: [
            {text: "Shark", correct: false },
            {text: "Blue Whale", correct: true },
            {text: "Elephant", correct: false },
            {text: "Giraffe", correct: false },
        ]
    }

];

console.log(questions);

const questionElement = document.getElementById("question");
const AnsElement = document.getElementById("answers");
const NextBtn = document.getElementById("nxt-btn");

let questionIndex = 0;
let score = 0;

function startQuiz(){
    questionIndex = 0;
    score = 0;
    NextBtn.innerText="Next"
    NextBtn.style.display="none";
    showQuiz();

}

function showQuiz(){
    let CurrentQuestion= questions[questionIndex]
    let questionNumber =  questionIndex+1;

    questionElement.innerHTML=`${questionNumber}.${CurrentQuestion.question} `
    AnsElement.innerHTML= `${CurrentQuestion.answers.map(function(ans){
        return `<button correct="${ans.correct}" onclick="CheckAns(this)" class="ans">${ans.text}</button>`

    }).join("")}`
}


function CheckAns(item){
    let ans=item.getAttribute('correct') === "true";
        if(ans){
            item.classList.add("correct");
            score++;
    
        }else{item.classList.add("wrong");}


        Array.from(AnsElement.children).forEach((btn)=>{
            if(btn.getAttribute('correct') === "true"){
                btn.classList.add("correct");

            }
            btn.disabled = true;
            NextBtn.style.display ="inline-block"

        })

}

NextBtn.addEventListener('click', ()=>{
    if(questionIndex < questions.length){

        questionIndex++;
        if(questionIndex < questions.length){
            showQuiz();
        }else{
            showscore();
        }

    }else{
        startQuiz();
    }

})


function showscore(){
    AnsElement.innerHTML="";
    questionElement.innerHTML=`Your Score ${score} out of ${questions.length}`
    NextBtn.innerText="Play Again";

    

}

startQuiz();