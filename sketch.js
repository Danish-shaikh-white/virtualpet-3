//Create variables here
var food;
var dog;
 var database, foodS, foodStock;
 var Bedroom, garden, bathroom;
 var livingroom;
function preload()
{
  this.image = loadImage("sprites/dogimg.png");
  this.image = loadImage("sprites/dogimg.png");
  this.image = loadImage("sprites/Bedroom.png");
  this.image = loadImage("sprites/Garden.png");
  this.image = loadImage("sprites/Bathroom.png");
  this.image = loadImage("sprites/livingroom.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
 foodstock=database.ref('Food');
 foodstock.on("value",readstock);

 readState=database.ref('gameState');
 readState.on("value",function(data){
   gameState=data.val();
 })
}


function draw() {  
if(keyWentDown(UP_ARROW)){
  writestock(foods);
  dog.addImage(dogimg1);
}
  drawSprites();
  text("Note press up arrow to feed the dog")

}

function readStock(data){
  food=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x 
  })
 
  if(gameState!="Hungry"){
    feed.hide();
    addFood.hide();
    dog.remove();
  }else{
    feed.show();
    addFood.show();
    dog.addImage(sadDog);
  }
  function update(state){
  database.ref('/').update({
    gameState:state
  });
}
}


