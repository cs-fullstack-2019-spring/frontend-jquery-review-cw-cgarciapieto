



//A function that adds a green border to all the p tags when clicked
$("#greenBorder").click(function(){
    $("p").toggleClass("greenBorder1");
    alert("The number of paragraphs in the document is 9") // Use length not hardcoded
});


//A function that adds a red border to all the all p in the first div tags when clicked
$("#redBorder").click(function(){
	// KEY: Needed to use a selector that only got <p>s in first DIV: $("div:first>p")
    $("div>p").toggleClass("redBorder1");
    alert("The number of paragraphs in the First DIV is  3") // Use length not hardcoded
});


//A function that adds a blue border to all the all p tags in the 2nd div tags when clicked
$("#blueBorder").click(function(){
	// KEY: Needed to use a selector that only got <p>s in last DIV: $("div:last>p")
    $("div:first-child").toggleClass("blueBorder1");
    alert("The number of paragraphs in the Second DIV is  3") // Use length not hardcoded
});

