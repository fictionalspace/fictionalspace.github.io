//Foraging Woods
//Coding for Artists course at East Hampton

var ballx = 300;
var bally = 300;
var y=-20;
var x=200;
var speed = 2;
var ballSize = 40;
var score = 0; 
var img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16,
img17, img18, img19, img20, img21, img22, img23, img24, img25;
var c; // our text color as a variable, set in setup
var gameState = "L1";
//var mouseIsClicked = false;


    function mousePressed(){
  if(gameState == "L1"){
    gameState = "L2";
  }
  if(gameState == "L8"){
    gameState = "L9";
    }
    }
function preload() {
 img1 = loadImage('https://fictionalspace.github.io/foragingwoods/fw_start.jpg');
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
     img18 = loadImage('https://fictionalspace.github.io/foragingwoods/fw_mainforest.jpg');
     img19 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_fruitberryforest.jpg');
     img20 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_river.jpg');
     img21 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_flowerfield.jpg');
    img22 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_flowerfieldmemo.jpg');
    img23 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_deepwoods1.jpg');
    img24 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_eyedyellow.png');
    img25 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_cornflowerwhite.png');
    img26 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_starrynight.jpg');
    img27 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_starnightmemo.jpg');
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
    } //intro
    
    if(gameState =="L2"){
    background(img18);
    //cursor('arrow');
      levelTwo();
    }//main
    
      if(gameState =="L3"){
    background(img19);
    cursor('arrow');
      levelThree();
    }//fruit berry forest
    
    if(gameState =="L4"){
    background(img2);
    fill(148, 221, 255, 50);
      levelFour();
    }//berry picking
    
     if(gameState =="L5"){
    background(img3);
    noCursor();
      levelFive();
    }//fruit picking
    
     if(gameState =="L6"){
    background(img18);
    cursor(ARROW);
      levelSix();
    }//mainforest
    
    if(gameState =="L7"){
    background(img21);
    cursor('https://fictionalspace.github.io/foragingwoods/foragingwoods-mabel125.png');
      levelSeven();
    }//flower picking
    
    if(gameState =="L8"){
    background(img22);
    cursor('arrow');
      levelEight();
    }//flower memo
    
    if(gameState =="L9"){
    background(img23);
    cursor(ARROW);
      levelNine();
    }//it's dark time to camp for the night
    
    if(gameState =="L10"){
    background(img6);
    cursor('https://fictionalspace.github.io/foragingwoods/foragingwoods-wood.png');
      levelTen();
    }//campfire
    
     if(gameState =="L11"){
    background(img7);
    cursor('https://fictionalspace.github.io/foragingwoods/foragingwoods-wood.png');
      levelEleven();
     }//campfire starting up
     
     if(gameState =="L12"){
       background(img8);
         levelTwelve();
     }
         if(gameState =="L13"){
       background(img9);
         levelThirteen();
      }  
      if(gameState =="L14"){
       background(img10);
         levelFourteen();
      }  
      
      if(gameState =="L15"){
       background(img26);
         levelFifteen();
      }  
      
      if(gameState =="L16"){
        background(img27);
        levelSixteen();
    text(("Score: " + score),width/2,40);
      }
} //end of draw





function levelOne(){
  text("DEMO", width/2, height-20);
    }
    if(score>= 1){
      gameState = "L2";
} // end of intro

function levelTwo(){
  text("Main Forest", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-25);
    bally = random(height-25);
    score = score + 1;
  }
  if(score>= 1){
    gameState = "L3";
  }
  line(ballx, bally, mouseX,mouseY);
  image(img11, ballx, bally);
  //ellipse(ballx,bally, mouseX, mouseY);
  
} //end of level 1 - start of berry picking

function levelThree(){
  text("Level 2!", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-25);
    bally = random(height-25);
    score = score + 1;
  }
  if(score>= 5){
    gameState = "L4";
  }
  line(ballx, bally, mouseX,mouseY);
  image(img11, ballx, bally);
} //end of berry picking intro


function levelFour(){
  text("Level 2!", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-25);
    bally = random(height-25);
    score = score + 1;
  }
  if(score>= 10){
    gameState = "L5";
  }
  line(ballx, bally, mouseX,mouseY);
  image(img11, ballx, bally);
  
} //end of level 3 - apple picking

function levelFive(){
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
  
  if(score>= 15){
    gameState = "L6";
  }
  
  }
  
} 
function pickRandom() {
    x=random(20,width-20);
  
} //end of apple picking
  
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
  if(score>= 16){
    gameState ="L7";
    //background (random(255));
  }
  image(img24, ballx, bally);

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
  if(score>= 22){
    gameState ="L8";
    //background (random(255));
  }
  image(img25, ballx, bally);
  //line(ballx, bally, mouseX,mouseY);
  //ellipse(ballx,bally,mouseX,mouseY);
  
} //end of flower picking

function levelEight(){
  text("You've obtained a small bouquet of flowers", width/2, height-20);
  }
  if(score>= 22){
    gameState ="L9";
    //background (random(255));
 
  
} //end of flower back to main forest

function levelNine(){
  text("It's getting late, set up camp for the night", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-25);
    bally = random(height-25);
    score = score + 1;
  }
  if(score>= 27){
    gameState ="L10";
    //background (random(255));
  }
  image(img17, ballx, bally);
  //line(ballx, bally, mouseX,mouseY);
  //ellipse(ballx,bally,mouseX,mouseY);
  
} //end of level 5.4

function level10(){
  text("Let's start the campfire", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-25);
    bally = random(height-25);
    score = score + 1;
  }
  if(score>= 35){
    gameState ="L11";
    //background (random(255));
  }
  image(img14, ballx, bally);
  //line(ballx, bally, mouseX,mouseY);
  //ellipse(ballx,bally,mouseX,mouseY);
  

} //end 
