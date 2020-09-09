class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY) {
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      var options = {
          bodyA: bodyA,
          bodyB: bodyB,
          pointB: {x: this.offsetX, y: this.offsetY},
          stiffness: 0.2
    }
      this.rope = Constraint.create(options);
      World.add(world, this.rope);
    }

    display() {
        var pos = this.rope.bodyA.position;
        stroke("white");

        line(pos.x, pos.y, (this.rope.bodyB.position.x + this.offsetX), (this.rope.bodyB.position.y + this.offsetY));
    }
}