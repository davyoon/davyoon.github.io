$(document).ready(function(){



	$(".start").on("click", function(){
		var name1 = $(".name1Input").val();
		var name2 = $(".name2Input").val();
		$(".name1").text(name1);
		$(".name2").text(name2);
		$(".outside").toggle();
		$(".nameField").toggle();
		$(".start").addClass("hide").removeClass("start");
		$("body").addClass("backImage");
	});

	// var winningCombo = [[0,1,2], [3,4,5], [6,7,8], [2,5,8], [1,4,7], [0,3,6], [0,4,8], [2,4,6]];
	var turnCounter = 0;
	var oArray = [null, null, null, null, null, null, null, null, null];
	var xArray = [null, null, null, null, null, null, null, null, null];
	var gameOver = false;


	var setGame = function(){
		
		for(var i = 0; i < 9; i++){
				$div = $("<div class='box'>").attr("id",[i]);
				var $container = $(".container");
				$container.append($div);
			}
			startGame();
		}


	var checkWinner = function(){
		//var  score1 = $('#score1');
		var score1 = parseInt($("#score1").text());
		var score2 = parseInt($("#score2").text());
		var $playButton = $(".playButton");
		if(oArray[0] === "O" && oArray[0] === oArray[1] && oArray[1] === oArray[2]  ||  oArray[3] === "O" && oArray[3] === oArray[4] && oArray[4] === oArray[5]  ||  oArray[6] === "O" && oArray[6] === oArray[7] && oArray[7] === oArray[8]
			|| oArray[2] === "O" && oArray[2] === oArray[5] && oArray[5] === oArray[8]  ||  oArray[1] === "O" && oArray[1] === oArray[4] && oArray[4] === oArray[7]	||  oArray[0] === "O" && oArray[0] === oArray[3] && oArray[3] === oArray[6]
			|| oArray[0] === "O" && oArray[0] === oArray[4] && oArray[4] === oArray[8]	||	oArray[2] === "O" && oArray[2] === oArray[4] && oArray[4] === oArray[6]){
			gameOver = true;
			$(".congrats2").css("background-image", "url('img/congratulations.png')");
			$(".congrats").toggle();
			$("#score1").text(score1 += 1);
			$playButton.toggle();
			playAgain();
		}else if(xArray[0] === "X" && xArray[0] === xArray[1] && xArray[1] === xArray[2]  ||  xArray[3] === "X" && xArray[3] === xArray[4] && xArray[4] === xArray[5]  ||  xArray[6] === "X" && xArray[6] === xArray[7] && xArray[7] === xArray[8]
			|| xArray[2] === "X" && xArray[2] === xArray[5] && xArray[5] === xArray[8]  ||  xArray[1] === "X" && xArray[1] === xArray[4] && xArray[4] === xArray[7]	||  xArray[0] === "X" && xArray[0] === xArray[3] && xArray[3] === xArray[6]
			|| xArray[0] === "X" && xArray[0] === xArray[4] && xArray[4] === xArray[8]	||	xArray[2] === "X" && xArray[2] === xArray[4] && xArray[4] === xArray[6]){
			gameOver = true;
			$(".congrats").toggle();
			$("#score2").text(score2 += 1);
			$(".congrats2").css("background-image", "url('img/congratulations.png')");
			$playButton.toggle();
			playAgain();
		}
		else if(turnCounter === 9){
			$(".congrats2").css("background-image", "url('img/tieMessage.png')")
			$(".congrats").toggle();
			gameOver = true;
			$playButton.toggle();
			playAgain();
		}
	}


	var playAgain = function(){
		var $playButton = $(".playButton");
		$playButton.on("click", function(){
			turnCounter = 0;
			oArray = [null, null, null, null, null, null, null, null, null];
			xArray = [null, null, null, null, null, null, null, null, null];
			gameOver = false;
			console.log("clicked");
			$(".box").removeClass("opic").removeClass("xpic").removeClass("animated").removeClass("flip");
			$playButton.toggle();
			$playButton.unbind("click")
			$(".congrats").toggle();
			$(".box").remove();
			startGame();
			setGame();
		 });
	}


	var startGame = function() {
		var $spot = $(".box");

		var proceed = function(event){
			if(gameOver === true){
				$spot.unbind("click");
			}else if(gameOver === false){
				$(event.target).unbind("click");
				
				if(turnCounter % 2 === 0){
					$(event.target).addClass("opic animated flip");
					var boxNum = $(event.target).prop("id");
					oArray[boxNum] = "O";
					console.log(oArray);
					console.log("O");
				}else{
					$(event.target).addClass("xpic animated flip");
					var boxNum = $(event.target).prop("id");
					xArray[boxNum] = "X";
					console.log(xArray);
					console.log("X");
				}

				turnCounter += 1;
				console.log(turnCounter);
				checkWinner();
			};
		} 
		$spot.click(proceed);
	}

	setGame();

});
