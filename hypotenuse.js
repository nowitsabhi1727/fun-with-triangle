const form= document.getElementById("hypo-form")
const sides=document.querySelectorAll(".side-input");
const output=document.querySelector(".output");

function calculateSumOfSquare(a,b){
    const sumOfSquare= a*a +b*b;
    return sumOfSquare;
}


function calculateHypotenuse(e){
    e.preventDefault();
   sumOfSquare = calculateSumOfSquare(Number(sides[0].value),Number(sides[1].value));
   const lenthOfHypotenuse = Math.sqrt(sumOfSquare);
   output.style.display="block";
   output.innerText="The length of hypotenuse is "+ lenthOfHypotenuse;
}
form.addEventListener("submit",calculateHypotenuse);
