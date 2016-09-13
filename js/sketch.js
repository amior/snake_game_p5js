var snake;
var gridSize = 10; //Assign size of a grid

function setup() {
	createCanvas(600, 400);
	frameRate(10);
	snake = new Snake(floor(random(0,width/gridSize))*gridSize, floor(random(0,height/gridSize))*gridSize);
	food = new Food(floor(random(0,width/gridSize))*gridSize, floor(random(0,height/gridSize))*gridSize);
}

function draw() {
	background(0);
	snake.display();
	food.display();
	snake.move();
}