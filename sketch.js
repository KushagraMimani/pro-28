
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//const Render = Matter.Render;

var tree, treeIMG, ground, stone;
var boy, boyIMG;
var mango, elastic;
var cont;

function preload()
{
	boyIMG = loadImage("images/boy.png");
	treeIMG = loadImage("images/tree.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new Stone(100,570, 20);
	
	//tree = new Tree(970,450,500,500);
	mango1 = new Mango(920, 280, 25);
	mango2 = new Mango(1000, 330, 25);
	mango3 = new Mango(1110, 360, 25);
	mango4 = new Mango(870, 370,25);
	mango5 = new Mango(970, 380,25);
	mango6 = new Mango(970, 280,25);

	//cont1 = new Container(830,530,10,300);
	
	ground = new Ground(600,690,1200,10);

	
	/*boy = createSprite(150,620,20,70);
	boy.addImage("man", boyIMG);
	boy.scale = 0.1;*/
	
	elastic = new Elastic(stone.body, {x: 90, y: 550});

	//var render = Render.create({ element: document.body, engine: engine, options: { width: 1300, height: 600, wireframes: false } });

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGrey");

  imageMode(CENTER);
  image(treeIMG, 970, 450, 500, 500);
  image(boyIMG, 150, 620, 200, 300);

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);

  ground.display();

  stone.display();

  //cont1.display();
  
  elastic.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    elastic.fly();
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.setPosition(stone.body, {x: 100, y: 570})
		elastic.attach(stone.body);
	}
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist( mangoBodyPosition.x, mangoBodyPosition.y, stoneBodyPosition.x, stoneBodyPosition.y);
	if (distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body, false);
	}
}



