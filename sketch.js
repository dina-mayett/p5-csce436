let button1, imgGal;

function preload(){
  imgGal = loadImage('asset/IMG_2026.jpg');
}

function setup() {
  // put setup code here
  createCanvas(800,1200);
  button1 = createButton('load gallery');
  button1.position(19,19);
  button1.mousePressed(loadGallery);
}

function loadGallery() {

  image(imgGal,0,0);
}
