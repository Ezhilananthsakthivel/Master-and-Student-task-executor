const ans = document.querySelector(".ans");
const cals = [];
let count = 1;

(function () {
    const cal = JSON.parse(localStorage.getItem('cals'));
    if (cal) {
        cals.push(...cal);
    }
})()

cals.forEach(cal => {
    ans.innerHTML += `<p>${count}. ${cal.question} ---> ${cal.result}</p>`
    count++
});