//Foraging Woods
//Demo of Foraging Woods Concept

var ballx = 300;
var bally = 300;
var y=-20;
var x=200;
var speed = 2;
var ballSize = 40;
var score = 0; 
var img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16,
img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33;
var c; // our text color as a variable, set in setup
var gameState = "L1";

    function mouseClicked(){
  if(gameState == "L1"){
    gameState = "L2";
  }
  if(gameState == "L8"){
    gameState = "L9";
   }
   if(gameState == "L17"){
     gameState = "L18";
     return false;
   }
   if(gameState == "L18"){
     gameState = "L19";
     return false;
    }
    if(gameState == "L19"){
    gameState = "L20";
    return false;
    }
     if(gameState == "L20"){
    gameState = "L21";
    return false;
     }
      if(gameState == "L21"){
    gameState = "L22";
    return false;
      }
     if(gameState == "L22"){
    gameState = "L23";
    return false;
     }
     if(gameState == "L23"){
    gameState = "L24";
    return false;
     }
     if(gameState == "L24"){
    gameState = "L25";
    return false;
     }
     if(gameState == "L25"){
    gameState = "L26";
    return false;
     }
     if(gameState == "L26"){
    gameState = "L27";
    return false;
     }
     if(gameState == "L27"){
    gameState = "L28";
    return false;
     }
     if(gameState == "L28"){
    gameState = "L29";
    return false;
     }
     if(gameState == "L29"){
    gameState = "L30";
    return false;
     }
     if(gameState == "L30"){
    gameState = "L31";
    return false;
     }
     if(gameState == "L31"){
    gameState = "L32";
    return false;
     }
     if(gameState == "L32"){
    gameState = "L33";
    return false;
     }
     if(gameState == "L33"){
    gameState = "L34";
    return false;
     }
     if(gameState == "L34"){
    gameState = "L1";
    return false;
     }
     else if(gameState == "L1"){
    gameState = "L2";
    return false;
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
    img23 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_deepwoods1.jpg'); //deepwods1 - dark 3
    img24 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_eyedyellow.png');
    img25 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_cornflowerwhite.png');
    img26 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_starrynight.jpg');
    img27 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_starnightmemo.jpg');
    img28 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_end.jpg');
    img29 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_deepwoodsclear.jpg');//cleardeepwoods dark 1
    img30 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_deepwoods1clear.jpg');//deepwoods1clear dark 2
    img31 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_deepforest2.jpg');// dark 4
    img32 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_grave.jpg'); // grave
    img33 = loadImage ('https://fictionalspace.github.io/foragingwoods/fw_deepwoodsend.jpg');//end of woods
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
      text(("Score: " + score),width/2,40);
     cursor('https://fictionalspace.github.io/foragingwoods/foragingwoods-mabel125.png');
      levelOne();
    } //intro
    
    if(gameState =="L2"){
    background(img18);
    text(("Score: " + score),width/2,40);
    //cursor('arrow');
      levelTwo();
    }//main
    
      if(gameState =="L3"){
    background(img19);
    text(("Score: " + score),width/2,40);
    cursor('arrow');
      levelThree();
    }//fruit berry forest
    
    if(gameState =="L4"){
    background(img2);
    text(("Score: " + score),width/2,40);
    fill(148, 221, 255, 50);
      levelFour();
    }//berry picking
    
     if(gameState =="L5"){
    background(img3);
    text(("Score: " + score),width/2,40);
    noCursor();
      levelFive();
    }//fruit picking
    
     if(gameState =="L6"){
    background(img18);
    text(("Score: " + score),width/2,40);
    cursor('https://fictionalspace.github.io/foragingwoods/foragingwoods-mabel125.png');
      levelSix();
    }//mainforest
    
    if(gameState =="L7"){
    background(img21);
    text(("Score: " + score),width/2,40);
    cursor('https://fictionalspace.github.io/foragingwoods/foragingwoods-mabel125.png');
      levelSeven();
    }//flower picking
    
    if(gameState =="L8"){
    background(img22);
    text(("Score: " + score),width/2,40);
    cursor(ARROW);
      levelEight();
    }//flower memo
    
    if(gameState =="L9"){
    background(img18);
    text(("Score: " + score),width/2,40);
    cursor('https://fictionalspace.github.io/foragingwoods/foragingwoods-mabel125.png');
      levelNine();
    }//main forest to collect fish
    
    if(gameState =="L10"){
    background(img20);
    text(("Score: " + score),width/2,40);
    cursor('https://fictionalspace.github.io/foragingwoods/foragingwoods-mabel125.png');
      levelTen();
    }//time to fish
    
     if(gameState =="L11"){
    background(img4);
    text(("Score: " + score),width/2,40);
    cursor('https://fictionalspace.github.io/foragingwoods/foragingwoods-mabel125.png');
      levelEleven();
     }//fishing deeper
     
     if(gameState =="L12"){
       background(img23);
       text(("Score: " + score),width/2,40);
       cursor('https://fictionalspace.github.io/foragingwoods/foragingwoods-mabel125.png');
         levelTwelve();
     }//it's getting dark now time to camp
      if(gameState =="L13"){
       background(img6);
       text(("Score: " + score),width/2,40);
       cursor('https://fictionalspace.github.io/foragingwoods/foragingwoods-wood.png');
         levelThirteen();
      }  
      if(gameState =="L14"){
       background(img7);
       text(("Score: " + score),width/2,40);
         levelFourteen();
      }  
      
      if(gameState =="L15"){
       background(img8);
       text(("Score: " + score),width/2,40);
         levelFifteen();
      }  
      
      if(gameState =="L16"){
        background(img9);
        text(("Score: " + score),width/2,40);
        levelSixteen();
        
      }
      
       if(gameState =="L17"){
        background(img10);
        text(("Score: " + score),width/2,40);
        cursor(ARROW);
        levelSeventeen();
        
      }//eating dinner now
      
       if(gameState =="L18"){
        background(img26);
        text(("Score: " + score),width/2,40);
        levelEighteen();
      }//you look up...
      
       if(gameState =="L19"){
        background(img27);
        text(("Score: " + score),width/2,40);
        levelNineteen();
      }//...(starry night click
      
       if(gameState =="L20"){
        background(img27);
        text(("Score: " + score),width/2,40);
        levelTwenty();
      }
       if(gameState =="L21"){
        background(img27);
        text(("Score: " + score),width/2,40);
        levelTwentyone();
      }
       if(gameState =="L22"){
        background(img18);
        text(("Score: " + score),width/2,40);
        levelTwentytwo();
      }//main forest to deep woods
      
       if(gameState =="L23"){
        background(img29);
        text(("Score: " + score),width/2,40);
        levelTwentythree();
      }//into the dark woods
      
       if(gameState =="L24"){
        background(img30);
        text(("Score: " + score),width/2,40);
        levelTwentyfour();
      }//you feel nervous
      
       if(gameState =="L25"){
        background(img30);
        text(("Score: " + score),width/2,40);
        levelTwentyfive();
      }//you aren't sure
      
       if(gameState =="L26"){
        background(img23);
        text(("Score: " + score),width/2,40);
        levelTwentysix();
      }//but...
      
       if(gameState =="L27"){
        background(img23);
        text(("Score: " + score),width/2,40);
        levelTwentyseven();
      }//you know
      
       if(gameState =="L28"){
        background(img23);
        text(("Score: " + score),width/2,40);
        levelTwentyeight();
      }//surived
      
       if(gameState =="L29"){
        background(img23);
        text(("Score: " + score),width/2,40);
        levelTwentynine();
      }//time to vist
      
       if(gameState =="L30"){
        background(img31);
        text(("Score: " + score),width/2,40);
        levelThirtytwo();
      }
       if(gameState =="L31"){
        background(img33);
        text(("Score: " + score),width/2,40);
        levelThirtyone();
      }
       if(gameState =="L32"){
        background(img32);
        text(("Score: " + score),width/2,40);
        levelThirtytwo();
      }
       if(gameState =="L33"){
        background(img32);
        text(("Score: " + score),width/2,40);
        levelThirtythree();
      }
       if(gameState =="L34"){
        background(img28);
        text(("Score: " + score),width/2,40);
        levelThirtyfour();
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
    ballx = random(width-50);
    bally = random(height-50);
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
  text("Let's go looking for berries and fruits!", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-50);
    bally = random(height-50);
    score = score + 1;
  }
  if(score>= 5){
    gameState = "L4";
  }
  line(ballx, bally, mouseX,mouseY);
  image(img11, ballx, bally);
} //end of berry picking intro


function levelFour(){
  text("Let's pick up berries first!", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-50);
    bally = random(height-50);
    score = score + 1;
  }
  if(score>= 10){
    gameState = "L5";
  }
  line(ballx, bally, mouseX,mouseY);
  image(img11, ballx, bally);
  
} //end of level 3 - apple picking

function levelFive(){
   text("Now for the apples!", width/2, height-20);
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
  text("Let's go into the flower field", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-50);
    bally = random(height-50);
    
  
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
  text("Pick up some flowers", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-50);
    bally = random(height-50);
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
 
  
} //end of flower back to main forest

function levelNine(){
   text("Let's go fishing for more food", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-50);
    bally = random(height-50);
    score = score + 1;
  }
  if(score>= 23){
    gameState ="L10";
    //background (random(255));
  }
  image(img13, ballx, bally);
  //line(ballx, bally, mouseX,mouseY);
  //ellipse(ballx,bally,mouseX,mouseY);
  
} 

function levelTen(){
 text("Let's go fishing for more food", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-50);
    bally = random(height-50);
    score = score + 1;
  }
  if(score>= 27){
    gameState ="L11";
    //background (random(255));
  }
  image(img13, ballx, bally);
  //line(ballx, bally, mouseX,mouseY);
  //ellipse(ballx,bally,mouseX,mouseY);
  
} //fishing end

function levelEleven(){
   text("A couple more fishes shall do", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-50);
    bally = random(height-50);
    score = score + 1;
  }
  if(score>= 33){
    gameState ="L12";
   
  }
  image(img13, ballx, bally);
  //line(ballx, bally, mouseX,mouseY);
  

}//time for a night

function levelTwelve(){
  text("It's getting late, let's get ready to camp", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-50);
    bally = random(height-50);
    score = score + 1;
  }
  if(score>= 40){
    gameState ="L13";
   
  }
  image(img17, ballx, bally);
  line(ballx, bally, mouseX,mouseY);
  //ellipse(ballx,bally,mouseX,mouseY);
  
}//getting wood

function levelThirteen(){
   text("Let's start a campfire", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-50);
    bally = random(height-50);
    score = score + 1;
  }
  if(score>= 44){
    gameState ="L14";
   
  }
  image(img14, ballx, bally);
  line(ballx, bally, mouseX,mouseY);
  //ellipse(ballx,bally,mouseX,mouseY);
  
}//fire 5v1

function levelFourteen(){
   text("It's starting to light up", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-50);
    bally = random(height-50);
    score = score + 1;
  }
  if(score>= 48){
    gameState ="L15";
   
  }
  image(img14, ballx, bally);
  line(ballx, bally, mouseX,mouseY);
  //ellipse(ballx,bally,mouseX,mouseY);
  
}//fire 5v2

function levelFifteen(){
   text("Almost there", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-50);
    bally = random(height-50);
    score = score + 1;
  }
  if(score>= 52){
    gameState ="L16";
   
  }
  image(img14, ballx, bally);
  
}//fire 5v3

function levelSixteen(){
 text("A few more sparks", width/2, height-20);
  var disToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if(disToBall < ballSize/2){
    ballx = random(width-50);
    bally = random(height-50);
    score = score + 1;
  }
  if(score>= 56){
    gameState ="L17";
   
  }
  image(img14, ballx, bally);
  
}//fire 5v4

function levelSeventeen(){
  text("You cooked dinner and ate for the night", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L18";
}//time for dinner

function levelEighteen(){
   text("...", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L19";
 
}

function levelNineteen(){
  text("You feel you have everything ready for tomorrow dawn", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L20";
}

function levelTwenty(){
  text("...", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L21";
}

function levelTwentyone(){
  text("you rest for the night", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L22";
}

function levelTwentytwo(){
 text("...it's time, time to head to the deep forest", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L23"; 
}

function levelTwentythree(){
  text("into the dark woods", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L24";
}

function levelTwentyfour(){
  text("...you feel nervious and afraid", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L25";
}

function levelTwentyfive(){
  text("you aren't sure if you should keep going", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L26";
}

function levelTwentysix(){
  text("but...you've come this far", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L27";
}

function levelTwentyseven(){
  text("you know it'll be ok", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L28";
}

function levelTwentyeight(){
  text("you've made it this far and survived the night", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L29";
}

function levelTwentynine(){
  text("and now it's time to visit them", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L30";
}

function levelThirty(){
  text("you see the light as if guiding you to follow it", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L31";
}

function levelThirtyone(){
  text("you've reached the end", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L32";
}

function levelThirtytwo(){
  text("...it's been a while, hasn't it", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L33";
}

function levelThirtythree(){
  text("old pal.", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L34";
}

function levelThirtyfour(){
  text("Thank you for playing, refresh to play again", width/2, height-20);
  }
  if(score>= 53){
    gameState ="L34";
}
