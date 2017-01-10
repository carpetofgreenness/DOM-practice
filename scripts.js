//1 - Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"

function change(num) {
	if (num==1) {
		document.getElementById("firstButton").innerText="I'm right";
		document.getElementById("secondButton").innerText="";
	} else if (num==2) {
		document.getElementById("firstButton").innerText="";
		document.getElementById("secondButton").innerText="No, I'm right";
	}
}

//2 - Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"
document.
getElementById("noHover").addEventListener("mouseover", function(event){
  alert('Hey - I told you not to hover over me!');
})

//3 - Create an HTML page with javascript that listens for a keypress.

//     When the user presses that key, the text of the H1 should show the value of the key they have pressed.
//     Example: If the user presses "J", the text inside the H1 should be "J".


document.getElementById("body").addEventListener("keypress", function(event){
  var x = String.fromCharCode(event.charCode)
  document.getElementById("pressH").innerText=x
})

