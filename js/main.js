function getPassword(){

	// instantiate the variable up here to avoid scope problems

	// set up an ajax call to our "library"
	var ajaxCall = new XMLHttpRequest();

	// tell the ajax call what to do when it's done running (we do this before we actually run it)
	ajaxCall.onreadystatechange = function() { 
		if (ajaxCall.readyState == 4 && ajaxCall.status == 200) {

		
		  var usr = document.querySelector("#username").value;
		  var pass = document.querySelector("#password").value;

		  userpass = JSON.parse(ajaxCall.responseText);
		  counter = 0

		  var messageDiv = document.querySelector("#message");


	while(userpass[counter]) {

			var singleusr = userpass[counter];

			if (usr === singleusr.username) {
				if (pass === singleusr.password) {
					var newDiv = document.createElement("div");
				  	var newP = document.createElement("p");
				  	var newText = document.createTextNode("Welcome");
				  	// Add all the stuff
				  	newP.appendChild(newText);
				  	newDiv.appendChild(newP);
				  	messageDiv.appendChild(newDiv);
				  	usr = " ";
				  	pass = " ";
				  	break;
				}

				else {
			var newDiv = document.createElement("div");
				  	var newP = document.createElement("p");
				  	var newText = document.createTextNode("Boo");
				  	// Add all the stuff
				  	newP.appendChild(newText);
				  	newDiv.appendChild(newP);
				  	messageDiv.appendChild(newDiv);
				  	break;
				};
			}

			else {
			var newDiv = document.createElement("div");
				  	var newP = document.createElement("p");
				  	var newText = document.createTextNode("Boo");
				  	// Add all the stuff
				  	newP.appendChild(newText);
				  	newDiv.appendChild(newP);
				  	messageDiv.appendChild(newDiv);
				  	break;
				};

		
		counter++
	}
		  
}

}
	
	ajaxCall.open("GET", "usernames.json", true);
	ajaxCall.send();
}





//I like to put all my event listeners down here.
document.querySelector('#gimme').addEventListener('click', function() {
	getPassword();
});
