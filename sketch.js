var issImg, backgroundImg;
var spaceCraft1Img, spaceCraft2Img, spaceCraft3Img, spaceCraft4Img;
var iss, spacecraft;
var hasDocked= false;

function preload(){
  issImg= loadImage("iss.png");
  backgroundImg= loadImage("spacebg.jpg");
  spaceCraft1Img= loadImage("spacecraft1.png");
  spaceCraft2Img= loadImage("spacecraft2.png");
  spaceCraft3Img= loadImage("spacecraft3.png");
  spaceCraft4Img= loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  
  iss= createSprite(400,150,50,50);
  iss.addImage("iss", issImg);
  iss.scale= 0.4;

  spacecraft= createSprite(300,300,50,50);
  spacecraft.addImage("spacecraft", spaceCraft1Img);
  spacecraft.scale= 0.3;
}

function draw() {
  background(backgroundImg);  

  if(!hasDocked){
    spacecraft.setPosition = Math.round(random(40,760));
    if(keyCode=== RIGHT_ARROW) {
      spacecraft.x= spacecraft.x+2;
      spacecraft.changeAnimation("spaceCraft4Img",spaceCraft4Img);
    }

    if(keyCode=== LEFT_ARROW){
      spacecraft.x= spacecraft.x-2;
      spacecraft.changeAnimation("spaceCraft3Img", spaceCraft3Img);
    }

    if(keyCode=== DOWN_ARROW){
      spacecraft.y= spacecraft.y+2;
      spaceCraft3Img.changeAnimation("spaceCraft2Img", spaceCraft2Img);
    }

    if(keyCode=== UP_ARROW){
      spacecraft.y= spacecraft.y-2;
    }

    if(spacecraft.isTouching(iss)){
      hasDocked= true;
      text("docking successful",600,300);
    }
  }
  
  drawSprites();
}