function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(204, 226, 225);    // Light blue color
  fill(255, 0, 0, 100);         // Red color
  triangle(10, 600, 600, 20, 600, 600);   // Red triangle
  fill(0, 0, 255, 100);         // Blue color
  triangle(0, 0, 600, 0, 0, 600);  // Blue triangle
  fill(51); //black
  quad(250, 600, 190, 500, 150, 150, 100, 440);  //ponytail
  ellipse(250, 250, 340, 400);   // Back Hair
  fill(50, 100, 250); //blue
  rect(125, 510, 250, 250, 50); //shirt
  rect(100, 520, 75, 100, 25); //left arm
  rect(310, 520, 75, 100, 25); //right arm
  fill(255, 204, 150); //skin
  rect(220, 465, 55, 55); //neck
  fill(255, 204, 150); //skin
  ellipse(250, 280, 290, 400);  // Face
   fill(500);

  fill(500);
  ellipse(200, 250, 60, 40); //left eye
  fill(300, 150, 50); // eye color
  circle(200, 250, 40); //iris1
  fill(0,0,0,150); // eye shade
  circle(200, 250, 40); //iris2
  
  line(175, 240, 225, 240); // left eye lid
  line(180, 235, 220, 235); // right eye lid
  fill(500);
  ellipse(300, 250, 60, 40); //right eye
  fill(300, 150, 50); // eye color
  circle(300, 250, 40); //iris1
  fill(0,0,0,150); //eye shade
  circle(300, 250, 40);//iris2
  line(275, 240, 325, 240); // right eye lid
  line(280, 235, 320, 235); // right eye lid 2
    
  fill(51,240); //black
  quad(100, 440, 190, 270, 250, 70, 90, 200);// left hair piece
  quad(100, 180, 172, 80, 220, 90, 150, 400);// smaller left hair piece
  quad(400, 390, 190, 70, 300, 80, 390, 200); //right hair piece
  quad(390, 150, 380, 400, 230, 70, 270, 90);//smaller right hair piece

  line(200, 360, 300, 360); // mouth
  line(230, 370, 270, 370); // mouth
  circle(300, 250, 10);//right iris
  point(300, 250, 10);// right dot
  circle(200, 250, 10); //left iris
   point(200, 250, 10);// light dot
stroke('black'); // Change the color
strokeWeight(6); // Make the points 16 pixels in size




}
