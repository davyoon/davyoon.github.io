

var winningCombo = [[0,1,2], [3,4,5], [6,7,8], [2,5,8], [1,4,7], [0,3,6], [0,4,8], [2,4,6]];
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



var checkWinner = function(){

	for(var i = 0; i < winningCombo.length; i++){
		if(oArray.sort().join() === winningCombo[i].join()){
			console.log("o wins!!!");
			var $scoreOne = parseInt($("#score1").text());
			$scoreOne += 1;
			console.log($scoreOne);
			for(var i = 0; i < oArray.length; i++)


		}else if(xArray.sort().join() === winningCombo[i].join()){
			console.log("x wins!!!");
			var $scoreTwo = parseInt($("#score2").text());
			$scoreTwo += 1;
		}
	}
}




var startGame = function() {
	var $spot = $(".box");
	$spot.on("click", function(event){
		$(event.target).unbind("click");
		
		if(turnCounter % 2 === 0){
			$(event.target).addClass("opic");
			var $boxNum = parseInt($(event.target).prop("id"));
			oArray.push($boxNum);
			console.log(oArray);
			console.log("O");
		
		}else if(turnCounter % 2 != 0){
			$(event.target).attr("class","xpic");
			var $boxNum = parseInt($(event.target).prop("id"));
			xArray.push($boxNum);
			console.log("X");
		}

		turnCounter += 1;
		checkWinner();

	});


}

startGame();






// if (winningCombo.indexOf(oArray.sort()) >= 0 )

// var board = [
// [null,null,null],
// [null,null,null],
// [null,null,null],
// ]

// checkForWin
// 	rowWin
// 		if row has three items, all the same
// 			return win
// 		else 
// 			no win

// 		for board[i]
// 			if board[i][0] === board[i][1] && board[i][1] === board[i][2]
// 				return win


// 	colWin


// 	diagWin

// checkForOpportunityToWin
// 	rowWin
// 		if row has two items, the same && the third item is null
// 			placeComputerMove(winningSpace)

// 	colWin


//  	diagWin	


