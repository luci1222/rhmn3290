alert('hola')

var img;
var deg =0;

function preload(){

   img = loadImage('https://i.ibb.co/nkmnNXS/World-Map-High-Res.jpg');
}
function setup(){ 
    
  createCanvas(innerWidth, innerHeight, WEBGL); 
 background(0);

}

function draw(){

pointLight(255, 255, 255, 100, -40, 200);
clear(); 
ambientLight(120);
noStroke();
texture(img); 
rotatez(5.87);
rotateY(deg);
rotateX(0);
noStroke();
sphere(150);
ambientMaterial(255);
deg += 0.005;
}
