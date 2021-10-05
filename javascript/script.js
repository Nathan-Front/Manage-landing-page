/*function for the burger menu*/
const openMenu = document.getElementById("mobile_Menu");
const menu = document.querySelector("#menu");
const closeMenu = document.getElementById("mobile_Menu_close");
const menuLogo = document.getElementById("mobile_logo");

openMenu.addEventListener('click', function(){
        menu.classList.add("mobile-menu-links");
        closeMenu.classList.add("active");
        openMenu.style.display ="none";
        menuLogo.classList.add("active");
});
closeMenu.addEventListener('click', function(){
        menu.classList.remove("mobile-menu-links");
        closeMenu.classList.remove("active");
        openMenu.style.display ="none";
        menuLogo.classList.remove("active");
});






/*function to validate the form*//*
const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', function(e){
    e.preventDefault();

    validateEmail();
});
function validateEmail(){
    const inputEmail = email.value.trim();
    if(inputEmail === ''){
        sendErrorMessage(email, 'This must not be empty');
    }else if(!emailFormat(inputEmail)){
        sendErrorMessage(email, 'Whoops, make sure its an email');
    }else{
        sendSuccesfulMessage(email, 'Great job!');
    }
}
function sendErrorMessage(input, message){
    const validate = input.parentElement;
    const span = validate.querySelector('span');
    validate.className = 'form-input error';
    span.innerText = message;
}
function sendSuccesfulMessage(input, message){
    const validateSuccess= input.parentElement;
    const span = validateSuccess.querySelector('span');
    validateSuccess.className = 'form-input success';
    span.innerText=message;
}
function emailFormat(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}*/