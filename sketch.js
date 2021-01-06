var fixedrect,movingrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green";

  movingrect=createSprite(500,300,100,50);
  movingrect.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if((fixedrect.x-movingrect.x)<(fixedrect.width/2 +movingrect.width/2)){
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }
  else{
    fixedrect.shapeColor="green";
    movingrect.shapeColor="green";
  }
  drawSprites();
}