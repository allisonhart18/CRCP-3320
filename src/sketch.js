// Confetti sketch


let pg;
let gerneators = [];

function setup() {
    createCanvas(500, 500);
    pg = new ParticleGenerator(250, 100, 20, 10, 20, getRandomColor);
}

function draw() {
    background(0);
    
    // for (let i = 0; i < particleTotal; i++) {
    //     particles[i].draw();
    // }

    // for (let p of particles) {
    //     p.draw();
    // }

    // particles.forEach(drawParticle);

    pg.draw();
}

for(let g of generators){
    g.draw();
}

function mousePressed(){
let pointTotal = Math.floor(random(5,50));
let energy = random(1,10);
let maxSize = random(10, 25);
pg = new ParticleGenerator(mouseX, mouseY, pointToital, energy, maxSize)

}

function drawParticle(particle) {
    particle.draw();
}

function getRandomColor(){
    let r = Math.random(255);
    let g = Math.random(255);
    let b = Math.random(255);
    return(r,g,b);
}