class mango{
constructor(x,y,r){
var options={
    isStatic:true,
    restitution:0,
    friction:1,
}
this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("Sprites/mango.png");
this.body=Bodies.circle(this.x,this.body,this.r,options)
World.add(world,this.body)
}

display(){
var mangopos=this.body.position;

push()
translate(mangopos.x,mangopos.y);
rotate(this.body.angle)
imageMode(CENTER);
ellipseMode(CENTER);
image(this.image, 0,0,this.r*2,this.r*2);
//ellipse(this.x,this.y,this.r);
//strokeWeight(4);
fill(255,0,255)

pop()


}
}