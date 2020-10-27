 class Ball{

constructor(x,y,r, Properties){
    this.p = Properties;
    this.x = x;
    this.y = y;
    this.radius = r;
    this.body = Bodies.circle(x,y, r,this.p);
    World.add(world, this.body);
    //console.log(this.p)
    //x = this.body.position.x
    //y = this.body.position.x

}

display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    //push()
    //translate(pos.x, pos.y)
   // rotate(angle);
    //ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, this.radius*2, this.radius*2);
  //  console.log(this.p);
    //pop()
}

}
