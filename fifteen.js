$(document).ready (function() {

	$("#puzzlearea div").addClass("puzzlepiece");

	var posx = parseInt($("#puzzlearea").css("top"));
	var posy = parseInt($("#puzzlearea").css("left"));

	var jpgx = 0;
	var jpgy = 0;

	var clearx = 300;
	var cleary = 300;

	var gameTile = document.getElementsByClassName("puzzlepiece");

	if (gameTile.length) {

		for (var i = 0; i < gameTile.length; i++) {
			$(gameTile[i]).css("backgroundSize", "400px 400px");


			$(gameTile[i]).css("background-position", jpgx+"px "+jpgy+"px");
			jpgx -= 100;
			if (jpgx%400 == 0) {jpgy -= 100;}

			$(gameTile[i]).css("top", posy);
			$(gameTile[i]).css("left", posx);

			posx += 100;

			if (i != 0 && (i+1)%4 == 0) {
				posy += 100;
				posx = parseInt($("#puzzlearea").css("top"));
			}

			$(gameTile[i]).mouseover(function() {
				if (isValid(this)) { $(this).addClass("movablepiece"); } 
			});

			$(gameTile[i]).mouseleave(function(){
				$(this).removeClass("movablepiece");
			});

			$(gameTile[i]).click(function() {
				if (isValid(this)) {
				swapTile(this);
				}
			});
		}
	}
	
	var isValid = function(gameTile) {
		if(((parseInt($(gameTile).css("top")) - cleary == 100 || parseInt($(gameTile).css("top")) - cleary == -100) && parseInt($(gameTile).css("left")) - clearx == 0) ||
		((parseInt($(gameTile).css("left")) - clearx == 100 || parseInt($(gameTile).css("left")) - clearx == -100) && parseInt($(gameTile).css("top")) - cleary == 0)) {
			return true;
		}
		else { return false; }
	};

	var swapTile = function(gameTile) {
		var tempx = clearx;
		var tempy = cleary;

		cleary = parseInt($(gameTile).css("top"));
		clearx = parseInt($(gameTile).css("left"));

		$(gameTile).css("top", tempy);
		$(gameTile).css("left", tempx);
	};

	$("#shufflebutton").click(function() {
		var amt = Math.floor(Math.random()*100);

		for (var i=0; i < amt; i++) {
			movetile();
		}
	});

	var movetile = function() {
		var arr = [];

		for (var i=0; i < gameTile.length; i++) {
			if (isValid(gameTile[i])) {
				arr.push(gameTile[i]);
			}
		}

		var move = arr[Math.floor(Math.random() * arr.length)];

		swapTile(move);
	};
});	