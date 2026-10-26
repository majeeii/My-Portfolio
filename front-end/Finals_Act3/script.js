$(document).ready(function(){

    //text style function
    //$("p").css("color","blue")

    //text function
    $("#title").text("Good morning!")

    $(".colorBtn").click(function(){

        $(this).css("background", "purple")
        $(this).css("color", "white")

    })
    //changing the first element color
    $("p:first").css("color", "Red")

    //"-child" if you want to get the value of the first elements on each ul
    $("ul li:first-child").css("color", "Red")

    //for href
    $("[href]").css("color", "purple")

    //table rows changing value 
    $("tr:even").css("background", "lightblue")
    $("tr:odd").css("background", "yellow")

    //button function
    $("#btn").click(function(){
        $("#msg"). text("output: You clicked the button!")

        // calling/returning the current value
        $(this).css("background", "magenta")

        $("#tbl").hide("slow")
    })

    

    //double click function
    $("#btn").dblclick(function(){
        $("#msg").text("output: You double clicked the button!")
        $(this).css("background", "purple")
        $(this).css("color", "white")
  
        $("#tbl").show(1000)
    })

    //button enter click function
    $("#btn").mouseenter(function(){
        $("#msg").text("Your mouse Reached the button")
    })

    //button mouse leave function
    $("#btn").mouseleave(function(){
        $("#msg").text("Your mouse left the button")
    })

    //text function value
    $("#name").focus(function(){
        $("#msg").text("typing.....")
        $(this).css("background", "gray")
        $(this).css("color", "white")
    })
    //text function value
    $("#name").blur(function(){
        $("#msg").text("waiting.....")
        $(this).css("background", "white")
        $(this).css("color", "black")
    })

    //changing the option value
    $("#course").change(function(){
        $("#msg").text($(this).val())
    })

})