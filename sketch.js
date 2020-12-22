const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var myWorld , myEngine,ground, ground_properties,ball,ball_properties,box1,box2

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground1 = new Ground(200, 390, 400, 20);
  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);

}


function draw() {
  background(0);  
  Engine.update(myEngine)
  

  box1.display();
  box2.display();
  ground1.display();
  
}