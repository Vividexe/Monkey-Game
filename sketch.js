
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,survivalTime;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,380,900,60);
  ground.velocityX = -4
  
  console.log(monkey.y);
  
  score = 0;
  survivalTime = 0;
}


function draw() {
  background("green");
  
  monkey.velocityY = monkey.velocityY + 1;
  monkey.collide(ground); 
  ground.x=ground.width/2
  if(keyDown("space") && monkey.y >= 310){
    monkey.velocityY = -18;
  }
  if(World.frameCount%80 == 0){
    food();
  }
  if(World.frameCount%300 == 0){
    rocks();
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,300,50)
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime = Math.ceil(frameCount/60);
  text("Survival time: "+survivalTime,100,50)
  
  
  drawSprites();
}
function food(){
  banana = createSprite(360,random(120,220),20,20)
  banana.addImage(bananaImage)
  banana.scale = 0.1;
  banana.velocityX = -6;
  banana.setLifeTime = 10;
  
}
function rocks(){
  obstacle = createSprite(400,330,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -5;
  obstacle.scale = 0.15;
  obstacle.setLifeTime = 10;
}