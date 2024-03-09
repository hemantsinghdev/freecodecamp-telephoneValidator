const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
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
        alert("Please provide a phone number");
    }
    else{  
        const result = telephoneCheck(str);
        const paraTag = document.createElement('p');
        result
        ? paraTag.className = 'green'
        : paraTag.className = 'red';
        paraTag.appendChild(
            document.createTextNode(
                `${result ? 'Valid' : 'Invalid'} US number: ${str}`
        ))
        resultsDiv.appendChild(paraTag);
    }
    userInput.value = "";
}

const clear = () => {
    resultsDiv.innerHTML = "";
}

checkBtn.addEventListener("click", checkInput);
clearBtn.addEventListener("click", clear);
document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        checkInput();
    }
})