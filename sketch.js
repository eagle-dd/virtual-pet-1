//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStack;
var dog

function preload()
{
  //load images here
  dogImg1 = loadImage("images/dogImg.png")
  dogImg2 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  //creating the dog sprite
  database = firebase.database();
  foodStock=database.ref('food')
  foodStock.on("value",readStock)
  dog = createSprite(250, 250, 50, 50);
  dog.addImage(dogImg1)
  dog.scale=0.1;
  
}


function draw() {  
  background(46,139.87)

  //if condition for function keyPressed up
  if(keyWentDown(UP_ARROW)){
    foodS=foodS-1
    writeStock(foodS)
    dog.addImage(dogImg2)
  }
  

  drawSprites();
  //add styles here
  text("Note: Press UP_ARROW Key To Feed The Drago Milk",100, 100)

}
function readStock(data){
foodS=data.val();
console.log(foodS)
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}



