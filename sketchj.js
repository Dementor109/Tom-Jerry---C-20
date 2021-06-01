var bgImg
var Tom, Jerry
var TomI, JerryI
var TomII, TomIII, TomIV
var JerryII, JerryIII, JerryIV

function preload() {
    //load the images here
    bgImg = loadImage("garden.png");

    TomI = loadImage("cat1.png");
    TomII = loadImage("cat2.png");
    TomIII = loadImage("cat3.png");
    TomIV = loadImage("cat4.png");

    JerryI = loadImage("mouse1.png");
    JerryII = loadImage("mouse2.png");
    JerryIII = loadImage("mouse3.png");
    JerryIV = loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    
    //create tom and jerry sprites here

 Tom = createSprite(500,400)
 Tom.addAnimation("Tom OG", TomI)

 Jerry = createSprite(700,200)
 Jerry.addAnimation("Jerry OG", JerryII)
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    if(Tom.x - Jerry.x < (Tom.width - Jerry.width)/2){
Jerry.addAnimation("Jerry Happy", JerryI)
Tom.addAnimation("Tom Happy", TomIII)
    }

    keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode=== LEFT_ARROW){

    Jerry.addAnimation("Teasing", JerryIII)
    Jerry.changeAnimation("Teasing")
    Tom.x = Tom.x - 50
  }

  if(keyCode=== RIGHT_ARROW){
   Jerry.changeAnimation("Teasing")
   Tom.x = Tom.x +50

  }


}
