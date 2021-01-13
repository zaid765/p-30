const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);
    base1 = new Ground(500,320,300,10);
    base2 = new Ground(1000,250,300,10);
    box1 = new Box(500,280,50,70);
    box2 = new Box(550,280,50,70);
    box3 = new Box(450,280,50,70);
    box4 = new Box(600,280,50,70);
    box5 = new Box(400,280,50,70);
    box6 = new Box(500,210,50,70);
    box7 = new Box(550,210,50,70);
    box8 = new Box(450,210,50,70);
    box9 = new Box(500,140,50,70);
    box10 = new Box(1000,210,50,70);
    box11 = new Box(950,210,50,70);
    box12 = new Box(900,210,50,70);
    box13 = new Box(1050,210,50,70);
    box14 = new Box(1100,210,50,70);
    box15 = new Box(1000,140,50,70);
    box16 = new Box(950,140,50,70);
    box17 = new Box(1000,70,50,70);
    box18 = new Box(1050,140,50,70);   
    poly =new Polygon(200,200,20);
    slingShot = new SlingShot(poly.body,{x:200,y:200})
}

function draw(){
   background("brown")
    Engine.update(engine);

        drawSprites();

    ground.display();
    base1.display();
    base2.display();
    slingShot.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    poly.display();  
   
}

function mouseDragged(){
   Matter.Body.setPosition(this.poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
slingShot.fly();
}

function keyPressed(){
   if (keyCode === 32){

    Matter.Body.setPosition(poly.body,{x:200, y:200})
      slingShot.attach(poly.body);
    }
}
