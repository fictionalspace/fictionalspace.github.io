//Foraging Woods
//Coding for Artists course at East Hampton

var ballx = 300;
var bally = 300;
var y=-20;
var x=200;
var speed = 2;
var ballSize = 40;
var score = 0; 
var img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16;
var c; // our text color as a variable, set in setup
var gameState = "L1";



function preload() {
 img1 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoodsintro.jpg');
 img2 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoods1.jpg');
 img3 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoods2.jpg');
 img4 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoods3.jpg');
 img5 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoods4.jpg');
 img6 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoods5v1.jpg');
 img7 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoods5v2.jpg');
 img8 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoods5v3.jpg');
 img9 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoods5v4.jpg');
 img10 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoodsend.jpg');
     img11 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoods-blackberry.png');
     img12 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoods-apple.png');
     img13 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoods-fish.png');
     img14 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoods-flint.png');
   img15 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoods-mabel-lvl2.1.png');
   img16 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoods-mabel125.png');
   img17 = loadImage('https://fictionalspace.github.io/foragingwoods/foragingwoods-wood.png');
    
}

function setup(){
  createCanvas(1000, 600);
  let c = color (200, 100, 100); //text color
  fill (c);
  textAlign(CENTER);
  textSize(20);
  
  
} //end of setup

function draw () {

    if(gameState =="L1"){
      background(img1);
     cursor('https://fictionalspace.github.io/foragingwoods/foragingwoods-mabel125.png');
      levelOne();
    }
    if(gameState =="L2"){
    background(img2);
    cursor('arrow');
      levelTwo();
    }
      if(gameState =="L3"){
    background(img3);
    cursor('arrow');
      levelThree();
    }
    if(gameState =="L4"){
    background(img4);
    cursor('https://fictionalspace.github.io/foragingwoods/foragingwoods-mabel125.png');
    fill(148, 221, 255, 50);
      levelFour();
    }
       if(gameState =="L5"){
    background(img5);
    cursor('https://fictionalspace.github.io/foragingwoods/foragingwoods-mabel125.png');
      levelFive();
    }
     if(gameState =="L6"){
    background(img6);
    cursor('arrow');
      levelSix();
    }
    if(gameState =="L7"){
    background(img7);
    cursor('arrow');
      levelSeven();
    }
    if(gameState =="L8"){
    background(img8);
    cursor('arrow');
      levelEight();
    }
    if(gameState =="L9"){
    background(img9);
    cursor('arrow');
      levelNine();
    }
    if(gameState =="L10"){
    background(img10);
    cursor('arrow');
      levelTen();
    }
    text(("Score: " + score),width/2,40);
} //end of draw





function levelOne(){
    text("Grab the berry to start!", width/2,height-20);
    var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
    if(distToBall < ballSize/2){
      ballx = random(width-25);
      bally = random(height-25);
      score = score +1;
    }
    
    if(score>= 1){
      gameState = "L2";
    }
    
    line(ballx, bally, mouseX, mouseY);
    //ellipse(ballx, bally, ballSize, ballSize);
    image(img11, ballx, bally);
    
    
} // end of intro

function levelTwo(){
  text("Level 1!", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-25);
    bally = random(height-25);
    score = score + 1;
  }
  if(score>= 10){
    gameState = "L3";
  }
    
  
  line(ballx, bally, mouseX,mouseY);
  image(img11, ballx, bally);
  //ellipse(ballx,bally, mouseX, mouseY);
  
} //end of level 1

function levelThree(){
  text("Level 2!", width/2, height-20);
    rectMode(CENTER);
    image(img15, mouseX, height-180, 175, 150);
    image(img12, x,y,55);
    cursor('arrow');
    y+=speed;
    if(y>height){
    }
    
    if(y>height-150 &&x>mouseX-75 &&
  x<mouseX+50){
    y=-20;
   
    score = score + 1;
    speed +=0.3;
    x = random(width);
  }
  if(y==-20){
    pickRandom();
  
  if(score>= 20){
    gameState = "L4";
  }
  
  }
  
} //end of level 2 collecting apples
function pickRandom() {
    x=random(20,width-20);
}


function levelFour(){
  text("Level 3!", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-25);
    bally = random(height-25);
    score = score + 1;
  }
  if(score>= 25){
    gameState = "L5";
    //background (random(255));
  }
  image(img13, ballx, bally);
  line(ballx, bally, mouseX,mouseY);
  ellipse(ballx,bally,mouseX,mouseY);
  
} //end of level 3 fishing

function levelFive(){
    text("Level 5!", width/2, height-20);
   var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
    if(distToBall < ballSize/2){
      ballx = random(width-25);
      bally = random(height-25);
      score = score +1;
    }
  if(score>= 40){
    gameState ="L7";
    //background (random(255));
  }
  image(img17, ballx, bally);
  //line(ballx, bally, mouseX,mouseY);
  //ellipse(ballx,bally,mouseX,mouseY);
  
} //end of level 4 looking for wood
  
  function levelSix(){
  text("Level 5!", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-25);
    bally = random(height-25);
    
    var c= createSprite(
   random(100, width-100),
   random(100, width-100),
   10, 10);
    
    score = score + 1;
  }
  if(score>= 35){
    gameState ="L7";
    //background (random(255));
  }
  image(img14, ballx, bally);
  cursor('arrow');
  //line(ballx, bally, mouseX,mouseY);
  //ellipse(ballx,bally,mouseX,mouseY);
  
} //end of level 5.1

function levelSeven(){
  text("Level 5!", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-25);
    bally = random(height-25);
    score = score + 1;
  }
  if(score>= 40){
    gameState ="L8";
    //background (random(255));
  }
  image(img14, ballx, bally);
  //line(ballx, bally, mouseX,mouseY);
  //ellipse(ballx,bally,mouseX,mouseY);
  
} //end of level 5.2

function levelEight(){
  text("Level 5!", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-25);
    bally = random(height-25);
    score = score + 1;
  }
  if(score>= 45){
    gameState ="L9";
    //background (random(255));
  }
  image(img14, ballx, bally);
  //line(ballx, bally, mouseX,mouseY);
  //ellipse(ballx,bally,mouseX,mouseY);
  
} //end of level 5.3

function levelNine(){
  text("Level 5!", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-25);
    bally = random(height-25);
    score = score + 1;
  }
  if(score>= 50){
    gameState ="L10";
    //background (random(255));
  }
  image(img14, ballx, bally);
  //line(ballx, bally, mouseX,mouseY);
  //ellipse(ballx,bally,mouseX,mouseY);
  
} //end of level 5.4

function level10(){
 text("Game Completed!", width/2, height-20);
 fill(0, 102, 153);

  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-25);
    bally = random(height-25);
    score = score + 1;
  }
  if(score>= 50){
    gameState ="L10";
    //background (random(255));
  }
  //image(img14, ballx, bally);
  //line(ballx, bally, mouseX,mouseY);
  //ellipse(ballx,bally,mouseX,mouseY);
  
} //end 
