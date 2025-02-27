class PolygonParticle  extends Particle{
#sides = 3;
#initialTheta;

contructor(x, y, energy, maxSize, c){

    super(x, y, energy, maxSize, c);
    this.#sides = Math.floor(random(3,15));
    this.#initialTheta = random(0, TWO_PI);

    


}

render()
{
    fill(this.color);

    let theta = 0;

    push();
    translate(this.x, this.y);
    for (let i = 0; i< this.#sides; i++) {
    let vx = this.radius * cos(theta);
    let vy = this.radius * sin(theta);
    vertex(vx, vy);

    theta += (TWO_PI / this.#sides)

    }

    pop();

    ellipse(this.x, this.y, this.size, this.size);

}

}
