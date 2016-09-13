function Snake(x,y) {
	this.x = x;
	this.y = y;
	this.direction;    //Holds value of the current direction
	this.moving = true;    //Whether snake is permitted to move or not

	//Display the whole snake by displaying piece by piece
	this.display = function () {
		fill(255);
		for(var i=0; i<snakePieces.length; i++) {
			rect(snakePieces[i].x, snakePieces[i].y, gridSize, gridSize);
		}
	}

	//Move the snake head according to keypress
	this.move = function () {
		//Every piece other than head piece gets the positon of its previous piece
		if(this.moving) {
			for (var i = snakePieces.length-1; i > 0; i--) {
				snakePieces[i].x = snakePieces[i-1].x;
				snakePieces[i].y = snakePieces[i-1].y;
			}
		}

		if(keyCode == LEFT_ARROW) {
			//When previous direction is not right, turn the head to the left of screen
			if(this.direction!="right") {
				this.x = this.x - gridSize;
				this.direction = "left";
			}
			//When previous direction is right, continue to move right
			else {
				this.x = this.x + gridSize;
			}
		}
		else if(keyCode == RIGHT_ARROW) {
			//When previous direction is not left, turn the head to the right of screen
			if(this.direction!="left") {
				this.x = this.x + gridSize;
				this.direction = "right";
			}
			//When previous direction is left, continue to move left
			else {
				this.x = this.x -gridSize;
			}
		}
		else if(keyCode == UP_ARROW) {
			//When previous direction is not down, turn the head to the up-side of screen
			if(this.direction!="down") {
				this.y = this.y - gridSize;
				this.direction = "up";
			}
			//When previous direction is down, continue to move down
			else {
				this.y = this.y + gridSize;
			}
		}
		else if(keyCode == DOWN_ARROW) {
			//When previous direction is not up, turn the head to the down-side of screen
			if(this.direction!="up") {
				this.y = this.y + gridSize;
				this.direction = "down";
			}
			//When previous direction is up, continue to move up
			else {
				this.y = this.y - gridSize;
			}
		}
		//When any other key is pressed
		else {
			//When previous direction is left, continue to move left
			if(this.direction=="left") {
				this.x = this.x - gridSize;
			}
			//When previous direction is right, continue to move right
			else if(this.direction=="right") {
				this.x = this.x + gridSize;
			}
			//When previous direction is up, continue to move up
			else if(this.direction=="up") {
				this.y = this.y - gridSize;
			}
			//When previous direction is down, continue to move down
			else if(this.direction=="down") {
				this.y = this.y + gridSize;
			}
		}
	}

	//Extend the length of the snake
	//x and y is the coordinate of the food that has been eaten
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