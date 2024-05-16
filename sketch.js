function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Corpo
  fill(255, 0, 0);
  ellipse(200, 200, 100, 100);
  
  // Cabeça
  fill(0, 0, 255);
  ellipse(200, 120, 60, 60);
  
  // Olhos
  fill(0);
  ellipse(185, 115, 10, 10);
  ellipse(215, 115, 10, 10);
  
  // Boca
  noFill();
  stroke(0);
  arc(200, 125, 20, 20, 0, PI);
  
  // Braços
  strokeWeight(5);
  line(160, 200, 100, 250);
  line(240, 200, 300, 250);
  
  // Pernas
  line(200, 250, 180, 300);
  line(200, 250, 220, 300);
}
