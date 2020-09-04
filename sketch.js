var fixedrect, gameobject1, gameobject2, gameobject3, gameobject4;

function setup() { 
 
  createCanvas(1200,800);
  
 fixedrect = createSprite(200,200,50,80);
 fixedrect.shapeColor = 'green';
 
 movingrect= createSprite(400,200,80,30);
 movingrect.shapeColor = 'green';

 gameobject1 = createSprite(100,100,50,50);
 gameobject1.shapeColor = 'green';

 gameobject2 = createSprite(100,200,50,50);
 gameobject2.shapeColor = 'green'
 gameobject2.velocityX = 1;

 gameobject3 = createSprite(100,300,50,50);
 gameobject3.shapeColor = 'green'

 gameobject4 = createSprite(100,400,50,50);
 gameobject4.shapeColor = 'green'


}

function draw() {
  background(0,0,0);  
  movingrect.x= World.mouseX;
  movingrect.y = World.mouseY; 

  if (isTouching(movingrect, fixedrect)){
   fixedrect.shapeColor = 'red';  
   movingrect.shapeColor = 'red';
  }
   else{
    fixedrect.shapeColor = 'green';  
    movingrect.shapeColor = 'green';
   }

   if (isTouching(movingrect, gameobject1)){
    gameobject1.shapeColor = 'blue';  
    movingrect.shapeColor = 'blue';
   }
    else{
     gameobject1.shapeColor = 'green';  
     movingrect.shapeColor = 'green';
    }
   bounceOff(movingrect, gameobject2)


  drawSprites();
}