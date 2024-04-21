const username = document.getElementById('username');
const password = document.getElementById('password');

const button = document.querySelector('form button');
const alertdanger = document.querySelector('.alert-danger');

username.addEventListener('keyup', function() {
    if(username.value.includes("'") || (username.value.includes("-"))) {
        button.setAttribute("disabled", "true"); 
    } else {
        button.removeAttribute("disabled");
    }
})

password.addEventListener('keyup', function() {
    if(password.value.includes("'") || (password.value.includes("-"))) {
        button.setAttribute("disabled", "true"); 
    } else {
        button.removeAttribute("disabled");
    }
})

button.addEventListener('click', function() {
    if(username.value == "dsi" && password.value == "dsi123") {
        window.location = 'https://mbimoad.github.io/dsibackend/';
    } else {
        alertdanger.classList.add('active');
    }
})