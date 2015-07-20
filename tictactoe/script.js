$(document).ready(function(){



$(".start").on("click", function(){
	$(".outside").toggle();
	$(".start").addClass("hide").removeClass("start");
	$("body").addClass("backImage");
});


$("#close").on("click", function(){
	$(".congrats").toggle();
});


$(".nButt1").on("click", function(){
	var $name1Input = $(".name1Input").val();
	$(".name1").text($name1Input);
	$(".name1Input").val(" ");
});


$(".nButt2").on("click", function(){
	var $name2Input = $(".name2Input").val();
	$(".name2").text($name2Input);
	$(".name2Input").val(" ");
});


var winningCombo = [[0,1,2], [3,4,5], [6,7,8], [2,5,8], [1,4,7], [0,3,6], [0,4,8], [2,4,6]];
var turnCounter = 0;
var oArray = [null, null, null, null, null, null, null, null, null];
var xArray = [null, null, null, null, null, null, null, null, null];
var gameOver = false;



var setGame = function(){
	
for(var i = 0; i < 9; i++){
		$div = $("<div class='box'>").attr("id",[i]);
		var $container = $(".container");
		click = false;
		$container.append($div);
	}
}
setGame();


var checkWinner = function(){
	//var  score1 = $('#score1');
	var score1 = parseInt($("#score1").text());
	var score2 = parseInt($("#score2").text());

	if(oArray[0] === "O" && oArray[0] === oArray[1] && oArray[1] === oArray[2]  ||  oArray[3] === "O" && oArray[3] === oArray[4] && oArray[4] === oArray[5]  ||  oArray[6] === "O" && oArray[6] === oArray[7] && oArray[7] === oArray[8]
		|| oArray[2] === "O" && oArray[2] === oArray[5] && oArray[5] === oArray[8]  ||  oArray[1] === "O" && oArray[1] === oArray[4] && oArray[4] === oArray[7]	||  oArray[0] === "O" && oArray[0] === oArray[3] && oArray[3] === oArray[6]
		|| oArray[0] === "O" && oArray[0] === oArray[4] && oArray[4] === oArray[8]	||	oArray[2] === "O" && oArray[2] === oArray[4] && oArray[4] === oArray[6]){
		gameOver = true;
		$(".congrats").toggle();
		$("#score1").text(score1 += 1);

		



	} else if(xArray[0] === "X" && xArray[0] === xArray[1] && xArray[1] === xArray[2]  ||  xArray[3] === "X" && xArray[3] === xArray[4] && xArray[4] === xArray[5]  ||  xArray[6] === "X" && xArray[6] === xArray[7] && xArray[7] === xArray[8]
		|| xArray[2] === "X" && xArray[2] === xArray[5] && xArray[5] === xArray[8]  ||  xArray[1] === "X" && xArray[1] === xArray[4] && xArray[4] === xArray[7]	||  xArray[0] === "X" && xArray[0] === xArray[3] && xArray[3] === xArray[6]
		|| xArray[0] === "X" && xArray[0] === xArray[4] && xArray[4] === xArray[8]	||	xArray[2] === "X" && xArray[2] === xArray[4] && xArray[4] === xArray[6]){
		gameOver = true;
		$(".congrats").toggle();
			$("#score2").text(score += 1);
	
	}	else if(turnCounter === 9){
		alert("its  a tie");
	}





	// for(var i = 0; i < winningCombo.length; i++){
	// 	if(oArray.sort().join() === winningCombo[i].join()){
	// 		console.log("o wins!!!");
	// 		var $scoreOne = parseInt($("#score1").text());
	// 		$scoreOne += 1;
	// 		console.log($scoreOne);
			


	// 	}else if(xArray.sort().join() === winningCombo[i].join()){
	// 		console.log("x wins!!!");
	// 		var $scoreTwo = parseInt($("#score2").text());
	// 		$scoreTwo += 1;
	// 	}
	// }
}






var startGame = function() {
	var $replay = $(".playButton");
	var $spot = $(".box");
	


	var proceed = function(event){
		if(gameOver === false){
			$(event.target).unbind("click");
			
			if(turnCounter % 2 === 0){
				$(event.target).addClass("opic").addClass("animated").addClass("flip");
				var $boxNum = parseInt($(event.target).prop("id"));
				oArray[$boxNum] = "O";
				console.log(oArray);
				console.log("O");
			
			}else if(turnCounter % 2 != 0){
				$(event.target).addClass("xpic").addClass("animated").addClass("flip");
				var $boxNum = parseInt($(event.target).prop("id"));
				xArray[$boxNum] = "X";
				console.log(xArray);
				console.log("X");
			}

			turnCounter += 1;
			console.log(turnCounter);
			checkWinner();
		}else if(gameOver === true){
			$(".box").unbind("click");
		}

	};

	$spot.click(proceed);


	
	$replay.on("click", function(){
		turnCounter = 0;
		oArray = [null, null, null, null, null, null, null, null, null];
		xArray = [null, null, null, null, null, null, null, null, null];
		gameOver = false;
		$spot.removeClass("opic").removeClass("xpic").removeClass("animated").removeClass("flip");
		$spot.click(proceed);










	 });




}

startGame();



});



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


