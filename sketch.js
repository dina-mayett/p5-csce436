let img_home, img_home, img_add, img_act, img_prof, img_search;
let btn_home, btn_add, btn_act, btn_prof, btn_search;

function preload() {
  img_home = loadImage('assets/IMG_2021.PNG');
}

function setup() {
  createCanvas(900, 1600);
  load_home();

  btn_home = createImg('assets/home.png');
  btn_home.position(0,1500);
  btn_home.mousePressed(load_home);

  btn_search = createImg('assets/search.png');
  btn_search.position(180,1500);
  btn_search.mousePressed(load_search);

  btn_add = createImg('assets/add.png');
  btn_add.position(360,1500);
  btn_add.mousePressed(load_add);

  btn_act = createImg('assets/activity.png');
  btn_act.position(540,1500);
  btn_act.mousePressed(load_act);

  btn_prof = createImg('assets/profile.png');
  btn_prof.position(720,1500);
  btn_prof.mousePressed(load_prof);
}

function load_home() {
  image(img_home, 0, 0, 900, 1600);
}

function load_search(){
  image(img_search, 0, 0, 900, 1600);
}

function load_add(){
  image(image_add, 0, 0, 900, 1600);
}

function load_prof(){
  image(image_prof, 0, 0, 900, 1600);
}

function load_act(){
  image(image_act, 0, 0, 900, 1600);
}
