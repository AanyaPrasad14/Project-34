var dog, hDog, dogImg, HDogImg;
var database;
var foodS, foodstock;

function preload(){
   dogImg = loadImage("images/dogImg.png");
   HDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,300);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  
  //foodstock = database.ref('Food');
  //foodstock.on("value",readStock);
}


function draw() {  
  
  background(46,139,87);
  
  drawSprites();
  
  textSize(20);
  fill("white");
  stroke("black");
  text("Food Remaining : " + foodstock, 50, 180);
  text("Press UP_ARROW Key To Feed Bruno Milk", 40, 30);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(HDogImg);
  }
 
  foodstock = database.ref('Food');
  foodstock.on("value",readStock);

  function readStock(data){
    foodS = data.val();
  }

  function writeStock(x){
    database.ref('/').update({
      Food:x
    })
  }
}



