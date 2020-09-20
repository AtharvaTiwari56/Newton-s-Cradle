class Bob {
    constructor(x, y, radius) {
        var paperoptions = {
            isStatic: false,
            restitution:1.0,
            friction:0,
            density:0.8
        }
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, this.radius/2, paperoptions);
        World.add(world, this.body);
    }

    display() {
        push ();
        var pos = this.body.position;
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0, 0, this.radius, this.radius);
        pop ();
    }
}
