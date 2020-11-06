let brain, img;
let graphics;
let theta = 0;

function preload(){
    brain = loadModel('brain-simple-mesh.obj');
    img = loadImage('abstract.jpg');
}

function setup(){
    createCanvas(400, 400, WEBGL);
    // graphics = createGraphics(128, 512);
    // graphics.img(img, 0, 0, 128, 512);
}

function draw(){
    background(255, 192, 203);
    scale(40);
    rotateX(theta);
    rotateY(theta/2);
    texture(img);
    model(brain);

    theta+=0.05;
}