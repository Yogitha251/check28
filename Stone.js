class stone {
constructor(x,y,r){
    var options={
isStatic:false,
restitution:0,
friction:1,
density:1.2,
    }
    this.x=x;
    this.y=y;
    this.r=r;
    //this.angle=0;
    this.image=loadImage("Sprites/stone.png");
    this.body=Bodies.rectangle(this.x,this.y,this.r/2,options);
World.add(world,this.body)

}
display(){
    var stonepos=this.body.position;
   
    
            push()
            
			translate(stonepos.x,stonepos.y);
			
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255)
			//stroke(255)
            //rotate(this.angle)
            imageMode(CENTER);
            ellipseMode(RADIUS)
            image(this.image, 0, 0,this.r*2,this.r*2);
    
			//rect(this.x,this.y,this.w,this.h);
			pop()

}





}