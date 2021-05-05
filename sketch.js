// declaring variable for background image
var backgroundImage;

// declarning variables for sprites
var cat, catSitting, catTeasing, catHappy;
var mouse, mouseSitting, mouseGettingTeased, mouseHappy;

function preload() {
    // load the images here
    backgroundImage = loadImage("images/garden.png");
    
    catSitting = loadImage("images/cat1.png");
    catTeasing = loadAnimation("images/cat2.png", "images/cat3.png");
    catHappy = loadImage("images/cat4.png");

    mouseSitting = loadImage("images/mouse1.png");
    mouseTeasing = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseHappy = loadImage("images/mouse4.png");
}

function setup(){
    // creating canvas
    createCanvas(700,500);

    //create tom and jerry sprites here
    cat = createSprite(575, 400, 10, 10);
    cat.addImage(catSitting);
    cat.scale = 0.15;

    mouse = createSprite(75, 400, 10, 10);
    mouse.addImage(mouseSitting);
    mouse.scale = 0.1;
}

function draw() {
    // adding the background image
    background(backgroundImage);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        // changing cat animation
        cat.addAnimation("cathappy", catHappy);
        cat.changeAnimation("cathappy");

        // changing mouse animation
        mouse.addAnimation("mousehappy", mouseHappy);
        mouse.changeAnimation("mousehappy");

        // setting the velocity of cat to 0
        cat.velocityX = 0;
    }

    // drawing sprites
    drawSprites();
}


function keyPressed(){
      if(keyCode === LEFT_ARROW){
      cat.addAnimation("catTeasing", catTeasing);
      cat.changeAnimation("catTeasing");
      cat.velocityX = -5;

      mouse.addAnimation("mouseTeasing", mouseTeasing);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }
}
