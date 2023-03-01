const popup = document.querySelector('.popup')
const button = document.querySelector('.banner__btn')
const buttonClose = popup.querySelector('.btn__close')
const input = popup.querySelector('.form__input')

button.addEventListener(('click'), function() {
    popup.classList.add('open')
    input.focus()
})

buttonClose.addEventListener(('click'), function(){
    popup.classList.remove('open')
})

window.addEventListener('keydown', function(e) {
    if (e.code === "Escape" && popup.classList.contains('open')) {
        popup.classList.remove('open')
    }
})