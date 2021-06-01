const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   ball=new Ball(650,250,40)
     box1=new Box(780,560,70,70)
      box2=new Box(780,510,70,70) 
      box3=new Box(780,460,70,70) 
      box4=new Box(780,410,70,70) 
      box5=new Box(780,360,70,70)
       box6=new Box(780,310,70,70)
        box7=new Box(780,260,70,70)
         box8=new Box(780,210,70,70)
rope=new Rope(ball.body,{x:650,y:0})
}
  

function draw(){
    background("white")
   Engine.update(engine)
   ground.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
ball.display()
rope.display()
}

function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }



