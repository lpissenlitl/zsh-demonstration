var body = document.body
var login = document.getElementById('logins')
var but = document.getElementById('but')
var phones = document.querySelector('#one');
var emails = document.getElementById('two')
var phone = document.querySelector('.LoginPhone')
var email = document.querySelector('.LoginEmail')
var close = document.querySelector('#close');
var fullbg = document.getElementById('fullbg')
var register = document.querySelector('.register')
var go = document.getElementById('go')
var recede = document.getElementById('recede')
var dl = document.getElementById('dl')
var zc = document.getElementById('zc')
var but1 = document.getElementById('button1')
var but2 = document.getElementById('button2')
var but3 = document.getElementById('button3')

dl.addEventListener('click',function() {
    register.style.display = 'none'
    login.style.display = 'block'
    fullbg.style.display = 'block'
})
zc.addEventListener('click',function() {
    login.style.display = 'none'
    register.style.display = 'block'
    fullbg.style.display = 'block'
})
but.addEventListener('click',function() {
    login.style.display = 'block'
    fullbg.style.display = 'block'
})
go.addEventListener('click',function() {
    login.style.display = 'none'
    register.style.display = 'block'
    fullbg.style.display = 'block'
})
recede.addEventListener('click',function() {
    register.style.display = 'none'
    login.style.display = 'block'
    fullbg.style.display = 'block'
})
but1.addEventListener('click',function() {
    login.style.display = 'none'
    register.style.display = 'none'
    fullbg.style.display = 'none'
})
but2.addEventListener('click',function() {
    login.style.display = 'none'
    register.style.display = 'none'
    fullbg.style.display = 'none'
})
but3.addEventListener('click',function() {
    login.style.display = 'none'
    register.style.display = 'none'
    fullbg.style.display = 'none'
})
close.onclick=function() {
    login.style.display = 'none';
    fullbg.style.display = 'none'
}
off.onclick=function() {
    register.style.display = 'none';
    fullbg.style.display = 'none'
}
phones.addEventListener('click',function() {
    emails.style.borderBottom = 'none'
    phones.style.borderBottom = '2px solid rgb(206, 2, 2)'
    email.style.display = 'none'
    phone.style.display = 'block'
})
emails.addEventListener('click',function() {
    phones.style.borderBottom = 'none'
    emails.style.borderBottom = '2px solid rgb(206, 2, 2)'
    phone.style.display = 'none'
    email.style.display = 'block'
})

