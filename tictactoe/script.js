

var winningCombo = [];
var turnCounter = 0;
var oArray = [];
var xArray = [];




var setGame = function(){
	
for(var i = 0; i < 9; i++){
		$div = $("<div class='box'>").attr("id",[i])
		var $container = $(".container");
		click = false;
		$container.append($div);
	}
}
setGame();


var startGame = function() {
	var $spot = $(".box");
	$spot.on("click", function(event){
		$(event.target).unbind("click");
		if(turnCounter % 2 === 0){
			$(event.target).attr("id","opic");
			console.log("O");
		}	else if(turnCounter % 2 != 0){
			$(event.target).attr("id","xpic");
			console.log("X");
		}
		turnCounter += 1;

	});


}

startGame();