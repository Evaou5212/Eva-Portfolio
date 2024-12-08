let startScreen, level1Bg, level2Bg, sandwichParts = {};
let gameState = "start";
let currentIngredient = null;
let ingredients = [];
let ingredientOrder = ["bread1", "lettuce", "tomato", "bacon", "egg", "bread2"];
let ingredientIndex = 0;
let button;
let targetY = 0;

let foundationImg, blushImg, lipstickImg, characterStages = [];
let makeupStep = 0;

let draggedItem = null; 
let dragOffsetX = 0;
let dragOffsetY = 0;
let bgm;

function preload() {
  startScreen = loadImage('images/start.PNG');
  level1Bg = loadImage('images/level1bg.PNG');
  level2Bg = loadImage('images/level2bg.PNG');
  sandwichParts.bread1 = loadImage('images/bread.PNG');
  sandwichParts.bread2 = loadImage('images/bread2.PNG');
  sandwichParts.lettuce = loadImage('images/vege.PNG');
  sandwichParts.tomato = loadImage('images/tomato.PNG');
  sandwichParts.bacon = loadImage('images/bacon.PNG');
  sandwichParts.egg = loadImage('images/egg.PNG');
  foundationImg = loadImage('images/foundation.PNG');
  blushImg = loadImage('images/blusher.PNG');
  lipstickImg = loadImage('images/lipstick.PNG');
  characterStages[0] = loadImage('images/step0.PNG');
  characterStages[1] = loadImage('images/step1.PNG');
  characterStages[2] = loadImage('images/step2.PNG');
  characterStages[3] = loadImage('images/step3.PNG');
  
  bgm = loadSound('images/bgm.mp3');
}

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent('sketch-container3'); 
  button = new Button(width / 2 - 100, height - 80, 200, 60, "START");
  bgm.loop();
}

function draw() {
  background(255);

  if (gameState === "start") {
    image(startScreen, 0, 0, width, height);
    button.display();
  } else if (gameState === "level1") {
    playLevel1();
  } else if (gameState === "level1Complete") {
    playLevel1Complete();
  } else if (gameState === "level2") {
    playLevel2();
  }
}

function mousePressed() {
  if (gameState === "start" && button.isMouseOver()) {
    gameState = "level1";
    spawnNextIngredient();
  } else if (gameState === "level1" && currentIngredient) {
    currentIngredient.drop();
  } else if (gameState === "level1Complete" && button.isMouseOver()) {
    gameState = "level2";
  } else if (gameState === "level2" && button.isMouseOver()) {
    gameState = "level3";
  }
  
  if (gameState === "level2") {
    if (mouseX >= 30 && mouseX <= 90 && mouseY >= 40 && mouseY <= 125) {
      draggedItem = "foundation";
      dragOffsetX = mouseX - 30;
      dragOffsetY = mouseY - 40;
    } else if (mouseX >= 30 && mouseX <= 90 && mouseY >= 120 && mouseY <= 205) {
      draggedItem = "blush";
      dragOffsetX = mouseX - 30;
      dragOffsetY = mouseY - 120;
    } else if (mouseX >= 30 && mouseX <= 90 && mouseY >= 300 && mouseY <= 405) {
      draggedItem = "lipstick";
      dragOffsetX = mouseX - 30;
      dragOffsetY = mouseY - 200;
    }
  }
}

function mouseReleased() {
  if (gameState === "level2" && draggedItem !== null) {
    if (draggedItem === "foundation" && mouseX >= width / 2 - 50 && mouseX <= width / 2 + 50) {
      makeupStep = 1;
    } else if (draggedItem === "blush" && mouseX >= width / 2 - 50 && mouseX <= width / 2 + 50) {
      makeupStep = 2;
    } else if (draggedItem === "lipstick" && mouseX >= width / 2 - 50 && mouseX <= width / 2 + 50) {
      makeupStep = 3;
    }
    
    draggedItem = null;
  }
}

function playLevel1() {
  image(level1Bg, 0, 0, width, height);

  for (let ingredient of ingredients) {
    ingredient.update();
    ingredient.display();
  }

  if (currentIngredient && currentIngredient.isLanded()) {
    ingredientIndex++;
    if (ingredientIndex < ingredientOrder.length) {
      spawnNextIngredient();
    } else {
      gameState = "level1Complete";
      button = new Button(width / 2 - 100, height - 80, 200, 60, "NEXT");
    }
  }
}

function playLevel1Complete() {
  image(level1Bg, 0, 0, width, height);  
  for (let ingredient of ingredients) {
    ingredient.display();
  }
  button.display();
}

function playLevel2() {
  image(level2Bg, 0, 0, width, height);
  image(foundationImg, 0, 0, width, height); 
  image(blushImg, 0, 0, width, height); 
  image(lipstickImg, 0, 0, width, height);
  image(characterStages[makeupStep], 0, 0, width, height);
  
  text("help me do my make-up!", 100, 400, 400, 80)
  if (makeupStep === 3) {
    button = new Button(width / 2 - 100, height - 80, 200, 60, "NEXT");
    button.display();
  }
}

function spawnNextIngredient() {
  let type = ingredientOrder[ingredientIndex];
  let image = null;

  if (type === "bread1") {
    image = sandwichParts.bread1;
  } else if (type === "bread2") {
    image = sandwichParts.bread2;
  } else {
    image = sandwichParts[type];
  }

  if (image) {
    currentIngredient = new Ingredient(image, 0, -250, type); 
    ingredients.push(currentIngredient);
  }
}

class Ingredient {
  constructor(img, x, y, type) {
    this.img = img;
    this.x = width / 2;
    this.y = y;
    this.type = type;
    this.moving = true;
    this.dropped = false;
    this.targetY = targetY;
    this.offset = random(TWO_PI);
  }

  update() {
    if (this.moving) {
      this.x = width / 2 + sin(frameCount * 0.05 + this.offset) * 125; 
    }

    if (this.dropped && this.y < this.targetY) {
      this.y += 4; 
      if (this.y >= this.targetY) {
        this.y = this.targetY;
      }
    }
  }

  display() {
    if (this.img) {
      let imgWidth = this.img.width / 4; 
      let imgHeight = this.img.height / 4;
      image(this.img, this.x - imgWidth / 2, this.y, imgWidth, imgHeight);
    } else {
      console.error("img not found:", this.type);
    }
  }

  drop() {
    this.moving = false;
    this.dropped = true;
  }

  isLanded() {
    return this.dropped && this.y >= this.targetY;
  }
}

class Button {
  constructor(x, y, w, h, label) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = label;
  }

  display() {
    stroke(79, 31, 15);
    strokeWeight(2);
    fill(255, 239, 204);
    rect(this.x, this.y, this.w, this.h, 12);
    fill(79, 31, 15);
    textSize(28);
    textAlign(CENTER, CENTER);
    text(this.label, this.x + this.w / 2, this.y + this.h / 2);
  }

  isMouseOver() {
    return mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h;
  }
}
