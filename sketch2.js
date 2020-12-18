let rect1, rect2;

function setup() {
    createCanvas(500, 500);
    rect1 = createSprite(100, 100, 100, 50);
    rect2 = createSprite(400, 400, 50, 100);
    rect1.debug = true;
    rect2.debug = true;
    rect1.shapeColor = "gold";
    rect2.shapeColor = "gold";
    rect1.velocityY = 3;
    rect2.velocityY = -3;
    rect1.velocityX = 3;
    rect2.velocityX = -3;
}

function draw() {
    background("black");

    if (rect1.x - rect2.x < rect1.width / 2 + rect2.width / 2 && rect2.x - rect1.x < rect2.width / 2 + rect1.width / 2) {
        rect1.velocityX = -1 * (rect1.velocityX);
        rect2.velocityX = -1 * (rect2.velocityX);
    }

    if (rect1.y - rect2.y < rect1.height / 2 + rect2.height / 2 && rect2.y - rect1.y < rect2.height / 2 + rect1.height / 2) {
        rect1.velocityY = -1 * (rect1.velocityY);
        rect2.velocityY = -1 * (rect2.velocityY);
    }

    drawSprites();
}