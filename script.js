let angle = 0;
let w = 24;
let maxDistance;
let c = 210;

function setup() {
    createCanvas(400, 400, WEBGL);
    maxDistance = dist(0, 0, 200, 200);
}

function draw() {

    background(100);
    ortho(-400, 400, 400, -400, 0, 600);
    directionalLight(255, 235, 205, 1, 0, 1);
    rotateX(-QUARTER_PI);
    rotateY(atan(1/sqrt(2)));


    for (let j = 0; j < height; j += w) {
        for (let i = 0; i < width; i += w) {
            push()
            let d = floor(dist(i, j, width / 2, height / 2));
            let offset = map(d, 0, maxDistance, -PI, PI);
            let a = angle + offset
            let h = floor(map(sin(a), -1, 1, 100, 300));
            translate(i - width / 2, 0, j - height / 2);
            ambientMaterial(170);
            box(w - 2, h, w - 2);
            pop();
        }
    }


    angle -= .2;
}
