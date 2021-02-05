
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,600,800,30);
	paper = new Paper(20,575,20);

	//dustbin
	s1 = new Dustbin(600,540,10,100)
	s2 = new Dustbin(650,590,100,10)
	s3 = new Dustbin(700,540,10,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ground.display();
  paper.display();

  fill("blue")
  s1.display();
  fill("blue")
  s2.display();
  fill("blue")
  s3.display();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-52})
	}
}

