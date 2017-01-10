heading2 = document.getElementsByTagName("h2");
console.log(heading2);

heading2[0].innerText="here is a new title"

for (i=0;i<heading2.length;i++) {
	heading2[i].innerText = "This is article number "+i;
}

document.
getElementById("clickOnMe").addEventListener("click", function(event){
  alert(document.getElementById("clickOnMe").innerText);
})