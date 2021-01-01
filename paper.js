class paper{
    constructor(x,y,width,height,angle){
        var options = {
            'restitution':0.5,
            'friction':0.3,
            'density':1.2,
            'isStatic': false,
        }
        this.body = Bodies.circle(x,y,width,heigth,angle,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
}
display() 
{
    var angle = this.body.angle
     
}