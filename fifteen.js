//Extra Feature: Animation
$(document).ready (function() {

	//add puzzlepiece class to each div
	$("#puzzlearea div").addClass("puzzlepiece");

	//x/y position of the puzzle area
	var posx = parseInt($("#puzzlearea").css("top"));
	var posy = parseInt($("#puzzlearea").css("left"));

	var jpgx = 0;
	var jpgy = 0;

	//x/y position of the clear space
	var clearx = 300;
	var cleary = 300;

	var gameTile = document.getElementsByClassName("puzzlepiece");

	//check if div are available
	if (gameTile.length) {

		for (var i = 0; i < gameTile.length; i++) {

			//Set background image to 400px x 400px
			$(gameTile[i]).css("backgroundSize", "400px 400px");

			//position background image on each div
			$(gameTile[i]).css("background-position", jpgx+"px "+jpgy+"px");
			jpgx -= 100;
			if (jpgx%400 == 0) {jpgy -= 100;}

			//Position each div
			$(gameTile[i]).css("top", posy);
			$(gameTile[i]).css("left", posx);

			posx += 100;

			if (i != 0 && (i+1)%4 == 0) {
				posy += 100;
				posx = parseInt($("#puzzlearea").css("top"));
			}

			//add movablepiece class to a movable div
			$(gameTile[i]).mouseover(function() {
				if (isValid(this)) { $(this).addClass("movablepiece"); } 
			});

			//removes movablepiece class when mouse leaves div
			$(gameTile[i]).mouseleave(function(){
				$(this).removeClass("movablepiece");
			});

			$(gameTile[i]).click(function() {
				if (isValid(this)) {
				swapTile(this, true);
				}
			});
		}
	}
	
	//Checks if tile is next to a clear tile
	var isValid = function(gameTile) {
		if(((parseInt($(gameTile).css("top")) - cleary == 100 || parseInt($(gameTile).css("top")) - cleary == -100) && parseInt($(gameTile).css("left")) - clearx == 0) ||
		((parseInt($(gameTile).css("left")) - clearx == 100 || parseInt($(gameTile).css("left")) - clearx == -100) && parseInt($(gameTile).css("top")) - cleary == 0)) {
			return true;
		}
		else { return false; }
	};

	//swap tiles. parameters: gameTile - div, anim - return boolean to apply animation or not
	var swapTile = function(gameTile, anim) {
		var tempx = clearx;
		var tempy = cleary;

		cleary = parseInt($(gameTile).css("top"));
		clearx = parseInt($(gameTile).css("left"));

		if (anim) {
			$(gameTile).animate({"top":tempy, "left":tempx}, 'slow');
		}
		else {
			$(gameTile).css("top", tempy);
			$(gameTile).css("left", tempx);
		}
	};

	//click function for shufflebutton
	$("#shufflebutton").click(function() {

		var amt = Math.floor(Math.random()*100);

		for (var i=0; i < amt; i++) {
			movetile();
		}
	});

	var movetile = function() {
		var arr = [];

		//push valid tiles that we want 
		for (var i=0; i < gameTile.length; i++) {
			if (isValid(gameTile[i])) {
				arr.push(gameTile[i]);
			}
		}

		var move = arr[Math.floor(Math.random() * arr.length)];

		//swap clear tile with random tile
		swapTile(move, false);
	};
});	