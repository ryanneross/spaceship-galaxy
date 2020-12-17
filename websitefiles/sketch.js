let bg;
// let img;
var x = 0;
var y = 0;
var w = 175;
var h = 102;
let ships = [];
var s = 0;

// function preload() {
//   ships[0] = loadImage('assets/spaceship0.png');
//   ships[1] = loadImage('assets/spaceship1.png');
// }

function setup() {
  // put setup code here
  bg = loadImage('assets/galaxy.jpg');
  createCanvas(1005,671);
  // img = loadImage('assets/spaceship1.png');
  ships[0] = loadImage('assets/spaceship0.png');
  ships[1] = loadImage('assets/spaceship1.png');
}

function draw() {
  // put drawing code here
  background(bg);
  // image(img, x, y, w, h);
  image(ships[s], x, y, w, h);

  if ( x > width) {
    x = 0;
  } else if (x < -100) {
    x = width;
  }

  if ( y > height) {
    y = 0;
  } else if (y < -100) {
    y = height;
  }

  if(keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if(keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if(keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if(keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
}

function keyPressed() {
  if (keyCode === (32)) {
    s++;
    if (s > 1) {
      s = 0;
    }
}
}
