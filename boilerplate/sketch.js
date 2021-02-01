const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine,world;

var box1;

function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;

 box1 = new box();
}

function draw() {
  background(0);  
 box1.display();
}