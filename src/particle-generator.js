class ParticleGenerator{

    #particles = [];
    #x;
    #y;
    #particleTotal;
    #energy;

    constructor(x, y, particleTotal, energy, maxSize, color, color) {

        this.#buildParticles(x, y, particleTotal, energy, maxSize);

    }

    draw(){
        for(let p of this.#particles){
            p.draw();
        }

    }

    #buildParticles(x, y, particleTotal, energy, maxSize, color){
for(let i = 0; i < particleTotal; i++){
    let p = new Particle(x,y, energy, maxSize,color);
    this.#particles.push(p);
}

    }

}