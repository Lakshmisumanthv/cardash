
var PLAY = 1;
var END = 0;
var gameState = PLAY;


var car3Image
var car4Image
var car1Image
var car2Image
var trackImage 
var cupImage
 
function preload(){
car4Image=loadImage("car4.png")
car3Image=loadImage("car3.png")
car2Image=loadImage("car 2.jpg")
car1Image=loadImage("car1.jpg") 
trackImage=loadImage("track.jpg")
cupImage=loadImage("cup.jpg") 
} 

function setup(){
createCanvas(900,900) 
  
  track =createSprite(400,579,100,100)
  track.addImage(trackImage)
  track.velocityX =3;
  track.scale=3
  
  cup =createSprite(400,739,100,100)
  cup.addImage(cupImage)
  cup.velocityX = 1;
  cup.scale=0.3
  
  car3=createSprite(110,802,60,60)
  car3.addImage(car3Image)
  car3.scale=0.2

  car4 =createSprite(110,650,10,10)
  car4.addImage(car4Image)
  car4.scale=0.2
  
  car2 =createSprite(130,950,10,10)
  car2.addImage(car2Image)
  car2.scale=0.16
  
  car1 =createSprite(170,1050,10,10)
  car1.addImage(car1Image)
  car1.scale=0.39
} 

function draw(){
  background("lightblue");
  
  if (gameState===PLAY){
   if(track.x > 400 ){
    track.x = width/3;   
   }
  }
    
  
    if(car1.isTouching(cup)){
      gameState = END;
    }
  
  
  
  if (keyDown("UP")){
   car1.y=car1.y-2
  }
   
  if (keyDown("DOWN")){
   car1.y=car1.y+2
  } 
  
    
  if (keyDown("RIGHT")){
car1.x=car1.x+2
  }
    
  if (keyDown("LEFT")){
 car1.x=car1.x-2
  }
 
  
  if (keyDown("W")){
   car2.y=car2.y-2
  }
   
  if (keyDown("S")){
   car2.y=car2.y+2
  } 
  
    
  if (keyDown("D")){
  car2.x=car2.x+2
  }
    
  if (keyDown("A")){
  car2.x=car2.x-2
  }
  
  
  if (keyDown("I")){
   car3.y=car3.y-2
  }
   
  if (keyDown("K")){
   car3.y=car3.y+2
  } 
  
    
  if (keyDown("L")){
car3.x=car3.x+3
  }
    
  if (keyDown("J")){
 car3.x=car3.x-2
  }
 
  if (keyDown("8")){
   car4.y=car4.y-2
  }
   
  if (keyDown("7")){
   car4.y=car4.y+2
  } 
    
  if (keyDown("6")){
car4.x=car4.x+2
  }
    
  if (keyDown("5")){
 car4.x=car4.x-2
  }
   drawSprites()
}
 

 
