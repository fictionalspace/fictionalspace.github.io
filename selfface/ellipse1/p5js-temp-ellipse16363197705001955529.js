function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(204);
  fill(51); //black
  quad(250, 600, 190, 500, 150, 150, 100, 440)  //ponytail
  ellipse(250, 250, 340, 400);   // Back Hair
  fill(51); //black
  rect(125, 510, 250, 250, 20) //shirt
  fill(255, 204, 150); //skin
  rect(220, 465, 55, 55); //neck
  fill(255, 204, 150); //skin
  ellipse(250, 280, 290, 400);  // Face
   fill(500);
  ellipse(200, 250, 60, 40); //left eye
  ellipse(300, 250, 60, 40); //right eye
  fill(51,240); //black
  quad(100, 440, 190, 270, 250, 70, 90, 200);// left hair piece
  quad(100, 180, 172, 80, 220, 90, 150, 400);// smaller left hair piece
  quad(400, 390, 190, 70, 300, 80, 390, 200); //right hair piece
  quad(390, 150, 380, 400, 230, 70, 270, 90);//smaller right hair piece

  line(200, 350, 300, 350); // mouth
  point(300, 250); //left iris 
  point(200, 250); //right iris
stroke('black'); // Change the color
strokeWeight(6); // Make the points 16 pixels in size


}
