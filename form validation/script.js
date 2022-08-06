let $ = document

let userText = $.querySelector('.textInput')
let userPassword = $.querySelector('.passwordInput')
let pTag = $.querySelector('.pText')
let pTag1 = $.querySelector('.pPassword')
let cont = $.querySelector('.container')

let buttonLog = $.querySelector('.buttonLogin')

userText.addEventListener('blur', function() {

if (userText.value.length < 4) {

pTag.innerHTML = 'User Name most be More than 8 character'
pTag.style.display = 'block'
pTag.style.fontsize = '20px'
pTag.style.color = 'white'
cont.style.height = '650px'

} else {

    pTag.innerHTML = 'thats right' + ' ' + userText.value
    pTag.style.display = 'block'
    pTag.style.fontsize = '20px'
    pTag.style.color = 'aquamarine'
    cont.style.height = '650px'
    



}





})

userPassword.addEventListener('blur', function() {

    if (userPassword.value.length < 8) {
    
    pTag1.innerHTML = 'Password most be More than 8 character'
    pTag1.style.display = 'block'
    pTag1.style.fontsize = '20px'
    pTag1.style.color = 'white'
    cont.style.height = '700px'
    
    } else {
    
        pTag1.innerHTML = 'thats right'
        pTag1.style.display = 'block'
        pTag1.style.fontsize = '20px'
        pTag1.style.color = 'aquamarine'
        cont.style.height = '700px'
    
    
    
    }
    
    
    
    
    
    })