console.log(document)

const hvar = document.getElementById("h1")
console.log(hvar)

const P = document.getElementById("p1")
console.log(P)

const button = document.getElementById("btn1")
console.log(button)

const button2 = document.getElementById("btn2")
console.log(button)

const imahe = document.getElementById("img")
console.log(imahe)

const input = document.getElementById("inp")
console.log(input)

imahe.addEventListener(
    "mouseover", function(){
        P.innerHTML = "You hover in"
        P.style.color = "Blue"
    }
)

imahe.addEventListener(
    "mouseout", function(){
        P.innerHTML = "You hover out"
        P.style.color = "black"
    }
)

button2.addEventListener(
    "dblclick", function (){
        hvar.style.color = "Red"
    }
)

input.addEventListener(
    "input", function(){
        P.innerHTML =  "Typing.. " + Input.value
    }
)