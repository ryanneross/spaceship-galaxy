let bg;
// let img;
var x = 0;
var y = 0;
var w = 175;
var h = 102;
let ships = [];
var s = 0;
// this.history = [];



function setup() {
  // put setup code here
  // push();
  // noTint();
  bg = loadImage('assets/galaxy.jpg');
  createCanvas(1005, 750);
  // pop();
  ships[0] = loadImage('assets/spaceship0.png');
  ships[1] = loadImage('assets/spaceship1.png');
  ships[11] = loadImage('assets/spaceship10.png');
  ships[10] = loadImage('assets/spaceship10.png');
}

function draw() {
  // put drawing code here
  push();
  noTint();
  background(bg);
  // image(img, x, y, w, h);
  pop();
  // push();
  // noTint();

  image(ships[s], x, y, w, h);
  // pop();

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
    // scale left
    // translate(width, 0);
    // scale(-1,1.0);
    noTint();
    if (s <= 1) {
      s = s + 10;
    }
    // scale isn't working because it also changes position
    x -= 5;
  }

  if(keyIsDown(RIGHT_ARROW)) {
    // scale right
    // translate(width,0);
    // scale(1.0,1.0);
    // tint(0, 153, 204);
    noTint();
    if (s > 1) {
      s = s - 10;
    }
    // scale isn't working because it also changes position
    x += 5;
  }

  if(keyIsDown(13)) {
    // scale right
    // translate(width,0);
    // scale(1.0,1.0);
    // push();
    tint(0, 153, 204);
    // image(ships[s], x, y, w, h);
    // scale isn't working because it also changes position
    x += 10;
    y -= 10;
    w -= 10;
    h -= 10;

    image(ships[s], x-10, y+10, w+10, h+10);

    // image(ships[s], x-5, y+5, w+5, h+5);
    // pop();
  }
  
  if(keyIsDown(UP_ARROW)) {
    noTint();
    y -= 5;
  }

  if(keyIsDown(DOWN_ARROW)) {
    noTint();
    y += 5;
  }

  if (keyIsDown(67)) {
    w += 10;
    h += 10;
    //add max

     // c makes objects "closer" or larger
  }

  if (keyIsDown(70)) {
    w -= 10;
    h -= 10;
    //add min
  
    // f makes objects "further" or smaller
  }


}


function keyPressed() {
  if (keyCode === (32)) {
    s++;
    if (s > 1) {
      s = 0;
    } 
  }

  // push();
  // if (keyCode === (13)) {
  //   tint(0, 153, 204);
  //   image(ships[s], x, y, w, h);
  //   x += 50;
  //   y -= 50;
  //   image(ships[s], x, y, w, h);
  //   tint(0, 153, 204);
  //   // frameRate(10);
  //   tint(0, 153, 204);
  //   // var v= createVector (this.x, this.y);
  //   // this.history.push(v);
  //   // for (var i = 0; i < this.history.length; i++){
  //   //   var loc = this.history[i];
  //   //   ellipse (loc.x, loc.y, 15, 15);
  //   // }
  // }
  // pop();
}