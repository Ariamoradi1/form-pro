let $ = document

let nameUser = $.querySelector('.nameUser')
let textInput = $.querySelector('.textInput')
let passwordInput = $.querySelector('.passwordInput')
let passwordAgain = $.querySelector('.passwordAgain')
let buttonSignup = $.querySelector('.buttonSignup')
let link = $.querySelector('a')

buttonSignup.addEventListener('click', function() {

if (textInput.value.length < 4){

    alert('user name must more than 4 character')

} else if (passwordInput.value.length < 8) {

    alert('Password must more than 8 number or character')
} else {
    alert('welcome' + ' ' + nameUser.value)
    
}





})