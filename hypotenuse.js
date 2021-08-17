const sides=document.querySelectorAll(".side-input");
const checkBtn=document.querySelector("#check-btn")
const output=document.querySelector(".output");

function calculateSumOfSquare(a,b){
    const sumOfSquare= a*a +b*b;
    return sumOfSquare;
}


function calculateHypotenuse(){
    console.log("hyp");
   sumOfSquare = calculateSumOfSquare(Number(sides[0].value),Number(sides[1].value));
   const lenthOfHypotenuse = Math.sqrt(sumOfSquare);
   output.style.display="block";
   output.innerText="The length of hypotenuse is "+ lenthOfHypotenuse;
}
checkBtn.addEventListener("click",calculateHypotenuse);
