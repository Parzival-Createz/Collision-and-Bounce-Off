let fixed, moving;

function setup() {
  createCanvas(800, 400);
  fixed = createSprite(400, 300, 100, 50);
  moving = createSprite(100, 100, 50, 100);
  fixed.shapeColor = "lime";
  moving.shapeColor = "lime";
}

function draw() {
  background(0, 0, 0);

  console.log(-fixed.x + moving.x)

  moving.x = World.mouseX;
  moving.y = World.mouseY;

  if (moving.x - fixed.x < fixed.width / 2 + moving.width / 2
    && fixed.x - moving.x < fixed.width / 2 + moving.width / 2
    && moving.y - fixed.y < fixed.height / 2 + moving.height / 2
    && fixed.y - moving.y < fixed.height / 2 + moving.height / 2) {
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  } else {
    moving.shapeColor = "lime";
    fixed.shapeColor = "lime";
  }

  drawSprites();
}