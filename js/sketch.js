let snake;
let food;
let w;
let h;
let puntuacion = 0;
let text, text2,text3;
let bg;

function setup() {
  bg = loadImage('assets/fondo.jpg');
  createCanvas(600, 600);
  //span.position(
  w = floor(width / 20);
  h = floor(height / 20);
  frameRate(4);
  snake = new Snake();
  foodPosition();
}

function draw() {
  scale(20);
  background("black");
  noStroke();
  fill(250, 0, 0);
  rect(food.x, food.y, .6, .6, 1);
  if (snake.eat(food)) {
    puntuacion+=80;
    foodPosition();
  }
  snake.update();
  snake.show();


  if (snake.endGame()) {
    background("white");
    text= createElement('h2', 'JUEGO TERMINADO');
    text.position(width-50,150);

    text2= createElement('h2', 'TU PUNTUACION FUE: ');
    text2.position(width-50, 200);

    text3= createElement('h1',puntuacion);
    text3.position(width, 250);

    textAlign(CENTER);
  }
}


function foodPosition() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (key == ' ') {

  }

}


