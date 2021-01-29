class stone{
    constructor(x,y){
    var options={
    restitution:0,
    friction:1,
    density:1.2,
    isStatic:false
    }
    this.body=Bodies.circle(x,y,50,options);
    this.image=loadImage("stone.png");
    World.add(world,this.body);
    }
    display(){
    //this.body.position.x=mouseX;
    //this.body.position.y=mouseY;
    var pos=this.body.position;
    push();
    translate (pos.x,pos.y);
    imageMode(CENTER);
    image (this.image,0,0,30,30);
    pop();
    }
}