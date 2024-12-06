function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(214,230,255);
    
    //bg
    fill(13, 168, 13);
    rect(30,280,40,90,20);
    rect(10,310,35,20);
    rect(8,300,15,30,20);
    rect(70,300,15,20);
    rect(75,280,20,40,20);
    rect(420,130,60,170,50);
    
    fill(214, 163, 11);
    ellipse(400,600,900,700); 
    fill(252,222,48);
    ellipse(0,600,900,500);
    noStroke();
    
    
    fill(255,225,229);
    push();
    ellipse(250,320,250,300);
    pop();
    fill(15,15,70);
    ellipse(200,330,30);
    ellipse(300,330,30);
    fill(255,255,255);
    ellipse(205,325,10);
    ellipse(305,325,10);
    fill(165,8,20);
    arc(250, 400, 60, 45, 0, PI);
  
    fill(41,18,6);
    rect(124,237,230,60);
    
    push();
    translate(100,250);
    rotate(1/9*PI);
    ellipse(0,0,180,80);
    pop();
    
    push();
    translate(400,250);
    rotate(8/9*PI);
    ellipse(0,21,185,130);
    pop();
    
    beginShape();
    vertex(100,250);
    vertex(400,250);
    vertex(350,100);
    vertex(150,100);
    endShape(CLOSE);
    
    ellipse(250,100,200,40);
    
    fill(89,35,6);
    
    push();
    blendMode(LIGHTEST);
    translate(105,266);
    rotate(1/9*PI);
    ellipse(0,0,135,60);
    pop();
    
    push();
    blendMode(LIGHTEST);
    translate(395,270);
    rotate(8/9*PI);
    ellipse(0,21,137,95);
    pop();
    
    push();
    blendMode(LIGHTEST);
    rect(115,247,240,50);
    pop();
    
  
    fill(250,224,25);  
    //star1
    beginShape();
    vertex(140,183);
    vertex(146,193);
    vertex(156,193);
    vertex(150,203);
    vertex(152,213);
    vertex(140,207);
    vertex(128,213);
    vertex(130,203);
    vertex(124,193);
    vertex(134,193);
    endShape(CLOSE);
  
    //star2
    beginShape();
    vertex(180,178);
    vertex(186,188);
    vertex(196,188);
    vertex(191,198);
    vertex(192,208);
    vertex(180,202);
    vertex(168,208);
    vertex(170,198);
    vertex(164,188);
    vertex(174,188);
    endShape(CLOSE);
    
  //star3
    beginShape();
    vertex(220,173);
    vertex(226,183);
    vertex(236,183);
    vertex(230,193);
    vertex(232,203);
    vertex(220,197);
    vertex(208,203);
    vertex(210,193);
    vertex(204,183);
    vertex(214,183);
    endShape(CLOSE);
    
  //star4
    beginShape();
    vertex(260,168);
    vertex(266,178);
    vertex(276,178);
    vertex(271,188);
    vertex(272,198);
    vertex(260,192);
    vertex(248,198);
    vertex(250,188);
    vertex(244,178);
    vertex(254,178);
    endShape(CLOSE);
    
  //star5
    beginShape();
    vertex(300,163);
    vertex(306,173);
    vertex(316,173);
    vertex(310,183);
    vertex(312,193);
    vertex(300,187);
    vertex(288,193);
    vertex(290,183);
    vertex(284,173);
    vertex(294,173);
    endShape(CLOSE);
    
  //star6
    beginShape();
    vertex(340,158);
    vertex(346,168);
    vertex(356,168);
    vertex(351,178);
    vertex(352,188);
    vertex(340,182);
    vertex(328,188);
    vertex(330,178);
    vertex(324,168);
    vertex(334,168);
    endShape(CLOSE);
    
    fill(255,255,102);
    ellipse(140,200,10);
    ellipse(180,195,10);
    ellipse(220,190,10);
    ellipse(260,185,10);
    ellipse(300,180,10);
    ellipse(340,175,10);
  
  }