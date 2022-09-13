var position_x=0;
var position_y=0;
function preload(){

}
function setup() {
    canvas=createCanvas(500,300);
    canvas.position(110,250);
    video=createCapture(VIDEO);
}
function draw(){
    image(video,0,0,640,480);
    circle(30, 30, 20);
    circle(470, 30, 20);
    circle(30, 270, 20);
    circle(470, 270, 20);
    rect(30, 20, 5, 245);
    rect(30, 20, 435, 5);
    rect(30, 250, 435, 5);
    rect(460, 20, 5, 435);
}