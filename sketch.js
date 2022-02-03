const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var suelo;
var pelota;

function setup() {
  createCanvas(800,400);
  

  engine = Engine.create();
  world = engine.world;
  var options ={
    isStatic: true
  }
  suelo = Bodies.rectangle(100,380,800,40,options);
  World.add(world,suelo);
  var optionspelota ={
    restitution: 3.0
  }
  pelota = Bodies.circle(200,200,20,optionspelota);
  World.add(world,pelota);
}

function draw() {
  background("orange");  
  Engine.update(engine);
rect(suelo.position.x,suelo.position.y,800,40);
ellipseMode(RADIUS);
ellipse(pelota.position.x,pelota.position.y,20,20);
  drawSprites();
}