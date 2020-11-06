let heart, img;
let graphics;
let theta = 0;

function preload(){
    heart = loadModel('heart.obj');
    img = loadImage('abstract.jpg');
}

function setup(){
    createCanvas(140, 140, WEBGL);
    // graphics = createGraphics(128, 512);
    // graphics.img(img, 0, 0, 128, 512);
}

function draw(){
    background(255, 192, 203);
    // scale(10);
    rotateX(theta);
    rotateY(theta/2);
    texture(img);
    model(heart);

    theta+=0.01;
}