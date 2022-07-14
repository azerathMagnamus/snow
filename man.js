cnv = document.getElementById("mycanvas");
ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

let snow = [];
for (n = 0; n < 10; n++) {
  snow.push(randomsnow());
}

requestAnimationFrame(draw);

// Main loop

function draw() {
  backround("black");

  for (let p = 0; p < snow.length; p++) {
    drawsnow(snow[p]);
    movesnow(snow[p]);
  }

  requestAnimationFrame(draw);
  for (let p = 0; p < snow.length; p++) {
    if (snow[p].y >= cnv.height || snow[p].x >= cnv.width) {
      console.log("workin");
      requestAnimationFrame(draw);
    }
  }
}
document.addEventListener("keydown", handlerdraw);

function handlerdraw(event) {}
