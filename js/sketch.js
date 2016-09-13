var snake;
var gridSize = 10;    //Assign size of a grid
var snakePieces = [];    //List to store all snake pieces

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

	//When a food is eaten, extend the length of the snake and add new food at random position
	if(snake.x==food.x && snake.y==food.y) {
		snake.extend(food.x, food.y);
		food = new Food(floor(random(0,width/gridSize))*gridSize, floor(random(0,height/gridSize))*gridSize);
	}

	//When the head of the snake hits the wall, freeze it
	if(snake.x<0 || snake.x>width || snake.y<0 || snake.y>height) {
		snake.moving = false;
		Object.freeze(snake);
	}

	//When the head of the snake hits its other pieces, freeze it
	for(var i=1; i<snakePieces.length; i++) {
		if(snake.x==snakePieces[i].x && snake.y==snakePieces[i].y) {
			snake.moving = false;
			Object.freeze(snake);
			break;
		}
	}
}