class Roof{
    constructor(x,y,w,h){
        var options= {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.width= w;
        this.height= h;

    }

    display(){
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("brown");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}