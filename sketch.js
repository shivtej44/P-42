var issImg,spacebgImg,spcr1,spcr2,spcr3,spcr4;
var iss,spacecraft;
var hasDocked = false;

function preload() {

 issImg = loadImage("iss.png");
 spacebgImg = loadImage("spacebg.jpg");
 spcr1 = loadImage("spacecraft1.png");
 spcr2 = loadImage("spacecraft2.png");
 spcr3 = loadImage("spacecraft3.png");
 spcr4 = loadImage("spacecraft4.png");

}

function setup() {

  createCanvas(800,400);

  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale = 0.50;

  spacecraft = createSprite(285,240);
  spacecraft.addImage(spcr1);
  spacecraft.scale = 0.15;


}

function draw() {

  background(spacebgImg);  
  drawSprites();

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
  } else{
   fill("white");
   textSize(50);
   text("Docking Successful!",150,350);
  }

  if(keyDown("UP_ARROW")){
   spacecraft.y = spacecraft.y - 2;
  }

  if(keyDown("LEFT_ARROW")){
    spacecraft.x = spacecraft.x - 2;
    spacecraft.addImage(spcr3);
   }

   if(keyDown("RIGHT_ARROW")){
    spacecraft.x = spacecraft.x + 2;
    spacecraft.addImage(spcr4);
   }

   if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spcr2);
   }

   if(spacecraft.x>290&&spacecraft.x<298&&spacecraft.y>190&&spacecraft.y<197){
    hasDocked = true;
   }

}