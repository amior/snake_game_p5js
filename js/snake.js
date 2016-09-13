function Snake(x,y) {
	this.x = x;
	this.y = y;
	this.direction; //holds value of the current direction

	this.display = function () {
		fill(255);
		rect(this.x, this.y, gridSize, gridSize); 
	}

	this.move = function () {
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
	}
}