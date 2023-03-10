const uname = document.querySelector(".uname");
const pass = document.querySelector(".password");
const form = document.querySelector("form");
const users = [];

(function () {
    const user = JSON.parse(localStorage.getItem('users'));
    if (user) {
        users.push(...user);
    }
})()

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = users.find(user => user.uname == uname.value);
    if (user)
        if (user.password === pass.value)
            if (user.role === 'master')
                window.location = 'master.html'
            else
                window.location = 'student.html'

        else
            alert('Password does not match')

    else
        alert('User Name not found')
})