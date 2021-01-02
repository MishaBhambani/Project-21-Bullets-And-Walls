var bullet;
var wall;
var thickness;
var speed;
var weight;
var damage;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);

  bullet = createSprite(50, 200, 10, 5);
  bullet.shapeColor = color(0, 0, 0);
  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = color(80, 80, 80);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);

  if(bullet.collide(wall)){
    bullet.velocityX = 0;
    damage = (0.5 * weight * speed * speed)/ (thickness*thickness*thickness);

    if(damage < 10){
      bullet.shapeColor = color(0, 255, 0);
    } 
    else{
      bullet.shapeColor = color(255, 0, 0);
    }
}

  console.log(damage);
  drawSprites();
}