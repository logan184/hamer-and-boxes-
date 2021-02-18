const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var box1,box2,box3,box4,box5;
var log;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,40,40);
    box2 = new Box(920,320,100,100);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,40,70);
    box5 = new Box(810,160,80,80);
    ground = new Ground(600,height,1200,20);
    log = new Log(810,260,100,PI/2);
    
    
}

function draw(){
    background("cyan");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
     log.display();
     box3.display(); 
     box4.display();
     box5.display();
	 

}