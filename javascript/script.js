/*function for the burger menu*/
const openMenu = document.getElementById("mobile_Menu_open");
const closeMenu = document.getElementById("mobile_Menu_close");
const menu = document.querySelector("#menu");
const menuLogo = document.getElementById("mobile_logo");

openMenu.addEventListener('click', function(){
        menu.classList.add("mobile-menu-links");
        closeMenu.classList.add("active");
        openMenu.classList.add("close_menu");
       menuLogo.classList.add("menu_logo");
});
closeMenu.addEventListener('click', function(){
        menu.classList.remove("mobile-menu-links");
        closeMenu.classList.remove("active");
        openMenu.classList.remove("close_menu");
        menuLogo.classList.remove("menu_logo");
});


/*function to validate the form*/
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
        sendErrorMessage(email, 'Please insert valid email');
    }else{
        sendSuccesfulMessage(email, 'Great job!');
    }
}
function sendErrorMessage(input, message){
    const validate = input.parentElement;
    const span = validate.querySelector('span');
    validate.className = 'form-div errorMessage';
    span.innerText = message;
}
function sendSuccesfulMessage(input, message){
    const validate = input.parentElement;
    const span = validate.querySelector('span');
    validate.className = 'form-div successMessage';
    span.innerText=message;
}
function emailFormat(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}