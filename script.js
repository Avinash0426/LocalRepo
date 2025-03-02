const dec = document.getElementById("decCounter")
const inc = document.getElementById("incCounter")
const value = document.getElementById("valueCounter")
let count = 0;

dec.addEventListener('click' ,function(e){
    value.innerHTML = --count
})
inc.addEventListener('click' ,function(e){
    value.innerHTML = ++count
})
