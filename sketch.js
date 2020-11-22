var bullet,wall,thickness;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200,20,5);
  bullet.shapeColor="black";
  wall=createSprite(1200,200,thickness,height/2);
bullet.velocityX=speed;

}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet,wall)) {
    bullet.velocityX=0;
    var damage=0.5* weight* speed*speed/(thickness* thickness*thickness);
  if(damage>10)
{
  wall.shapeColor="red";

}
if(damage<10){
  wall.shapeColor="green";
}
  } 
  text("damage="+damage,400,100);
  drawSprites();
}
function hasCollided(lbullet, lwall) {
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
return false;

}