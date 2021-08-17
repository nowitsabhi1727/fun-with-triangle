const sides=document.querySelectorAll(".side-input");
const checkBtn=document.querySelector("#check-btn")
const output=document.querySelector(".output");


function calculationOfArea(a,b){
    const area= (a * b)/2;
    return area;
}


function calculateArea(){
    const area=calculationOfArea(Number(sides[0].value),Number(sides[1].value));
    output.style.display="block";
    output.innerText="The area of triangle is "+ area;
}
checkBtn.addEventListener("click",calculateArea);