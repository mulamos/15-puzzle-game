$(document).ready (function() {

	var gameTiles = [];
	var blankSpace = [];

	var gameTiles = $("#puzzlearea div");
	var row = 0;
	var right = 0;
	var top = 0;

	if (gameTiles.length) {

		for (var i = 0; i < gameTiles.length; i++) {
			$(gameTiles[i]).addClass("puzzlepiece");
			$(gameTiles[i]).css({"float":"left"});
			$(gameTiles[i]).css({"backgroundSize":"400px 400px"});

			blankSpace[i] = [];
			blankSpace[i][0] = right;
			console.log(blankSpace[i][0]);
			/*console.log(blankSpace[i]);
			console.log(blankSpace[i][0]);*/
			blankSpace [i][1] = top;
			console.log(blankSpace[i][1]);
			/*console.log(blankSpace);
			console.log(blankSpace[i]);
			console.log(blankSpace[i][1]);*/
			$(gameTiles[i]).css({"backgroundPosition":"-"+blankSpace[i][0]+"px -"+blankSpace[i][1]+"px"});
			row++;
			console.log(row);
			if (row === 4) {
				top += 100; 
				right = 0; 
				row = 0;
			} 
			else {
				right += 100;
			}
		}
	}

	var square = function(row, column) {
		if (row === 1) {
			var result = row*column;
			$("#puzzlearea div:nth-child(result)").attr("id", "square_"+row+"_"+column);
		}

		else if (row === 2 && column === 1) {
			var result = (row*column)+3;
			$("#puzzlearea div:nth-child(result)").attr("id", "square_"+row+"_"+column);
		}
			else if (column === 2) {
				var result = (row*column)+2;
				$("#puzzlearea div:nth-child(result)").attr("id", "square_"+row+"_"+column);
			}
			else if (column === 3) {
				var result = (row*column)+1;
				$("#puzzlearea div:nth-child(result)").attr("id", "square_"+row+"_"+column);
			}
			else {
				var result = row*column;
				$("#puzzlearea div:nth-child(result)").attr("id", "square_"+row+"_"+column);
			}

		if (row === 3 && column === 1) {
			var result = (row*column)+6;
			$("#puzzlearea div:nth-child(result)").attr("id", "square_"+row+"_"+column);
		}
			else if (column === 2) {
				var result = (row*column)+4;
				$("#puzzlearea div:nth-child(result)").attr("id", "square_"+row+"_"+column);
			}
			else if (column === 3) {
				var result = (row*column)+2;
				$("#puzzlearea div:nth-child(result)").attr("id", "square_"+row+"_"+column);
			}
			else
			{
				var result = row*column;
				$("#puzzlearea div:nth-child(result)").attr("id", "square_"+row+"_"+column);
			}

		if (row === 4 && column === 1) {
			var result = (row*column)+9;
			$("#puzzlearea div:nth-child(result)").attr("id", "square_"+row+"_"+column);
		}
			else if (column === 2) {
				var result = (row*column)+6;
				$("#puzzlearea div:nth-child(result)").attr("id", "square_"+row+"_"+column);
			}
			else if (column === 3) {
				var result = (row*column)+3;
				$("#puzzlearea div:nth-child(result)").attr("id", "square_"+row+"_"+column);
			}
			else {
				var result = row*column;
				$("#puzzlearea div:nth-child(result)").attr("id", "square_"+row+"_"+column);
			}
	}

	var moveable = function(square) {
		
	}
});	