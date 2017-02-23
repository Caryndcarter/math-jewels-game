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
		gemID : $("emerald") 
	}
}

var gemArray = [
	"zirconia",
	"garnet",
	"ruby",
	"emerald"
	];

var totalScore = ""; 
var randomNumber = ""; 
var wins = "";
var losses = "";


function startGame() {
	
	gems.zirconia.value = Math.floor(Math.random() * 12) + 1 ;
	gems.garnet.value = Math.floor(Math.random() * 12) + 1 ;
	gems.ruby.value = Math.floor(Math.random() * 12) + 1 ;
	gems.emerald.value = Math.floor(Math.random() * 12) + 1 ;
	randomNumber = Math.floor(Math.random() * (120-19)) + 19;

}

startGame(); 


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

	*/