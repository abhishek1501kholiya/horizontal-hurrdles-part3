var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, jumper1 , jumper2 , jumper3 , jumper4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  track = loadImage("images/trackhai.png");
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    //line(200,200,10,4200)
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
