var sprite,count,basket;
var img1;
function preload()
{
  img1=loadImage("sprite_0.png");
}

function setup(){
sprite = createSprite(200, 200);
  
 sprite.visible = false;

 count = 0;
 sprite = createSprite();

   basket = createSprite(150, 380);


}

function draw()
{
  background("white");
  fallSprite();
basket.x = World.mouseX;    
//basket.setAnimation("bowl_1");
  basket.addImage(img1);
basket.scale = 0.7;
if (sprite.isTouching(basket))
{
  count = count +50;
sprite.destroy();

    
}
  drawSprites();
  text("SCORE:" + count,40,60);
}


function fallSprite() 
{
  if (World.frameCount%50==5) 
  {
      
  sprite = createSprite(Math.round(random(0,400)),0,Math.round(random(0,400)),Math.round(random(0,400)) );
   sprite.velocityY = 8;
   sprite.velocityX = 0;
  sprite.scale = 0.05;
  sprite.shapeColor = rgb(random(2,400),random(100,200),random(1,400));
  console.log(World.frameCount);
  
  }

}
