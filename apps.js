const inputs = document.querySelectorAll(".angle-input");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector(".output");

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}


function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));

    if (sumOfAngles === 180) {
        output.style.display="block";
        output.innerText = "Yuhu! these angles can make a triangle";
    } else {
        output.style.display="block";
        output.innerText = "Oops! these angles cannot make a triangle";
    }
}



checkBtn.addEventListener("click", isTriangle)