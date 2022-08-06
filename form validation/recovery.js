let $ = document

let button = $.querySelector('.recoveryButton')
let userInput = $.querySelector('.textInput')
let paraGraph = $.querySelector('.pText')
let div = $.querySelector('.container')

let holy = null

button.addEventListener('click', function() {


    alert('your code has send to' + ' ' + userInput.value)
    paraGraph.innerHTML = 'please check your email'
    paraGraph.style.color = 'aqua'
    paraGraph.style.display = 'block'
    div.style.height = '550px'



})