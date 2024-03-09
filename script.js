const userInput = document.getElementById("user-input");
const resultDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
let typeKeys = [];
for (let i = 0; i < 10; i++) {
    typeKeys.push(document.getElementById(`key-${i}`));
}
typeKeys.forEach((key) => {
    key.addEventListener("click", () => {
        userInput.value += key.innerText;
    });
});
document.getElementById("key-left-paranthesis").addEventListener("click", () => {userInput.value += "("});
document.getElementById("key-right-paranthesis").addEventListener("click", () => {userInput.value += ")"});

const phoneRegex = /^1?[\s|-]?(?:\(\d\d\d\)|\d\d\d)[\s|-]?\d\d\d[\s|-]?\d\d\d\d$/

function telephoneCheck(str) {
  return phoneRegex.test(str);
}

const checkInput = () => {
    let str = userInput.value;
    if(str===""){
        resultDiv.innerHTML += `<h6 class="red">Please Enter a Number </h6>`;
    }
    else{
        const result = telephoneCheck(str);
        if(result){
            resultDiv.innerHTML += `<h6 class="green">This is a Valid US Number </h6>`
        }
        else{
            resultDiv.innerHTML += `<h6 class="grey">This is not a Valid Number </h6>`
        }
    }
    userInput.value = "";
}

const clear = () => {
    resultDiv.innerHTML = "";
}

checkBtn.addEventListener("click", checkInput);
clearBtn.addEventListener("click", clear);
document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        checkInput();
    }
})