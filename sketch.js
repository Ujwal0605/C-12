var ground,groundImage;
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation('trex1.png', 'trex3.png', 'trex4.png')
groundImage = loadImage('ground2.png')
cloudImage = loadImage('cloud.png')
}

function setup(){
  createCanvas(600,200)
  
trex = createSprite(50,160,20,50); 
trex.addAnimation('running', trex_running);
edges=createEdgeSprites();
trex.scale=0.5;
trex.x= 50;
ground=createSprite(200,180,400,20)
ground.addImage('ground', groundImage)

invisibleGround=createSprite(200,190,400,10)
invisibleGround.visible=false

var ran = random(10,16);
console.log(ran);
}

function draw(){
  background("white")

  ground.velocityX= -2;
console.log(trex.y)

if(ground.x<0){
  ground.x=ground.width/2;
}
if(keyDown('SPACE') && trex.y>160){
trex.velocityY= -10
}
trex.velocityY=trex.velocityY+0.5
trex.collide(invisibleGround);
spawnClouds();

  drawSprites();

}
function spawnClouds(){
  if(frameCount%60 === 0){
cloud = createSprite(600,100,40,10);
cloud.addImage(cloudImage)
cloud.y=Math.round(random(10,60));
cloud.scale = 0.4;
cloud.velocityX = -3;
cloud.depth = trex.depth;
trex.depth=trex.depth+1;
  }
}