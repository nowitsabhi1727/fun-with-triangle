const quizForm=document.querySelector(".quiz-form");
const submitBtn=document.querySelector("#submit-btn");
const output=document.querySelector(".output");

const correctAnswers=["yes","no","yes","yes","yes"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults =new FormData(quizForm);
    // console.log(formResults);
    for( let value of formResults.values()){
        // console.log(value);
        if(value === correctAnswers[index]){
            score++;
        }
        index++;
    }
    console.log(score);
    output.style.display="block";
    output.innerText="You scored: "+ score+" out of 5";
    submitBtn.style.display="none";
}


submitBtn.addEventListener("click",calculateScore);