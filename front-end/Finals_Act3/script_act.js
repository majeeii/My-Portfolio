$(document).ready(function(){

    $("#btn1").click(function(){
        $("#message"). text("WELCOME, Students!")
    })

    $("#btn1").dblclick(function(){
        $("#message").text("You double clicked the button!")
    })

    $("#btn1").dblclick(function(){
        $("#mess").text("You double clicked the button!")
    })

    $("#btn3").click(function(){
        $("#mess").text("You clicked the HIDE button")
        $("#c1").hide("slow")
    })

    $("#btn2").click(function(){
        $("#mess").text("You clicked the SHOW button")
        $("#c1").show(1000)
    })

      //button enter click function
      $("#btn1").mouseenter(function(){
        $("#mess").text("Your mouse Reached the change title button")
    })

    //button mouse leave function
    $("#btn1").mouseleave(function(){
        $("#mess").text("Your mouse left the change title button")
    })

    $("#btn1").click(function(){
        $("#mess").text("You clicked the change title button")
    })

    $("#course").change(function(){
        $("#mess2").text($(this).val())
        $("#msg2").text($(this).val())
    })

    $("#btn5").click(function(){
        $("tr:even").css("background", "lightblue")
        $("tr:odd").css("background", "azure")
    })
    
    $("#btn4").click(function(){ 
        $("tr:odd").css("background", "yellow")
        $("tr:even").css("background", "azure")
    })
   
 
})