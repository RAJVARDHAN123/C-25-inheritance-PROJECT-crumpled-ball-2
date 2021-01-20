const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustimg, backimg;
var engine,world;
var dustbinpic;
var thrower, throwerimg;

function preload()
{

	dustimg = loadImage("dustbingreen.png");
	backimg = loadImage("download.jpg");
	throwerimg = loadImage("garbage thrower.png");

}

function setup() {
	createCanvas(1360, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
// creating Ground
Ground = new Ground(width/2,height,width,20);

//creating a waste paper
paper = new Paper(260,200,20);  

//creating Dustbin with all the sides
dustbin = new Dustbin(1000, 580,20,100);

	plate = new Plate(250, 360, 100, 5);
// dustbinpic = createSprite(1000,580,10,100);
// dustbinpic.addImage(dustimg);
// dustbinpic.scale = 0.4;

thrower = createSprite(200, 480);
thrower.addImage(throwerimg);
thrower.scale = 0.8;

//giving Gravity
  Engine.run(engine);

}

//--------------------------------------------------------------DRAW FUNCTION -----------------------------------------------------
function draw() {

rectMode(CENTER);

//giving black color to background 
background(backimg);

// display the Items 
Ground.display();

dustbin.display();

paper.display();

plate.display();

 
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:29, y: -49})
	}
  }