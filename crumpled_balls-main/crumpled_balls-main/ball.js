class Paper {
    constructor(x, y,radius) {
      var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
      }

      this.body = loadImage("ball.png")
      this.body = Bodies.circle(x, y,radius, options);
      this.radius = 20;
      this.image = loadImage("ball.png");
      World.add(world, this.body);
    }

    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  }