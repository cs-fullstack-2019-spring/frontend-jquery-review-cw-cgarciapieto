



//A function that adds a green border to all the p tags when clicked
$("#greenBorder").click(function(){
    $("p").toggleClass("greenBorder1");
    alert("The number of paragraphs in the document is 9")
});


//A function that adds a red border to all the all p in the first div tags when clicked
$("#redBorder").click(function(){
    $("div>p").toggleClass("redBorder1");
    alert("The number of paragraphs in the First DIV is  3")
});


//A function that adds a blue border to all the all p tags in the 2nd div tags when clicked
$("#blueBorder").click(function(){
    $("div:first-child").toggleClass("blueBorder1");
    alert("The number of paragraphs in the Second DIV is  3")
});

