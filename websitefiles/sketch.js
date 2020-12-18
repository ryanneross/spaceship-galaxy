let bg;
var x = 0;
var y = 0;
var w = 175;
var h = 102;
let ships = [];
var s = 0;



function setup() {
  // put setup code here
  bg = loadImage('assets/galaxy.jpg');
  createCanvas(1005, 750);
  ships[0] = loadImage('assets/spaceship0.png');
  ships[1] = loadImage('assets/spaceship1.png');
  ships[2] = loadImage('assets/spaceship3.png');
  ships[3] = loadImage('assets/spaceship4.png');
  ships[4] = loadImage('assets/spaceship6.png');
  ships[10] = loadImage('assets/spaceship10.png');
  ships[11] = loadImage('assets/spaceship11.png');
  ships[12] = loadImage('assets/spaceship13.png');
  ships[13] = loadImage('assets/spaceship14.png');
  ships[14] = loadImage('assets/spaceship16.png');
}

function draw() {
  // put drawing code here
  push();
  noTint();
    // if(keyIsDown(13)) {
    // tint(0, 153, 204);
    // }
  background(bg);
  pop();

  image(ships[s], x, y, w, h);

  if ( x > width) {
    x = -10;
  } else if (x < -100) {
    x = width;
  }

  if ( y > height) {
    y = -50;
  } else if (y < -50) {
    y = height;
  }

  if(keyIsDown(LEFT_ARROW)) {
    noTint();
    if (s <= 4) {
      s = s + 10;
    }
    x -= 5;
  }

  if(keyIsDown(RIGHT_ARROW)) {
    noTint();
    if (s > 4) {
      s = s - 10;
    }
    x += 5;
  }

  if(keyIsDown(13)) {
    tint(0, 153, 204);
    x += 10;
    y -= 10;
    w -= 10;
    h -= 10;
    if ( h < 10) {
      h = 10;
      w = 17;
    }

    // image(ships[s], x-10, y+10, w+10, h+10);

    // image(ships[s], x-5, y+5, w+5, h+5);
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
    noTint();
    w += 10;
    h += 10;
    //add max

     // c makes objects "closer" or larger
  }

  if (keyIsDown(70)) {
    noTint();
    w -= 10;
    h -= 10;
    if ( h < 10) {
      h = 10;
      w = 17;
    }
    //add min
  
    // f makes objects "further" or smaller
  }


}


function keyPressed() {
  if (keyCode === (32)) {
    noTint();
    s++;
    if (s > 4) {
      s = 0;
    } 
  }

}