button1.addEventListener("click", imRight);
button2.addEventListener("click", noImRight);

hoverbox.addEventListener("mouseover", sendAlert);
hoverbox.addEventListener("mouseout", onOut);

window.addEventListener("keypress", function(enter){
	var e = enter.keyCode
	document.getElementById("keypressed").innerHTML = String.fromCharCode(e);
} );

document.getElementById('form').addEventListener('submit', function(e){
	var user = document.getElementById('user').value
	var pwd = document.getElementById('pwd').value
	var validate = (user.match(/[0-9]/g) != null) && (pwd == "123456789")

	if(!validate){
		alert("Please re-enter data. ")
	}

});



function sendAlert(){
	document.getElementById('hoverbox').innerHTML = "<h1>I told you not to hover</h1>";
}

function onOut(){
	document.getElementById('hoverbox').innerHTML = "<h1>Thank you for leaving</h1>";
}

function imRight(){
	document.getElementById('buttonMessage1').innerHTML = "I'm right";
	document.getElementById('buttonMessage2').innerHTML = "";
}

function noImRight(){
	document.getElementById('buttonMessage2').innerHTML = "No I'm right";
	document.getElementById('buttonMessage1').innerHTML = "";
}
