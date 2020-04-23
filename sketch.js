const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState = 0
var b;

function preload(){
 b = loadImage("sprites/a.png")
}
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(200,300,100,100)
    box2 = new Box2(200,100,200,20)
    slingShot = new SlingShot(box1.body,box2.body);
}

function draw(){
    background(b);
    Engine.update(engine);
    fill(188,24,32)
    textSize(25)
    text('Press Space To Ocillate',65,25)
    fill(265,265,265)
    textSize(25)
    text('Press Escape to Stop',65,65)
    slingShot.display();   
    box1.display(); 
    box2.display();
    
}
function keyPressed(){
if(keyCode===32){
box1.fu2();
Matter.Body.setAngularVelocity(box1.body,10)}
if(keyCode===27)
{
    Matter.Body.setPosition(box1.body,{x:200,y:300 })
    Matter.Body.setVelocity(box1.body,{x:0,y:0 })
    Matter.Body.setAngularVelocity(box1.body,0)
    Matter.Body.setAngle(box1.body,-180)

}
}

