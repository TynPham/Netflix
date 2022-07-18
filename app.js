const chooseLanguage = document.querySelectorAll('.btn_language');
const language = document.querySelectorAll('.language');
const listPlus = document.querySelectorAll('.fa-plus');
const listAnswers = document.querySelectorAll('.answers');
const listQuestion = document.querySelectorAll('.question');


chooseLanguage.forEach(function(item , index) {
    item.addEventListener('click' , function() {
        language[index].classList.toggle('hide');
        item.classList.toggle('whiteBorder');
    })
})

listQuestion.forEach(function(item , index) {
    item.addEventListener('click' , function() {
        listPlus[index].classList.toggle('rotate');
        listAnswers[index].classList.toggle('open');
    })
})


