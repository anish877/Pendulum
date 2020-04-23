class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness: 0.002,
            length: 20
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        stroke(244,244,244)
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
}