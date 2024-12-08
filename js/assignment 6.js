let slider;
let currentTime = 9; 
let totalWaterConsumed = 0; 
let lastTime = 9; 
let dropletY = []; 
let dropletX = []; 
let waterLevel = 0;
let mlPerTime = 100;
let dropletSpeed = 3;

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('sketch-container3'); 
  
  slider = createSlider(9,22,9,1); 
  slider.position(20,360);
  
  for (let i = 0; i < 20; i++) {
    dropletY[i] = random(-600, 0);
    dropletX[i] = random(width);
  }
}

function draw() {
  background('lightblue');
  
  currentTime = slider.value();
  
  if ((currentTime >= 12 && currentTime <= 14) || (currentTime >= 19 && currentTime <= 21)) {
    mlPerTime = 200;
    dropletSpeed = 5; 
  } else if(currentTime>=9 && currentTime<=10){
    mlPerTime = 150;
    dropletSpeed = 3;
  } else if((currentTime>=16 && currentTime<=17)||(currentTime>=21 && currentTime<=22)){
    mlPerTime = 50;
    dropletSpeed = 1;
  }else{
    mlPerTime = 100;
    dropletSpeed = 2;
  }
  
  if (currentTime > lastTime) {
    totalWaterConsumed += mlPerTime; 
  }
  lastTime = currentTime;

  waterLevel = map(totalWaterConsumed, 0, 2600, 0, height / 2); 
  
  fill(0);
  textSize(16);
  textAlign(LEFT);
  text(`Time: ${nf(currentTime, 2, 0)}:00`, 20, 30);
  text(`Current water intake: ${mlPerTime}ml`, 20, 50);
  text(`Total water intake: ${totalWaterConsumed}ml`, 20, 70);
  
  fill(66, 135, 245);
  noStroke();
  rect(0, height - waterLevel, width, waterLevel);
  
  for (let i = 0; i < dropletY.length; i++) {
    fill(66, 135, 245);
    ellipse(dropletX[i], dropletY[i], 5, 10); 
    dropletY[i] += dropletSpeed;
    
    if (dropletY[i] > height) {
      dropletY[i] = random(-200, 0);
      dropletX[i] = random(width);
    }
  }
}
