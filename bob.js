class Bob{
    constructor(x,y,r){
        var options ={
            restitution : 1,
            density : 1
        }
        this.r = r;
        this.body= Matter.Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        //console.log(this.body)    
    }

    display(){
        var pos= this.body.position;
       // var angle = this.body.angle;

        push();
        translate(pos.x,pos.y)
        fill("white");
        ellipseMode(RADIUS);        
        ellipse(0,0,this.r,this.r);
        pop();
    }
}