var welcome = document.querySelector('.message');
var message = document.querySelector('.message div');
var action = document.querySelector('.action');
var show = document.getElementsByClassName('.show');
var boxContainer2 = document.querySelector('.box-container2')
welcome.addEventListener('click', () => {
    welcome.textContent = "Have a Good Time!";
});

action.addEventListener('click', () => {
    boxContainer2.style.display = 'flex';
});
