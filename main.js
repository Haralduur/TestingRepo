console.log('it works')

$(document).ready(function () {
    $('.submit').click(function(){
        
        console.log('clicked butoon')

        var email = $('.email').val()
        var subject = $('.subject').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.lenght > 5 && email.includes('@') && email.includes('.')) {
            statusElm.append('<div>Email is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Email is not valid</div>')
        }

        if(subject.lenght >= 2) {
            statusElm.append('<div>Subject is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Subject is not valid</div>')
        }

        if(message.lenght >= 10) {
            statusElm.append('<div>Message is valid is valid</div>')
        } else {
            event.preventDefault()
            statusElm.append('<div>Message is not valid</div>')
        }
    })
})