const Button1 = document.getElementById
("1st")
const Button2 = document.getElementById
("2nd")
const Message =document.getElementById
("message")

function showMessage(text){
    
    Message.innerHTML = text
    Message.style.color = "green"
    
}

Button1.addEventListener("click", function(){

    Message.innerHTML = "loading..."
    setTimeout(function(){

        showMessage("Welcome BSIT31C")
        Button1.style.color = "pink"
        Button1.style.backgroundColor = "Black"

    },2000)
})


function loadMessage(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Checking account")
            Message.style.color = "blue"
        },2000)
    })
}

Button2.addEventListener("click",function(){

    Message.innerHTML= "Loading..."
    Message.style.color = "red"

    loadMessage()

    .then(function(result){

        Message.innerHTML = result

        return new Promise(function(resolve){

            setTimeout(function(){

                resolve("Loading Profile...")
                
            },3000)
        })

    })

    .then(function(result){
        Message.style.color = "yellow"
        Message.innerHTML = result
        return new Promise(function(resolve){

            setTimeout(function(){

                resolve("WELCOME!")
                
            },3000)
        })

    })

    .then(function(result){
        Message.style.color = "pink"
        Message.style.backgroundColor = "black"
        Button2.style.backgroundColor = "Magenta"
        Message.innerHTML = result
    })

})