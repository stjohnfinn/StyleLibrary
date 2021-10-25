function setup() {
    let canvas = createCanvas(300, 100);
    canvas.parent('#crosshairs');
    noCursor();
}

function draw() {
    background(215);

    stroke(200);
    strokeWeight(1);

    for (let i = 0; i < height / 10; i++) {
        line(0, i*10, width, i*10);
    }

    for (let i = 0; i < width / 10; i++) {
        line(i*10, 0, i*10, height);
    }

    stroke(0);
    strokeWeight(1);

    line(mouseX, 0, mouseX, height);
    line(0, mouseY, width, mouseY);
    circle(mouseX, mouseY, 10);
}