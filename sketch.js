var form,back,canvas
function preload(){
    back = loadImage('Images/Background Image.jpg');
}
function setup(){
    form = new welcomeForm();
   
}
function draw(){
    canvas = createCanvas(displayWidth-20, displayWidth-30);
    background(back);
    form.display();
    drawSprites();
}