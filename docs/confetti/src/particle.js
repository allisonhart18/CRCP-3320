
class Particle {
    static DAMPING;
    static FRICTION;

    #position;
    #speed;
    #gravity;
    #size;
    #color;

    constructor(x, y, energy, c, maxSize) {
        Particle.DAMPING = createVector(1.0, 0.9);
        Particle.FRICTION = 0.4;
        this.#gravity = createVector(0.0, 0.02);

        if (typeof x === 'number' && typeof y === "number") {
            this.#position = createVector(x, y);
            console.log('x and y are both numbers');
        } else {
            this.#position = createVector(width / 2.0, height / 2.0);
            console.warn('x and y are not both numbers');
        }

       if (c){
        if(c instanceof p5.Color){
            this.#color = c;
        } else {
            this.#color = color(255, 255, 0)
        }
       } else{
        this.#color = color(255, 255, 255);

       }

        if(!(energy === 'number' && energy>0)){
            energy = 3;
            console.log('here');
        }

        let speedX = random(-energy, energy);
        let speedY = random(-energy, -0.01);
        this.#speed = createVector(speedX, speedY);
        this.#size = random(10, 50);
        
       
    }

    get color(){
        return this.#color;
    }

    get x (){

        return this.#position.x;
    }

    get y (){

        return this.#position.y;
    }
    get size (){
        return this.#size;
    }
    get radius() {
        return this.#size/2;
    }


    draw() {
        this.render();
        this.#move();
        this.#applyForces();
        this.#bounce();
    }

    render() {
        ellipse(this.x, this.y, this.size, this.#size);
        fill(this.color);
    }

    #move() {
        this.#position.add(this.#speed);
    }

    #applyForces() {
        this.#speed.add(this.#gravity);
    }

    #bounce() {
        let r = this.#size / 2.0;

        if (this.#position.x > (width - r) || (this.#position.x < r)) {
            this.#speed.x = -this.#speed.x;
            this.#speed.x *= Particle.FRICTION;
            this.#speed.y *= Particle.FRICTION;
        }

        if (this.#position.y > (height - r)) {
            this.#speed.y = -this.#speed.y;
            this.#speed.mult(Particle.DAMPING);
            this.#speed.y *= Particle.FRICTION;
            this.#speed.x *= Particle.FRICTION;
        } else if (this.#position.y < r) {
            this.#speed.y = -this.#speed.y;
        }

        this.#position.x = constrain(this.#position.x, r, (width - r));
        this.#position.y = constrain(this.#position.y, r, (height - r));
    }
}
