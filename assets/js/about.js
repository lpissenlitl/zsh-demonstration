var aboutus = document.getElementById('aboutus')
var aa = document.getElementById('aa')
var ab = document.getElementById('ab')
var bottom1 = document.getElementById('bottom1')
var bottom2 = document.getElementById('bottom2')
aa.addEventListener('click',function() {
    aa.style.color = 'rgb(206, 2, 2)'
    ab.style.color = 'black'
    bottom1.style.display = 'block'
    bottom2.style.display = 'none'
})
ab.addEventListener('click',function() {
    aa.style.color = 'black'
    ab.style.color = 'rgb(206, 2, 2)'
    bottom1.style.display = 'none'
    bottom2.style.display = 'block'
})


