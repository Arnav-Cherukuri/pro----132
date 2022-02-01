objectDetector= "";

img = "";
objects = [];
status = "";

function preload(){
  img = loadImage('Water_Bottles.jpg');
}


function setup() {
  canvas = createCanvas(440, 220);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
image(img, 0, 0, 440, 220);
}

