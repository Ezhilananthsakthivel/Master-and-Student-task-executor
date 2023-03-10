const fvalue = document.querySelector(".fvalue");
const svalue = document.querySelector(".svalue");
const operator = document.querySelector(".operator");
const calculate = document.querySelector(".cal");
const ans = document.querySelector(".ans");
const cals = [];

(function () {
    const cal = JSON.parse(localStorage.getItem('cals'));
    if (cal) {
        cals.push(...cal);
    }
})()

function numval(num) {
    switch (num) {
        case "one":
            return 1
        case "two":
            return 2
        case "three":
            return 3
        case "four":
            return 4
        case "five":
            return 5
        case "six":
            return 6
        case "seven":
            return 7
        case "eight":
            return 8
        case "nine":
            return 9
        case "zero":
            return 0
    }
}

function opsymo(ops) {
    switch (ops) {
        case "plus":
            return "+"
        case "minus":
            return "-"
        case "times":
            return "*"
        case "divided_by":
            return "/"
    }
}

calculate.addEventListener('click', function () {
    let question = `${fvalue.value}(${operator.value}(${svalue.value}()))`;
    let result = Math.floor(eval(`${numval(fvalue.value)}${opsymo(operator.value)}${numval(svalue.value)}`));
    let calculation = {
        question: question,
        result: result,
    };
    cals.push(calculation);
    localStorage.setItem('cals', JSON.stringify(cals));
    ans.innerText = `${question}  -->  ${result}`
})