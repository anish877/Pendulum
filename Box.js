class Box{
  constructor(x,y,width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
   
      this.body = Bodies.rectangle(x,y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/ball.png")
     
      World.add(world, this.body);
    }
    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     fill("yellow")
     push()
     translate(this.body.position.x,this.body.position.y)
     rotate(angle)
      imageMode(CENTER);
      image(this.image,0,0, this.width, this.height);
    pop()
    }
    fu2(){
      this.body.position.x = 193;
    }
    fu3(){
      this.body.position.x = 200;
      this.body.position.y = 300;
    }
}