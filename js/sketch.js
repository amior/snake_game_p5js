var gridSize = 10;    //Assign size of a grid
var score = 0;
var snake;
var snakePieces = [];    //List to store all snake pieces

function setup() {
	createCanvas(600, 400);
	frameRate(15);
	
	snake = new Snake(floor(random(0,width/gridSize))*gridSize, floor(random(0,height/gridSize))*gridSize);
	snakePieces.push(snake);
	food = new Food(floor(random(0,width/gridSize))*gridSize, floor(random(0,height/gridSize))*gridSize);
}

function draw() {
	background(0);

	textSize(20);
	fill(200, 120);
	text("Score: " + score, width-90, 20);

	snake.display();
	food.display();
	snake.move();

	//When a food is eaten, extend the length of the snake and add new food at random position
	if(snake.x==food.x && snake.y==food.y) {
		score++;
		snake.extend(food.x, food.y);
		food = new Food(floor(random(0,width/gridSize))*gridSize, floor(random(0,height/gridSize))*gridSize);
	}

	//Check if the head hits the wall
	if(snake.x<0 || snake.x>width || snake.y<0 || snake.y>height) {
		gameOver();
	}

	//Check if the head hits the tail
	for(var i=1; i<snakePieces.length; i++) {
		if(snake.x==snakePieces[i].x && snake.y==snakePieces[i].y) {
			gameOver();
			break;
		}
	}
}

function gameOver() {
	//freeze the snake
	snake.moving = false;
	Object.freeze(snake);

	//Show Game Over massage
	textSize(50);
	fill(200, 120);
	text("GAME OVER", width/2-150, height/2);
}