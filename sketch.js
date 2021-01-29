const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,Stone1;
var world,boy,chain;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    mango1=new mango(1100,100,30);
	mango2=new mango(1040,150,30);
	mango3=new mango(995,80,30);
	mango4=new mango(980,220,30);
	mango5=new mango(1150,180,30);
	mango6=new mango(1220,220,30);
	mango7=new mango(1050,220,30);
	mango8=new mango(900,190,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  Stone1=new stone(240,450);
  chain=new throww(Stone1.body,{x:240,y:450})
	Engine.run(engine);}
function draw() {
  background(230);
  textSize(30);
  text("Press Space to get a second chance to play!!",15,40);
  image(boy ,200,365,200,300);
  detectCollision(Stone1,mango1);
  detectCollision(Stone1,mango2);
  detectCollision(Stone1,mango3);
  detectCollision(Stone1,mango4);
  detectCollision(Stone1,mango5);
  detectCollision(Stone1,mango6);
  detectCollision(Stone1,mango7);
  detectCollision(Stone1,mango8);
  drawSprites();
  groundObject.display();
  Stone1.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
chain.display();}
  function mouseDragged()
  {
    Matter.Body.setPosition(Stone1.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased()
  {
    chain.fly();
  }
function detectCollision(Stone1,mango1){
 mangoBodyPosition= mango1.body.position;
 Stone1BodyPosition= Stone1.body.position;
 var distance=dist(Stone1BodyPosition.x,Stone1BodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 if(distance<=mango1.r+Stone1.r)
 {
  Matter.Body.setStatic(mango1.body,false);
 }
}

function keyPressed(){
if(keyCode===32){
Matter.Body.setPosition(Stone1.body,{x:240,y:450});
chain.Launch(Stone1.body);
}
}