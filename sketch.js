var fixedRect, movingRect;
var o1,o2,o3,o4;




function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY=-1;
  fixedRect.velocityX=-1;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.velocityY=1;
  movingRect.velocityX=1;
  
  
  o1 = createSprite(100,100,50,50);
  o1.shapeColor = "green";

  o2 = createSprite(200,100,50,50);
  o2.shapeColor = "green";

  o3 = createSprite(300,100,50,50);
  o3.shapeColor = "green";

  o4 = createSprite(400,100,50,50);
  o4.shapeColor = "green";

}



function draw() {
  background(0,0,0);  
  o1.x = World.mouseX;
  o1.y = World.mouseY;

 if (isTouching(o1, o2)){
  o1.shapeColor = "red";
  o2.shapeColor = "red";
 }
 

 else {
  o1.shapeColor = "green";
  o2.shapeColor = "green";
}

bounceOff(movingRect,fixedRect);
  drawSprites();
}
