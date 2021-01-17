
const Engine = Matter.Engine
const World =  Matter.World
const Bodies = Matter.Bodies

var engine, world;
var ground, ball



function setup() {
  createCanvas(800,400);
  
   


 engine = Engine.create();
 world = engine.world;

 ground_options = {

  isStatic: true


 }


  ground = Bodies.rectangle (0, 360, 800, 40, ground_options)
  World.add(world, ground)



  ball_options = {

   restitution: .5
  
  
   }
  
  
    ball = Bodies.circle (400, 200, 15, ball_options)
    World.add(world, ball)





}

function draw() {
  background(0); 
  
  Engine.update(engine);


 rect(ground.position.x, ground.position.y, 800,40);

  ellipse(ball.position.x , ball.position.y, 15,15)


  drawSprites();
}