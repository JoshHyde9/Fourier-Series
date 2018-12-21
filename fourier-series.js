let time = 0;
let wave = [];

function setup() {
    createCanvas(1600, 900);
}

function draw() {
    background(0);

    translate(500, 450);

    let x = 0;
    let y = 0;

    for(let i = 1; i < 5; i++ ){
        let prevx = x;
        let prevy = y;
        let n = i * -2;
        let radius = -(300 * (2 / (n * PI)));
        x += radius * cos(n * time);
        y += radius * sin(n * time);
    
    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);

    stroke(255, 20, 147);
    
    line(prevx, prevy, x, y);
    }
    wave.unshift(y);

    translate(300, 0);
    line(x - 300, y, 0, wave[0]);

    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();

    time += 0.02;

    if (wave.length > 800) {
        wave.pop();
    }
}