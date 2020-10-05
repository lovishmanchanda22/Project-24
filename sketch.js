var ground, box1, box2, box3, ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,380,width,20);
	box1 = new Box(840,310,20,100);
	box2 = new Box(1060,310,20,100);
	box3 = new Box(950,360,200,20);
	ball = new Ball(100,360,15);



	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
 drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body, ball.body.position,{x:45, y:-45})
}
}



