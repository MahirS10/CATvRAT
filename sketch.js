var gardenimg,catrun,ratrun,catstand,ratstand;
var garden,cat,rat;


function preload() {
    //load the images here
    gardenimg=loadImage("garden.png");
    catrun=loadAnimation("cat2.png","cat3.png");
    ratstand=loadAnimation("mouse3.png","mouse2.png");
    catstand=loadAnimation("cat1.png");
    ratrun=loadAnimation("mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400,1000,800);
    garden.addImage(gardenimg);

    cat=createSprite(800,600,60,40);
    cat.addAnimation("catstanding",catstand);
    cat.scale=0.25;

    rat=createSprite(200,610,60,40);
    rat.addAnimation("ratrstanding",ratstand);
    rat.scale=0.175;
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    if(cat.x-rat.x<cat.width/2+rat.width/2&&
        rat.x-cat.x<cat.width/2+rat.width/2){
        cat.velocityX=0;
        rat.velocityX=0;
   }

   
    
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        rat.changeAnimation("ratteasing",ratrun);
        cat.changeAnimation("catrunning",catrun);
        rat.frameDelay=25;
        cat.velocityX=-3;
       
    }

}
