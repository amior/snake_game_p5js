var snake;
var gridSize = 10; //Assign size of a grid
var snakePieces = [];

function setup() {
	createCanvas(600, 400);
	frameRate(10);
	snake = new Snake(floor(random(0,width/gridSize))*gridSize, floor(random(0,height/gridSize))*gridSize);
	snakePieces.push(snake);
	food = new Food(floor(random(0,width/gridSize))*gridSize, floor(random(0,height/gridSize))*gridSize);
}

function draw() {
	background(0);
	snake.display();
	food.display();
	snake.move();

	if(snake.x==food.x && snake.y==food.y) {
		snake.extend(food.x, food.y);
		food = new Food(floor(random(0,width/gridSize))*gridSize, floor(random(0,height/gridSize))*gridSize);
	}
}	