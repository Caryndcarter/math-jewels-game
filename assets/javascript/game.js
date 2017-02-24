$( document ).ready(function() {
	console.log("ready!");

var gems = {
	zirconia : {
		value : "",
		gemID : $("#zirconia"),
	},

	garnet : {
		value : "", 
		gemID : $("#garnet"),
	},

	ruby : {
		value : "", 
		gemID : $("#ruby"),
	},

	emerald : {
		value : "",
		gemID : $("#emerald") 
	}
}

var totalScore = 0;
$("#score").html(totalScore);

var randomNumber = {
	value: "", 
	class : $(".random-number")
}

var wins = 0;
$("#wins").html(wins);
var losses = 0;
$("#losses").html(losses);


function startGame() {
	
	totalScore = 0; 
	$("#score").html(totalScore);
	gems.zirconia.value = Math.floor(Math.random() * 12) + 1 ;
	gems.garnet.value = Math.floor(Math.random() * 12) + 1 ;
	gems.ruby.value = Math.floor(Math.random() * 12) + 1 ;
	gems.emerald.value = Math.floor(Math.random() * 12) + 1 ;
	randomNumber.value = Math.floor(Math.random() * (120-19)) + 19;
	randomNumber.class.html(randomNumber.value);

	console.log(gems.zirconia.value);
	console.log(gems.emerald.value);
	console.log(gems.ruby.value);
	console.log(gems.garnet.value);
	console.log(randomNumber.value);
	
}

function compareNumbers () {

		if(totalScore === randomNumber.value) {
			wins++;
			$("#wins").html(wins);
			alert("You win!");
			startGame();

		} else if(totalScore > randomNumber.value) {
			losses++;
			$("#losses").html(losses);
			alert("Game Over");
			startGame();
		}
}

startGame();

gems.zirconia.gemID.on("click", function () {
	totalScore += gems.zirconia.value;
	$("#score").html(totalScore);
	compareNumbers ();	
});


gems.garnet.gemID.on("click", function () {
	totalScore += gems.garnet.value;
	$("#score").html(totalScore);	
	compareNumbers();
});


gems.ruby.gemID.on("click", function () {
	totalScore += gems.ruby.value;
	$("#score").html(totalScore);
	compareNumbers();
});


gems.emerald.gemID.on("click", function () {
	totalScore += gems.emerald.value;
	$("#score").html(totalScore);
	compareNumbers();
});



});


/* Pseudo code: 
Function startGame: 
	Assign random values to each gem
	Assign random value to randomNumber
	Erase totalScore

Function: 
	On click, take in the gem selected.
	Store that value associated with the gem and add it to the totalScore



Function: 
	Compare total score to random number
	increment wins and losses
	alert win or lose

	*/