const uname = document.querySelector(".uname");
const pass = document.querySelector(".password");
const cpass = document.querySelector(".cpassword");
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
    if (pass.value === cpass.value) {
        const role = document.querySelector("[name=role]:checked");
        let user = {
            uname: uname.value,
            role: role.value,
            password: pass.value,
        };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Registration Successfully")
        form.reset()
        window.location = 'login.html'
    }
    else {
        alert("Confirm Password not match")
    }
})

