class Ground{
    constructor(x,y,w,h,p){
        this.properties = p
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.body =  Bodies.rectangle(this.x, this.y,w, h, this.properties);
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width,this.height);
    }
}