
var ground;
var player;
var  bgImage;
var health;

var helathe1 ;

var e1;
var bulletgroupenemies ;
var bulletgroupplayer ;

function preload (){
bgImage = loadImage("S1.jpg");
playerImage = loadImage("sprite_0.png");
playerImageflip = loadImage("player.png");

enemyImage = loadImage("enemy.png");
enemyImageflip = loadImage("enemy1.png");

bulletImage = loadImage("bullet.png");

}

function setup(){
    var canvas = createCanvas(1200,800);
     player = createSprite (200,600,60,60);
     player.addImage(playerImage);

    health = 500;
    healthe1= 100;

bulletgroupenemies = new Group();
bulletgroupplayer = new Group ();
    
}

function draw(){
    background(bgImage);

if(bulletgroupplayer.isTouching(e1)){
    healthe1 = healthe1 - 20
}


if(keyDown("space")){
    createbullets();
}
if(keyDown(UP_ARROW)){
            player.y = player.y-10;
}

if(keyDown(DOWN_ARROW)){
            player.y = player.y+10;
}
if(keyDown(LEFT_ARROW)){
           player.x = player.x-10;
            player.addImage(playerImageflip);
      
}

if(keyDown(RIGHT_ARROW)){
           player.x = player.x+10;
           player.addImage(playerImage);
        
}

console.log(player.position);
if(bulletgroupenemies.isTouching(player)){
    health = health - 10 ; 
}
if(health <= 0  ){
    player.destroy();
}
if(healthe1 <= 0 ){
    e1.destroy();
}

    drawSprites();
    textSize(28);
    textFont("Georgia");
    fill("red");
    text("HEALTH:"+health,1000,50)

    textSize(28);
    textFont("Georgia");
    fill("red");
    text("HEALTHe1:"+healthe1,50,50)
    enemies();
}

function createbullets () {
    var bullets = createSprite(player.x,player.y,10,20);
    bullets.addImage(bulletImage);
     bullets.debug = true;
      bullets.setCollider("rectangle",0,0,10,20);
    bullets.velocityX = 15;
    bullets.lifetime = 150;
    bulletgroupplayer.add(bullets);
}
function createbulletsfore1 (pos) {
    var bullets = createSprite(pos.x,pos.y,10,20);
     bullets.addImage(bulletImage);
     bullets.debug = true;
      bullets.setCollider("rectangle",0,0,10,20);
    bullets.velocityX = 15;
    bullets.lifetime = 150;
    bulletgroupenemies.add (bullets)
}
function createbulletsfore1flip (pos) {
    var bullets = createSprite(pos.x,pos.y,10,20);
     bullets.addImage(bulletImage);
      bullets.debug = true;
      bullets.setCollider("rectangle",0,0,10,20);
    bullets.velocityX = -15;
    bullets.lifetime = 150;
    bulletgroupenemies.add (bullets)
}



function enemies (){
     e1= createSprite(285 , 575 , 50 , 50 );
     e1.addImage(enemyImage);
     e1.setCollider("rectangle",0,0,200,100);
    e1.debug = true;
    e1.velocityX= 10;
    

    
    if (e1.isTouching(player) && player.x < e1.x ){
        e1.x = 285;
        e1.y = 575;
        e1.addImage(enemyImageflip);
        e1.shapeColor = "red";
        createbulletsfore1flip(e1);
    }
    if (e1.isTouching(player) && player.x > e1.x ){
        e1.x = 285;
        e1.y = 575;
        e1.shapeColor = "red";
        e1.addImage(enemyImage);
        createbulletsfore1(e1);
    }
    

     

}