function stroke(stroke) {
  ctx.strokeStyle = stroke;
}
function fill(fill) {
  ctx.fillStyle = fill;
}
function font(setttngs) {
  ctx.font = setttngs;
}
function rect(x, y, w, h, mode) {
  if (mode === "stroke") {
    ctx.strokeRect(x, y, w, h);
  } else if (mode === "fill") {
    ctx.fillRect(x, y, w, h);
  }
}
function line(x1, x2, y1, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, x2);
  ctx.lineTo(y1, y2);
  ctx.stroke();
}
function circle(x, y, r, mode) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  if (mode === "stroke") {
    ctx.stroke();
  } else if (mode === "fill") {
    ctx.fill();
  }
}
function trinagle(x1, y1, x2, y2, x3, y3, mode) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  if (mode === "fill") {
    ctx.fill();
  } else if (mode === "stroke") {
    ctx.closePath();
    ctx.stroke();
  }
}
function text(word, mode, pix, pix2) {
  if (mode === "fill") {
    ctx.fillText(word, pix, pix2);
  }
  if (mode == "stroke") {
    ctx.strokeText(word, pix, pix2);
  }
}

function eclispse(x1, y1, xr, yr, rotate, mode) {
  ctx.arc(x1, y1, xr, yr, rotate, 0, 2 * Math.PI);
  if (mode == "fill") {
    ctx.fill();
  } else if (mode == "stroke") {
    ctx.stroke();
  }
}
function image(img, x, y, w, height) {
  ctx.drawImage(img, x, y, w, height);
}
