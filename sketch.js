var movingRect, fixedRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,40,60);
  fixedRect.debug = true;
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(300,200,60,40);
  movingRect.debug = true;
  movingRect.shapeColor = "blue";
}

function draw() {
  background(0);  
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
      fixedRect.shapeColor = "green";
      movingRect.shapeColor = "green";
    }
    else{
      fixedRect.shapeColor="blue";
      movingRect.shapeColor="blue";
    }
  
  drawSprites();
}