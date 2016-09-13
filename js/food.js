function Food (x, y) {
	this.x = x;
	this.y = y;

	this.display = function () {
		fill(255,255,0);
		rect(this.x, this.y, gridSize, gridSize); 
	}
}