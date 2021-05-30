class Paper
{
    constructor()
    {
        var options = 
        {
            isStatic : false,
            restitution : 0.3,
            density : 1.2,
            friction : 0.5
        }
        this.body = Bodies.circle(200,650,30,options);
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;

        fill("pink");
        ellipse(pos.x,pos.y,this.width,this.height);  

    }
}