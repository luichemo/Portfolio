// set up canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// set up game variables
const tileSize = 20;
let snake = [{x: 0, y: 0}];
let food = {x: 0, y: 0};
let direction = "right";
let gameover = false;

// generate random food location
function generateFood() {
  food.x = Math.floor(Math.random() * canvasWidth / tileSize) * tileSize;
  food.y = Math.floor(Math.random() * canvasHeight / tileSize) * tileSize;
}

// move snake
function moveSnake() {
  // create new head
  let newHead = {x: snake[0].x, y: snake[0].y};
  if (direction === "right") newHead.x += tileSize;
  else if (direction === "left") newHead.x -= tileSize;
  else if (direction === "down") newHead.y += tileSize;
  else if (direction === "up") newHead.y -= tileSize;

  // check if game over
  if (newHead.x < 0 || newHead.x >= canvasWidth || newHead.y < 0 || newHead.y >= canvasHeight || snake.find((part) => part.x === newHead.x && part.y === newHead.y)) {
    gameover = true;
    return;
  }

  // check if food eaten
  if (newHead.x === food.x && newHead.y === food.y) {
    snake.unshift(newHead);
    generateFood();
  } else {
    snake.pop();
    snake.unshift(newHead);
  }
}

// draw game
function draw() {
  // clear canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // draw snake
  ctx.fillStyle = "#000000";
  for (let i = 0; i < snake.length; i++) {
    ctx.fillRect(snake[i].x, snake[i].y, tileSize, tileSize);
  }

  // draw food
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(food.x, food.y, tileSize, tileSize);
}

// handle keyboard input
function handleInput(event) {
  if (event.keyCode === 37 && direction !== "right") direction = "left";
  else if (event.keyCode === 38 && direction !== "down") direction = "up";
  else if (event.keyCode === 39 && direction !== "left") direction = "right";
  else if (event.keyCode === 40 && direction !== "up") direction = "down";
}

// start game loop
generateFood();
setInterval(() => {
  if (!gameover) {
    moveSnake();
    draw();
  }
}, 100);

// listen for keyboard input
document.addEventListener("keydown", handleInput);
