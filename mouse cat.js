var cat
var mouse

function preload() {
cat running =loadAnimation("cat2.png");
cat collided = loadAnimation("cat1.png","cat3.png","cat4.png");
mouse = loadAnimation("mouse1.png";"mouse2.png";"mouse3.png";"mouse4.png");
garden = loadImage("garden.png");  
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(50,450,20,50);
 cat.addAnimation("running",createImg2);
  cat.addAnimation("collided");
}

function draw() {

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}

//For moving and changing animation write code here
function keyPressed(){
  if(keyCode === LEFT_ARROW){
  cat.velocityX = -5;
  cat.addAnimation("catRunning" , catImg2);
  cat.changeAnimation("catRunning");

  if(keyCode === RIGHT_ARROW){
    cat.velocityX = +5;
    cat.addAnimation("catRunning" , catImg2);
    cat.changeAnimation("catRunning");

    if(keyCode === UP_ARROW){
        cat.velocityY = -5;
        cat.addAnimation("catRunning" , catImg2);
        cat.changeAnimation("catRunning");
        
        if(keyCode === DOWN_ARROW){
            cat.velocityX = +5;
            cat.addAnimation("catRunning" , catImg2);
            cat.changeAnimation("catRunning");
          
      
  

  }


}
