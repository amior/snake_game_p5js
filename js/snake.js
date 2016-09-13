function Snake(x,y) {
	this.x = x;
	this.y = y;
	this.direction; //holds value of the current direction

	this.display = function () {
		fill(255);
		for(var i=0; i<snakePieces.length; i++) {
			rect(snakePieces[i].x, snakePieces[i].y, gridSize, gridSize);
		}
	}

	this.move = function () {
		if(this.direction != "None") {
			for (var i = snakePieces.length-1; i > 0; i--) {
				snakePieces[i].x = snakePieces[i-1].x;
				snakePieces[i].y = snakePieces[i-1].y;
			}
		}

		if(keyCode == LEFT_ARROW) {
			if(this.direction!="right") {
				this.x = this.x - gridSize;
				this.direction = "left";
			}
			else {
				this.x = this.x + gridSize;
			}
		}
		else if(keyCode == RIGHT_ARROW) {
			if(this.direction!="left") {
				this.x = this.x + gridSize;
				this.direction = "right";
			}
			else {
				this.x = this.x -gridSize;
			}
		}
		else if(keyCode == UP_ARROW) {
			if(this.direction!="down") {
				this.y = this.y - gridSize;
				this.direction = "up";
			}
			else {
				this.y = this.y + gridSize;
			}
		}
		else if(keyCode == DOWN_ARROW) {
			if(this.direction!="up") {
				this.y = this.y + gridSize;
				this.direction = "down";
			}
			else {
				this.y = this.y - gridSize;
			}
		}
		else {
			this.direction = "None";
		}
	}

	this.extend = function(x, y) {
		if(this.direction=="left") {
			newPiece = new Piece(x+gridSize, y);
		}
		else if(this.direction=="right") {
			newPiece = new Piece(x-gridSize, y);
		}
		else if(this.direction=="up") {
			newPiece = new Piece(x, y+gridSize);
		}
		else if(this.direction=="down") {
			newPiece = new Piece(x, y-gridSize);
		}
		
		snakePieces.push(newPiece);
	}
}