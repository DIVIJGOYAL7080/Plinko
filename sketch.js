const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var particles = [];
var plinkos = [];
var divisions=[];
var ground;
var PLAY=1;
var END=0;
var gamestate=PLAY;
var particle;
//var divisions=[];

var divisionHeight=300;
var turn =0;
var score=0;
function mousePressed(){

if(gamestate!==END){



turn++
particle=new Particle(mouseX,10,10,10);








}












}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("turn : "+turn,20,30);
 text("score : "+score,700,30);
  Engine.update(engine);
 
  if(gamestate===PLAY){
    if(turn>5){

gamestate=END;
turn=5;
    }
if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){


     if(particle.body.position.x<300){

score=score+200
particle=null;

     }else if(particle.body.position.x>301&&particle.body.position.x<600){


score=score+100

particle=null



     }else if(particle.body.position.x>600){

      score=score+200
      particle=null
        }
    





          }


    }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  }else{

textSize(70);
text("GAME OVER",300,400)















  }
}




















