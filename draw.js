function createrandombubblearray(total) {
  let temp = [];
  for (let n = 0; n < total; n++) {
    temp.push(newrandom());
  }
  return temp;
}
function newbubble(initalx, intialy, intialr, intialcolor) {
  return {
    x: initalx,
    y: intialy,
    r: intialr,
    color: intialcolor,
  };
}
function backround(color) {
  fill(color);
  rect(0, 0, cnv.width, cnv.height, "fill");
}
function drawabubble(abubble) {
  stroke(abubble.color);
  circle(abubble.x, abubble.y, abubble.r, "stroke");
}
function movebubble(abubble) {
  abubble.x += randomint(-2, 3);
  abubble.y += randomint(-2, 3);
}
function newrandom() {
  return {
    x: randomint(0, cnv.width),
    y: randomint(0, cnv.height),
    r: randomint(10, 100),
    color: randrgb(),
  };
}
function randomsnow() {
  return {
    x: randomint(0, cnv.width),
    y: randomint(0, cnv.height),
    r: randomint(10, 50),
    color: "white",
  };
}
function drawsnow(abubble) {
  fill(abubble.color);
  circle(abubble.x, abubble.y, abubble.r, "fill");
}
function movesnow(abubble) {
  abubble.x += randomint(2, 2);
  abubble.y += randomint(1, 5);
}

function position(abubble) {
  if (abubble.x >= cnv.width || abubble.y >= cnv.height) {
    refresh();
  }
}

function refresh(abubble) {
  console.log("refresh");
  drawsnow();
  movesnow();
}
