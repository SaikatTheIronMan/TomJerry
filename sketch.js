var tom,tomImage,tomanimation,tomImage4;
var jerry , jerryImage, jerryanimation,jerryImage4;
var backstage,backImage;
function preload() {
    backImage = loadImage ("ground.png");
    
    tomImage = loadImage("tomOne.png");
    tomanimation = loadAnimation("tomTwo.png","tomThree.png");
    tomImage4 = loadImage("tomFour.png");

    jerryImage = loadImage("jerryOne.png");
    jerryanimation = loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImage4    = loadImage("jerryFour.png")


}

function setup(){
    createCanvas(1000,800);
   backstage = createCanvas(0,10);
   backstage.addImage(backImage);

   tom = createSprite(700,600);
   tom.addImage(tomImage);
   tom.scale = 0.5;

   jerry = createSprite(200,600);
   jerry.addImage(jerryImage);
   jerry.scale = 0.5;
}

function draw() {

    background(255);
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
      tom.velocity=0;
      tom.changeImage(tomImage4);
      jerry.changeImage(jerryImage4);
      
    }
    keyPressed();
    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
  tom.velocity = -5;
  tom.addAnimation(tomanimation);
  jerry.addAnimation(jerryanimation);
}


}
